package com.eng.software.tp.TPEngSoftware.dto;

import com.eng.software.tp.TPEngSoftware.domain.User;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserDTO {

    private Long id;

    private Boolean isAdmin;
    private String name;
    private String email;
    private String password;
    private String telephone;
    private Boolean inTrash;
    private Boolean exclude;
    private Integer version;

    public UserDTO(User user){
        this.id = user.getId();
        this.isAdmin = user.getIsAdmin();
        this.name = user.getName();
        this.email = user.getEmail();
        this.password = user.getPassword();
        this.telephone = user.getTelephone();
        this.inTrash = user.getInTrash();
        this.exclude = user.getExclude();
        this.version = user.getVersion();
    }
}
