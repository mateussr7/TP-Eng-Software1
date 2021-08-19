package com.eng.software.tp.TPEngSoftware.dto;

import com.eng.software.tp.TPEngSoftware.domain.User;
import com.eng.software.tp.TPEngSoftware.enums.EnumUserPermission;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.modelmapper.ModelMapper;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
public class UserDTO {

    private Long id;

    private String name;
    private String email;
    private String password;
    private String telephone;
    private Boolean inTrash;
    private Boolean exclude;
    private Integer version;
    private Boolean logged;
    private EnumUserPermission permission;

    public UserDTO(User user){
        this.id = user.getId();
        this.name = user.getName();
        this.email = user.getEmail();
        this.password = user.getPassword();
        this.telephone = user.getTelephone();
        this.inTrash = user.getInTrash();
        this.exclude = user.getExclude();
        this.version = user.getVersion();
        this.logged = user.getLogged();
        this.permission = user.getPermission();
    }

    public User toEntity(){
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.createTypeMap(this, User.class).map(this);
    }

    public static List<UserDTO> createDTOList(List<User> users){
        List<UserDTO> dtoList = new ArrayList<>();
        for(User user : users)
            dtoList.add(new UserDTO(user));
        return dtoList;
    }
}
