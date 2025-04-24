package com.food.bagit.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.food.bagit.Model.User;
import com.food.bagit.Repositary.UserRepo;
import com.food.bagit.Service.Userservice;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements Userservice{

	@Autowired
	private UserRepo userRepo;
	
	
	
	public User addUser(User u) {
		
		return userRepo.save(u);
	}

	
	public User getUserByEmail(String email) {
	
		 return userRepo.findByEmail(email);
	}


	public User login(String email, String password) {
		
		return  userRepo.findByEmailAndPassword(email,password);
		
	}


	@Override
	public User userDetails(String email, String password) {
		
        return  userRepo.findByEmailAndPassword(email,password);
	}


	@Override
	public List<User> getAllUser() {
		
		return userRepo.findAll();
	}
}
