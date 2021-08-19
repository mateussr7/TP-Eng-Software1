package com.eng.software.tp.TPEngSoftware.dto;

import com.eng.software.tp.TPEngSoftware.domain.Employee;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.modelmapper.ModelMapper;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
public class EmployeeDTO {

    private Long id;

    private String name;
    private String telephone;
    private String email;
    private Double salary;
    private Boolean exclude;

    public EmployeeDTO(Employee employee){
        this.id = employee.getId();
        this.name = employee.getName();
        this.telephone = employee.getTelephone();
        this.email = employee.getEmail();
        this.salary = employee.getSalary();
        this.exclude = employee.getExclude();
    }

    public Employee toEntity(){
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.createTypeMap(this, Employee.class).map(this);
    }

    public static List<EmployeeDTO> createDTOList(List<Employee> employees){
        List<EmployeeDTO> dtoList = new ArrayList<>();
        for(Employee employee : employees)
            dtoList.add(new EmployeeDTO(employee));
        return dtoList;
    }

}
