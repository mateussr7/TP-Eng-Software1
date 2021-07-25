package com.eng.software.tp.TPEngSoftware.dto;

import com.eng.software.tp.TPEngSoftware.domain.User;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.modelmapper.ModelMapper;

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
    private Boolean logged;

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
        this.logged = user.getLogged();
    }

    public User toEntity(){
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.createTypeMap(this, User.class).map(this);
    }
}
