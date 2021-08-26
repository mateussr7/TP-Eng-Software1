package com.eng.software.tp.TPEngSoftware.services;

import com.eng.software.tp.TPEngSoftware.domain.User;
import com.eng.software.tp.TPEngSoftware.dto.UserDTO;
import com.eng.software.tp.TPEngSoftware.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserDTO getUserById(Long id){
        User user = userRepository.findByIdAndExclude(id, false).orElseThrow(() ->
                new NoSuchElementException("User not found"));
        return new UserDTO(user);
    }

    public UserDTO login(UserDTO userDTO){
        List<User> loggedUsers = userRepository.findAllByExcludeAndLoggedTrue(false);

        for(User user : loggedUsers){
            user.setLogged(false);
        }

        userRepository.saveAll(loggedUsers);
        userRepository.flush();

        User user = userRepository.findByEmailAndExcludeFalse(userDTO.getEmail()).orElseThrow(() ->
                new NoSuchElementException("User not found"));

        user.setLogged(true);
        return new UserDTO(userRepository.save(user));
    }

    public UserDTO logout(UserDTO userDTO){
        User user = userRepository.findByEmailAndExcludeFalse(userDTO.getEmail()).orElseThrow(() ->
                new NoSuchElementException("User not found"));

        user.setLogged(false);
        return new UserDTO(userRepository.save(user));
    }

    public UserDTO insertNewUser(UserDTO userDTO){
        User user = userDTO.toEntity();

        if(user.getName() == null) throw new IllegalArgumentException("Name cannot be null");
        if(user.getEmail() == null) throw new IllegalArgumentException("Email cannot be null");

        return new UserDTO(userRepository.save(user));
    }

    public List<UserDTO> getUsersList(){
        List<User> users = userRepository.findAllByLoggedFalseAndExclude(false);
        return UserDTO.createDTOList(users);
    }

    public UserDTO deleteUser(Long idUser){
        User user = userRepository.findByIdAndExclude(idUser, false).orElseThrow(() ->
                new NoSuchElementException("User not found"));

        user.setExclude(true);
        user.setLogged(false);
        return new UserDTO(userRepository.save(user));
    }

}
