package com.eng.software.tp.TPEngSoftware.api.controllers;

import com.eng.software.tp.TPEngSoftware.dto.SaleAndProductsDTO;
import com.eng.software.tp.TPEngSoftware.dto.SaleDTO;
import com.eng.software.tp.TPEngSoftware.services.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sale")
public class SaleController {

    @Autowired
    private SaleService saleService;

    @PostMapping
    public ResponseEntity<List<SaleDTO>> getAllSales(@RequestBody Long idCustomer){
        List<SaleDTO> dtoList = saleService.getAllSalesByCustomer(idCustomer);
        return dtoList.isEmpty() ? ResponseEntity.noContent().build() : ResponseEntity.ok(dtoList);
    }

    @PostMapping("/list")
    public ResponseEntity<List<SaleAndProductsDTO>> getSalesWithProducts(@RequestBody Long idCustomer){
        List<SaleAndProductsDTO> dtoList = saleService.getSaleWithProducts(idCustomer);
        return dtoList.isEmpty() ? ResponseEntity.noContent().build() : ResponseEntity.ok(dtoList);
    }

    @PostMapping("/insert")
    public ResponseEntity<SaleDTO> insert(@RequestBody SaleAndProductsDTO dto){
        SaleDTO saleDTO = saleService.insert(dto);
        return ResponseEntity.ok(saleDTO);
    }

}
