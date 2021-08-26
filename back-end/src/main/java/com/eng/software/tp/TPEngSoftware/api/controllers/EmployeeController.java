package com.eng.software.tp.TPEngSoftware.api.controllers;

import com.eng.software.tp.TPEngSoftware.dto.EmployeeDTO;
import com.eng.software.tp.TPEngSoftware.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/list")
    public ResponseEntity<List<EmployeeDTO>> getAllEmployee(){
        List<EmployeeDTO> dtoList = employeeService.getAllEmployees();
        return dtoList.isEmpty() ? ResponseEntity.noContent().build() : ResponseEntity.ok(dtoList);
    }

    @PostMapping("/insert")
    public ResponseEntity<EmployeeDTO> insert(@RequestBody EmployeeDTO dto){
        EmployeeDTO employeeDTO = employeeService.insert(dto);
        return ResponseEntity.ok(dto);
    }

    @PostMapping("/update")
    public ResponseEntity<EmployeeDTO> update(@RequestBody Long idEmployee, @RequestBody EmployeeDTO dto){
        EmployeeDTO employeeDTO = employeeService.update(idEmployee, dto);
        return ResponseEntity.ok(employeeDTO);
    }

    @PostMapping("/delete")
    public ResponseEntity<EmployeeDTO> delete(@RequestBody Long id){
        EmployeeDTO dto = employeeService.delete(id);
        return ResponseEntity.ok(dto);
    }

}
