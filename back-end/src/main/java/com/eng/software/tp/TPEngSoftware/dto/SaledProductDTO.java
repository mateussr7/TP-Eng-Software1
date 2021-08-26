package com.eng.software.tp.TPEngSoftware.dto;

import com.eng.software.tp.TPEngSoftware.domain.Sale;
import com.eng.software.tp.TPEngSoftware.domain.SaledProduct;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
public class SaledProductDTO {

    private Long id;
    private Long idProduct;
    private Long idSale;

    public SaledProductDTO(SaledProduct product){
        this.id = product.getId();
        this.idProduct = product.getIdProduct();
        this.idSale = product.getSale().getId();
    }

    public SaledProductDTO(Sale sale, ProductDTO dto){
        this.idSale = sale.getId();
        this.idProduct = dto.getId();
    }

    public static List<Long> getIdList(List<SaledProduct> saledProducts){
        List<Long> idList = new ArrayList<>();
        for(SaledProduct saledProduct : saledProducts){
            idList.add(saledProduct.getIdProduct());
        }
        return idList;
    }

    public static List<SaledProductDTO> getSaledProducts(Sale sale, List<ProductDTO> productDTOS){
        List<SaledProductDTO> saledProductDTOS = new ArrayList<>();
        for(ProductDTO dto : productDTOS)
            saledProductDTOS.add(new SaledProductDTO(sale, dto));
        return saledProductDTOS;
    }
}
