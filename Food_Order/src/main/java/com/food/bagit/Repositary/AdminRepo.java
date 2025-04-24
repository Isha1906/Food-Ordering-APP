package com.food.bagit.Repositary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.food.bagit.Model.Admin;


@Repository
public interface AdminRepo extends JpaRepository<Admin, Integer>{
	
	Admin findByNameAndPassword(String name, String password);
}
