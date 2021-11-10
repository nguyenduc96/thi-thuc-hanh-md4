package com.nguyenduc.repository;

import com.nguyenduc.model.City;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICityRepository extends JpaRepository<City, Long> {

}
