package com.eng.software.tp.TPEngSoftware.repositories;

import com.eng.software.tp.TPEngSoftware.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByIdAndExclude(Long id, Boolean exclude);

    List<User> findAllByExclude(Boolean exclude);

    List<User> findAllByExcludeAndLoggedTrue(Boolean exclude);

    Optional<User> findByEmailAndExcludeFalse(String email);

    List<User> findAllByLoggedFalseAndExclude(Boolean exclude);

}
