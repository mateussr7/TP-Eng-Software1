package com.eng.software.tp.TPEngSoftware.services;

import com.eng.software.tp.TPEngSoftware.domain.Employee;
import com.eng.software.tp.TPEngSoftware.dto.EmployeeDTO;
import com.eng.software.tp.TPEngSoftware.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<EmployeeDTO> getAllEmployees(){
        List<Employee> employees = employeeRepository.findAllByExcludeFalse();
        return EmployeeDTO.createDTOList(employees);
    }

    public EmployeeDTO insert(EmployeeDTO employeeDTO){
        Employee employee = employeeDTO.toEntity();
        return new EmployeeDTO(employeeRepository.save(employee));
    }

    public EmployeeDTO delete(Long idEmployee){
        Employee employee = employeeRepository.findById(idEmployee).orElseThrow(() ->
                new NoSuchElementException("Employee Not Found"));
        employee.setExclude(true);
        return new EmployeeDTO(employeeRepository.save(employee));
    }

    public  EmployeeDTO update(Long id, EmployeeDTO employeeDTO){
        Employee employee = employeeRepository.findById(id).orElseThrow(() ->
                new NoSuchElementException("Employee not found"));
        Employee updated = employeeDTO.toEntity();
        employee.setName(updated.getName());
        employee.setEmail(updated.getEmail());
        employee.setTelephone(updated.getTelephone());
        employee.setSalary(updated.getSalary());

        return new EmployeeDTO(employeeRepository.save(employee));
    }
}
