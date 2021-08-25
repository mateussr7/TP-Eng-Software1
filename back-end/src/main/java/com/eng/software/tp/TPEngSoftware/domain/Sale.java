package com.eng.software.tp.TPEngSoftware.domain;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Sale {

    @Id
    @Column(name = "id", nullable = false, unique = true, columnDefinition = "serial")
    private Long id;

    @ManyToOne
    private User customer;

    @OneToMany
    private List<Product> products;


}
