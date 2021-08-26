package com.eng.software.tp.TPEngSoftware.api.controllers;

import com.eng.software.tp.TPEngSoftware.dto.UserDTO;
import com.eng.software.tp.TPEngSoftware.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<UserDTO> login(@RequestBody  UserDTO userDTO){
        return ResponseEntity.ok(userService.login(userDTO));
    }

    @PostMapping("/list")
    public ResponseEntity<List<UserDTO>> getAllUsers(){
        List<UserDTO> dtoList = userService.getUsersList();
        return dtoList.isEmpty() ? ResponseEntity.noContent().build() : ResponseEntity.ok(dtoList);
    }

}
