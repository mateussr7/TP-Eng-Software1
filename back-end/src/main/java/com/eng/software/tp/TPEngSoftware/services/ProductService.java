package com.eng.software.tp.TPEngSoftware.services;

import com.eng.software.tp.TPEngSoftware.domain.Product;
import com.eng.software.tp.TPEngSoftware.domain.Sale;
import com.eng.software.tp.TPEngSoftware.domain.SaledProduct;
import com.eng.software.tp.TPEngSoftware.dto.ProductDTO;
import com.eng.software.tp.TPEngSoftware.dto.SaledProductDTO;
import com.eng.software.tp.TPEngSoftware.repositories.ProductRepository;
import com.eng.software.tp.TPEngSoftware.repositories.SaleRepository;
import com.eng.software.tp.TPEngSoftware.repositories.SaledProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private SaleRepository saleRepository;

    @Autowired
    private SaledProductRepository saledProductRepository;


    public List<ProductDTO> getAllProducts(){
        List<Product> products = productRepository.findAllByExcludeFalse();
        return ProductDTO.createDTOList(products);
    }

    public ProductDTO insert(ProductDTO productDTO){
        Product product = productDTO.toEntity();
        Product savedProduct = productRepository.save(product);
        return new ProductDTO(savedProduct);
    }

    public ProductDTO delete(Long idProduct){
        Product product = productRepository.findById(idProduct).orElseThrow(() ->
                new NoSuchElementException("Product not found"));
        product.setExclude(true);

        return new ProductDTO(productRepository.save(product));
    }

    public List<ProductDTO> getProductsBySale(Long idSale){
        Sale sale = saleRepository.findById(idSale).orElseThrow(() ->
                new NoSuchElementException("Sale not found"));
        List<SaledProduct> saledProducts = saledProductRepository.findAllBySale(sale);
        List<Product> products = productRepository.findAllByIdIn(SaledProductDTO.getIdList(saledProducts));
        return ProductDTO.createDTOList(products);
    }

    public ProductDTO updateProduct(Long idProduct, ProductDTO  productDTO){
        Product product = productRepository.findById(idProduct).orElseThrow(()->
                new NoSuchElementException("Product not found"));

        Product updatedEntity = productDTO.toEntity();
        product.setName(updatedEntity.getName());
        product.setDescription(updatedEntity.getDescription());
        product.setBrand(updatedEntity.getBrand());
        product.setPrice(updatedEntity.getPrice());
        product.setAmount(updatedEntity.getAmount());
        product.setProductType(updatedEntity.getProductType());

        return new ProductDTO(productRepository.save(product));
    }

}
