package com.food.bagit.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.bagit.Model.Admin;
import com.food.bagit.Repositary.AdminRepo;
import com.food.bagit.Service.AdminService;

@Service
public class AdminServiceImpl implements AdminService {
	
	
	@Autowired
	private AdminRepo adminRepo;
	

	@Override
	public Admin login(String name, String password) {
		
		return  adminRepo.findByNameAndPassword(name,password);
	}

}
