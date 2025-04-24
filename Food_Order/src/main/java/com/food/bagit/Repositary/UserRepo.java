package com.food.bagit.Repositary;


import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.food.bagit.Model.User;


@Repository
public interface UserRepo extends JpaRepository<User, Integer> {

	User findByEmail(String email);

	User findByEmailAndPassword(String email, String password);
}