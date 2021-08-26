package com.eng.software.tp.TPEngSoftware.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class SaledProduct {

    @Id
    @Column(name= "id", nullable = false, unique = true, columnDefinition = "serial")
    private Long id;

    private Long idProduct;

    @ManyToOne
    private Sale sale;

}
