package com.eng.software.tp.TPEngSoftware.repositories;

import com.eng.software.tp.TPEngSoftware.domain.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
