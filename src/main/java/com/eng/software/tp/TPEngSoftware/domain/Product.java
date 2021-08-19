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
    private Double value;
    private String brand;
    @Enumerated(EnumType.STRING)
    private EnumProductType productType;
    private Integer amount;
    private Boolean exclude;

    @ManyToOne
    private Sale sale;

    @Version
    private Integer version;

}
