package com.eng.software.tp.TPEngSoftware.services;

import com.eng.software.tp.TPEngSoftware.domain.Product;
import com.eng.software.tp.TPEngSoftware.domain.Sale;
import com.eng.software.tp.TPEngSoftware.domain.SaledProduct;
import com.eng.software.tp.TPEngSoftware.domain.User;
import com.eng.software.tp.TPEngSoftware.dto.ProductDTO;
import com.eng.software.tp.TPEngSoftware.dto.SaleAndProductsDTO;
import com.eng.software.tp.TPEngSoftware.dto.SaleDTO;
import com.eng.software.tp.TPEngSoftware.dto.SaledProductDTO;
import com.eng.software.tp.TPEngSoftware.repositories.ProductRepository;
import com.eng.software.tp.TPEngSoftware.repositories.SaleRepository;
import com.eng.software.tp.TPEngSoftware.repositories.SaledProductRepository;
import com.eng.software.tp.TPEngSoftware.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class SaleService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SaleRepository saleRepository;

    @Autowired
    private SaledProductRepository saledProductRepository;

    @Autowired
    private ProductRepository productRepository;

    public List<SaleDTO> getAllSalesByCustomer(Long idCustomer){
        User user = userRepository.findById(idCustomer).orElseThrow(() ->
                new NoSuchElementException("Customer not found"));
        List<Sale> sales = saleRepository.findAllByCustomer(user);
        return SaleDTO.createDTOList(sales);
    }

    public SaleDTO insert(SaleDTO dto){
        Sale sale = dto.toEntity();

        User user = userRepository.findById(dto.getIdCustomer()).orElseThrow(() ->
                new NoSuchElementException("Customer not found"));
        List<SaledProduct> saledProducts = saledProductRepository.findAllByIdIn(dto.getIdProducts());
        sale.setCustomer(user);
        sale.setSaledProducts(saledProducts);
        return new SaleDTO(saleRepository.save(sale));
    }

    public SaleDTO insert(SaleAndProductsDTO dto){
        SaleDTO saleDTO = dto.getSaleDTO();
        User user = userRepository.findById(saleDTO.getIdCustomer()).orElseThrow(()-> new NoSuchElementException("Customer not found"));
        Sale sale = saleDTO.toEntity();
        List<SaledProduct> saledProducts = new ArrayList<>();
        for(ProductDTO productDTO : dto.getProductDTOS()){
            SaledProduct saledProduct = new SaledProduct();
            saledProduct.setSale(sale);
            saledProduct.setIdProduct(productDTO.getId());
            saledProducts.add(saledProduct);
        }
        sale.setCustomer(user);
        saledProductRepository.saveAll(saledProducts);
        return new SaleDTO(saleRepository.save(sale));
    }

    public List<SaleAndProductsDTO> getSaleWithProducts(Long idCustomer){
        List<SaleAndProductsDTO> allSales = new ArrayList<>();
        User user = userRepository.findById(idCustomer).orElseThrow(() ->
                new NoSuchElementException("User not found"));
        List<Sale> sales = saleRepository.findAllByCustomer(user);
        for(Sale sale : sales){
            List<SaledProduct> saledProducts = saledProductRepository.findAllBySale(sale);
            List<Product> products = productRepository.findAllByIdIn(SaledProductDTO.getIdList(saledProducts));
            allSales.add(new SaleAndProductsDTO(sale, products));
        }
        return allSales;
    }

}
