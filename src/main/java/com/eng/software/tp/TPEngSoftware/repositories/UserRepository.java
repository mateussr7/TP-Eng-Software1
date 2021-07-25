package com.eng.software.tp.TPEngSoftware.repositories;

import com.eng.software.tp.TPEngSoftware.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByIdAndInTrashAndExclude(Long id, Boolean inTrash, Boolean exclude);

    List<User> findAllByInTrashAndExclude(Boolean inTrash, Boolean exclude);

    List<User> findAllByInTrashAndExcludeAndLoggedTrue(Boolean inTrash, Boolean exclude);

    Optional<User> findByNameAndEmail(String name, String email);

}
