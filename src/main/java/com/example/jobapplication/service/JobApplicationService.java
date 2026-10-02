package com.example.jobapplication.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.jobapplication.entity.JobApplication;
import com.example.jobapplication.repository.JobApplicationRepository;

@Service
public class JobApplicationService {

    private final JobApplicationRepository jobApplicationRepository;

    public JobApplicationService(JobApplicationRepository jobApplicationRepository) {
        this.jobApplicationRepository = jobApplicationRepository;
    }

    // GET ALL
    public List<JobApplication> getAllApplications() {
        return jobApplicationRepository.findAll();
    }

    // GET BY ID
    public JobApplication getApplicationById(int id) {
        return jobApplicationRepository.findById(id).orElse(null);
    }

    // CREATE
    public JobApplication createApplication(JobApplication application) {
        return jobApplicationRepository.save(application);
    }

    // UPDATE
    public JobApplication updateApplication(int id, JobApplication application) {

        JobApplication existingApplication =
                jobApplicationRepository.findById(id).orElse(null);

        if (existingApplication != null) {

            existingApplication.setCompanyName(application.getCompanyName());
            existingApplication.setJobRole(application.getJobRole());
            existingApplication.setLocation(application.getLocation());
            existingApplication.setStatus(application.getStatus());
            existingApplication.setAppliedDate(application.getAppliedDate());

            // Updated relationship
            existingApplication.setUser(application.getUser());

            return jobApplicationRepository.save(existingApplication);
        }

        return null;
    }

    // DELETE
    public String deleteApplication(int id) {

        JobApplication existingApplication =
                jobApplicationRepository.findById(id).orElse(null);

        if (existingApplication != null) {
            jobApplicationRepository.delete(existingApplication);
            return "Job application deleted successfully";
        }

        return "Job application not found";
    }
}