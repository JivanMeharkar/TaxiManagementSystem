package com.taxi_system.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.taxi_system.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}

