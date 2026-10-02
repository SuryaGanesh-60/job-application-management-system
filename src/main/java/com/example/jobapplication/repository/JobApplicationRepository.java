package com.example.jobapplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.jobapplication.entity.JobApplication;

public interface JobApplicationRepository extends JpaRepository<JobApplication, Integer> {

}