package com.eng.software.tp.TPEngSoftware.dto;

import com.eng.software.tp.TPEngSoftware.domain.Product;
import com.eng.software.tp.TPEngSoftware.domain.Sale;
import com.eng.software.tp.TPEngSoftware.domain.SaledProduct;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.modelmapper.ModelMapper;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Data
public class SaleDTO {

    private Long id;

    private Long idCustomer;
    private List<Long> idProducts;

    public SaleDTO(Sale sale){
        this.id = sale.getId();
        this.idCustomer = sale.getCustomer().getId();
        List<Long> ids = new ArrayList<>();
        for(SaledProduct product : sale.getSaledProducts())
            idProducts.add(product.getId());
        this.idProducts = ids;
    }

    public Sale toEntity(){
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.createTypeMap(this, Sale.class). map(this);
    }

    public static List<SaleDTO> createDTOList(List<Sale> sales){
        List<SaleDTO> dtoList = new ArrayList<>();
        for(Sale sale : sales)
            dtoList.add(new SaleDTO(sale));
        return dtoList;
    }

    public static List<Long> getidList(List<Sale> sales){
        List<Long> idList = new ArrayList<>();
        for(Sale sale : sales){
            idList.add(sale.getId());
        }
        return idList;
    }

}
