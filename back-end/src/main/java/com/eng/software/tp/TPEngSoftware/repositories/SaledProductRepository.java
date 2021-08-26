package com.eng.software.tp.TPEngSoftware.repositories;

import com.eng.software.tp.TPEngSoftware.domain.Sale;
import com.eng.software.tp.TPEngSoftware.domain.SaledProduct;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;

public interface SaledProductRepository extends JpaRepository<SaledProduct, Long> {

    List<SaledProduct> findAllByIdIn(Collection<Long> collection);

    List<SaledProduct> findAllBySale(Sale sale);

}
