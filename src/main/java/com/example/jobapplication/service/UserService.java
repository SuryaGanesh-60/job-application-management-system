package com.example.jobapplication.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.jobapplication.entity.User;
import com.example.jobapplication.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // GET ALL
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // GET BY ID
    public User getUserById(int id) {
        return userRepository.findById(id).orElse(null);
    }

    // CREATE
    public User createUser(User user) {
        return userRepository.save(user);
    }

    // UPDATE
    public User updateUser(int id, User user) {

        User existingUser = userRepository.findById(id).orElse(null);

        if (existingUser != null) {

            existingUser.setName(user.getName());
            existingUser.setEmail(user.getEmail());
            existingUser.setPhone(user.getPhone());

            return userRepository.save(existingUser);
        }

        return null;
    }

    // DELETE
    public String deleteUser(int id) {

        User existingUser = userRepository.findById(id).orElse(null);

        if (existingUser != null) {
            userRepository.delete(existingUser);
            return "User deleted successfully";
        }

        return "User not found";
    }
}