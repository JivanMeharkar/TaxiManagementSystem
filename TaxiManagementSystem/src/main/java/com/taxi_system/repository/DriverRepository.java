package com.taxi_system.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.taxi_system.model.Driver;

public interface DriverRepository extends JpaRepository<Driver, Long> {
    List<Driver> findByAvailableTrue(); // Get available drivers
}