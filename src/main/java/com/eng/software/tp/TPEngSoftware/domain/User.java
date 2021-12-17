package com.eng.software.tp.TPEngSoftware.domain;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Version;

@Entity
@Data
public class User {

    @Id
    @Column(name="id", nullable = false, unique = true, columnDefinition = "serial")
    private Long id;

    private Boolean isAdmin;
    private String name;
    private String email;
    private String password;
    private String telephone;
    private Boolean inTrash;
    private Boolean exclude;

    @Version
    private Integer version;

}
