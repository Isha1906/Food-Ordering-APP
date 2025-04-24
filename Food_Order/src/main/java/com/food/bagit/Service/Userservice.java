package com.food.bagit.Service;

import java.util.List;

import com.food.bagit.Model.User;

public interface Userservice {
	
	public User addUser(User u);
	
	public User getUserByEmail(String email);
	
	public User login(String email,String password);
	
	public User userDetails(String email,String password);
	
	public List<User> getAllUser();


}