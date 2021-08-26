package com.eng.software.tp.TPEngSoftware.domain;

import com.eng.software.tp.TPEngSoftware.enums.EnumUserPermission;
import lombok.Data;

import javax.persistence.*;

@Entity(name = "usersystem")
@Data
public class User {

    @Id
    @Column(name="id", nullable = false, unique = true, columnDefinition = "serial")
    private Long id;

    private String name;
    private String email;
    private String password;
    private String telephone;
    private Boolean exclude;
    private Boolean logged;

    @Column(name="is_admin")
    private Boolean isAdmin;

    @Version
    private Integer version;


}
