package com.eng.software.tp.TPEngSoftware.dto;

import com.bedatadriven.jackson.datatype.jts.JtsModule;
import com.eng.software.tp.TPEngSoftware.domain.Product;
import com.eng.software.tp.TPEngSoftware.domain.Sale;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
public class SaleAndProductsDTO {

    private SaleDTO saleDTO;
    private List<ProductDTO> productDTOS;

    public SaleAndProductsDTO(Sale sale, List<Product> products){
        this.saleDTO = new SaleDTO(sale);
        List<ProductDTO> dtoList = new ArrayList<>();
        for(Product product : products){
            dtoList.add(new ProductDTO(product));
        }
        this.productDTOS = dtoList;
    }

    public String toJson() throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        mapper.registerModule(new JtsModule());
        return mapper.writeValueAsString(this);
    }

}
