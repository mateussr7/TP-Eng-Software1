package com.eng.software.tp.TPEngSoftware.domain;

import com.eng.software.tp.TPEngSoftware.enums.EnumProductType;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Product {

    @Id
    @Column(name="id", nullable = false, unique = true, columnDefinition = "serial")
    private Long id;

    private String name;
    private String description;
    private Double price;
    private String brand;
    private String productType;
    private Integer amount;
    private Boolean exclude;

    @Version
    private Integer version;

}
