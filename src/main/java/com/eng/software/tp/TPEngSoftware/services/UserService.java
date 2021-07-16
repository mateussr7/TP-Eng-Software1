package com.eng.software.tp.TPEngSoftware.services;

import com.eng.software.tp.TPEngSoftware.domain.User;
import com.eng.software.tp.TPEngSoftware.dto.UserDTO;
import com.eng.software.tp.TPEngSoftware.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserDTO getUserById(Long id){
        User user = userRepository.findByIdAndInTrashAndExclude(id, false, false).orElseThrow(() ->
                new NoSuchElementException("User not found"));
        return new UserDTO(user);
    }

}
