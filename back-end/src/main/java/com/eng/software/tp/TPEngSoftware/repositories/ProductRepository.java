package com.eng.software.tp.TPEngSoftware.repositories;

import com.eng.software.tp.TPEngSoftware.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findAllByExcludeFalse();

    List<Product> findAllByIdIn(Collection<Long> ids);

}
