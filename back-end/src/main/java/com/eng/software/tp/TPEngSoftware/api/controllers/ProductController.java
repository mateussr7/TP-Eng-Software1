package com.eng.software.tp.TPEngSoftware.api.controllers;

import com.eng.software.tp.TPEngSoftware.domain.Product;
import com.eng.software.tp.TPEngSoftware.dto.ProductDTO;
import com.eng.software.tp.TPEngSoftware.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/list")
    public ResponseEntity<List<ProductDTO>> listProducts(){
        List<ProductDTO> dtoList = productService.getAllProducts();
        return dtoList.isEmpty()? ResponseEntity.noContent().build() : ResponseEntity.ok(dtoList);
    }

    @PostMapping("/insert")
    public ResponseEntity<ProductDTO> insertProduct(@RequestBody ProductDTO dto){
        ProductDTO productDTO = productService.insert(dto);
        return ResponseEntity.ok(productDTO);
    }

    @PostMapping("/delete")
    public ResponseEntity<ProductDTO> deleteProduct(@RequestBody Long idProduct){
        ProductDTO dto = productService.delete(idProduct);
        return ResponseEntity.ok(dto);
    }

    @PostMapping("/update")
    public ResponseEntity<ProductDTO> updateProduct(@RequestBody Long idProduct, @RequestBody ProductDTO productDTO){
        ProductDTO dto = productService.updateProduct(idProduct, productDTO);
        return ResponseEntity.ok(dto);
    }

}
