package com.example.jobapplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.jobapplication.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}