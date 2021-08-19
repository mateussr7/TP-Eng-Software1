package com.eng.software.tp.TPEngSoftware.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;

public enum EnumProductType {

    SMARTPHONE("SMARTPHONE", 0),
    ELECTRONIC("ELECTRONIC", 1),
    COMPUTER("COMPUTER", 2),
    PERIPHERALS("PERIPHERALS", 3);


    @JsonValue
    @Getter
    private final String type;

    @Getter
    private final Integer value;

    EnumProductType(String type, Integer value){
        this.type = type;
        this.value = value;
    }

    @JsonCreator
    public static EnumProductType GetByString(String value){
        for(EnumProductType productType : EnumProductType.values())
            if(productType.type.equalsIgnoreCase(value))
                return productType;

        throw new IllegalArgumentException("Invalid Enum Constraint");
    }

    @JsonCreator
    public static EnumProductType GetByType(String type){
        if(type.equalsIgnoreCase("SMARTPHONE"))
            return EnumProductType.SMARTPHONE;
        else if(type.equalsIgnoreCase("ELECTRONIC"))
            return EnumProductType.ELECTRONIC;
        else if(type.equalsIgnoreCase("COMPUTER"))
            return EnumProductType.COMPUTER;
        else if(type.equalsIgnoreCase("PERIPHERALS"))
            return EnumProductType.PERIPHERALS;
        else
            throw new IllegalArgumentException("Invalid Enum Constraint");
    }

}
