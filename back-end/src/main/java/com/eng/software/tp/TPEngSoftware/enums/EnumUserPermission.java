package com.eng.software.tp.TPEngSoftware.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;

public enum EnumUserPermission {

    ADMIN("ADMIN", 0),
    CUSTOMER("CUSTOMER", 1);

    @Getter
    @JsonValue
    private final String type;

    @Getter
    private final Integer value;

    EnumUserPermission(String type, Integer value){
        this.type = type;
        this.value = value;
    }

    @JsonCreator
    public EnumUserPermission GetByString(String value){
        for(EnumUserPermission userPermission : EnumUserPermission.values())
            if(userPermission.type.equalsIgnoreCase(value))
                return userPermission;
        throw new IllegalArgumentException("Invalid Enum Constraint");
    }

    @JsonCreator
    public EnumUserPermission GetByType(String type){
        if(type.equalsIgnoreCase("ADMIN"))
            return EnumUserPermission.ADMIN;
        else if(type.equalsIgnoreCase("CUSTOMER"))
            return EnumUserPermission.CUSTOMER;
        else throw new IllegalArgumentException("Invalid Enum Constraint");
    }

}
