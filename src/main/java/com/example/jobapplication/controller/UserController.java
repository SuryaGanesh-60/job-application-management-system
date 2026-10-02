package com.example.jobapplication.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.jobapplication.entity.JobApplication;
import com.example.jobapplication.entity.User;
import com.example.jobapplication.service.JobApplicationService;
import com.example.jobapplication.service.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    private final UserService userService;
    private final JobApplicationService jobApplicationService;

    public UserController(
            UserService userService,
            JobApplicationService jobApplicationService) {

        this.userService = userService;
        this.jobApplicationService = jobApplicationService;
    }

    // ==================== USER APIs ====================

    // GET ALL USERS
    // http://localhost:8080/users
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    // GET USER BY ID
    // http://localhost:8080/users/1
    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable("id") int id) {
        return userService.getUserById(id);
    }

    // CREATE USER
    // http://localhost:8080/users
    @PostMapping("/users")
    public User createUser(@Valid @RequestBody User user) {
        return userService.createUser(user);
    }

    // UPDATE USER
    // http://localhost:8080/users/1
    @PutMapping("/users/{id}")
    public User updateUser(
            @PathVariable("id") int id,
            @Valid @RequestBody User user) {

        return userService.updateUser(id, user);
    }

    // DELETE USER
    // http://localhost:8080/users/1
    @DeleteMapping("/users/{id}")
    public String deleteUser(@PathVariable("id") int id) {
        return userService.deleteUser(id);
    }


    // ==================== JOB APPLICATION APIs ====================

    // GET ALL APPLICATIONS
    // http://localhost:8080/applications
    @GetMapping("/applications")
    public List<JobApplication> getAllApplications() {
        return jobApplicationService.getAllApplications();
    }

    // GET APPLICATION BY ID
    // http://localhost:8080/applications/1
    @GetMapping("/applications/{id}")
    public JobApplication getApplicationById(
            @PathVariable("id") int id) {

        return jobApplicationService.getApplicationById(id);
    }

    // CREATE APPLICATION
    // http://localhost:8080/applications
    @PostMapping("/applications")
    public JobApplication createApplication(
            @RequestBody JobApplication application) {

        return jobApplicationService.createApplication(application);
    }

    // UPDATE APPLICATION
    // http://localhost:8080/applications/1
    @PutMapping("/applications/{id}")
    public JobApplication updateApplication(
            @PathVariable("id") int id,
            @RequestBody JobApplication application) {

        return jobApplicationService.updateApplication(id, application);
    }

    // DELETE APPLICATION
    // http://localhost:8080/applications/1
    @DeleteMapping("/applications/{id}")
    public String deleteApplication(
            @PathVariable("id") int id) {

        return jobApplicationService.deleteApplication(id);
    }
}