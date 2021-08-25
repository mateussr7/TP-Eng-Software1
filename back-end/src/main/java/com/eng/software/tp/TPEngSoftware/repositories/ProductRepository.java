package com.eng.software.tp.TPEngSoftware.repositories;

import com.eng.software.tp.TPEngSoftware.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
