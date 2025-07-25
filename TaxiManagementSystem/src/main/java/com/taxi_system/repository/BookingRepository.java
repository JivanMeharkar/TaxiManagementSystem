package com.taxi_system.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.taxi_system.model.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByDriverId(Long driverId);
}
