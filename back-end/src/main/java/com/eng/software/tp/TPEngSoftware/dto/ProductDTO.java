package com.eng.software.tp.TPEngSoftware.dto;

import com.eng.software.tp.TPEngSoftware.domain.Product;
import com.eng.software.tp.TPEngSoftware.enums.EnumProductType;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.modelmapper.ModelMapper;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
public class ProductDTO {

    private Long id;

    private String name;
    private String description;
    private Double price;
    private String brand;
    private String productType;
    private Integer amount;
    private Boolean exclude;

    public ProductDTO(Product product){
        this.id = product.getId();
        this.name = product.getName();
        this.description = product.getDescription();
        this.price = product.getPrice();
        this.brand = product.getBrand();
        this.productType = product.getProductType();
        this.amount = product.getAmount();
        this.exclude = product.getExclude();
    }

    public Product toEntity(){
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.createTypeMap(this, Product.class).map(this);
    }

    public static List<ProductDTO> createDTOList(List<Product> products){
        List<ProductDTO> dtoList = new ArrayList<>();
        for(Product product : products)
            dtoList.add(new ProductDTO(product));
        return dtoList;
    }

}
