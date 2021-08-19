package com.eng.software.tp.TPEngSoftware.domain;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class Employee {

    @Id
    @Column(name ="id", nullable = false, unique = true, columnDefinition = "serial")
    private Long id;

    private String name;
    private String telephone;
    private String email;
    private Double salary;
    private Boolean exclude;

}
