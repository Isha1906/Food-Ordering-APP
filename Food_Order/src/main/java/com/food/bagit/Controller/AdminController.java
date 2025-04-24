package com.food.bagit.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.food.bagit.Model.Admin;

import com.food.bagit.Service.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin( origins="http://localhost:4200")

public class AdminController {
	
	@Autowired
	AdminService as;
	

	@PostMapping("/login")
	public Admin login(@RequestBody Admin u) throws Exception
	{
		String tEmail=u.getName();
		String tPassword=u.getPassword();
		Admin ep=null;
		if(tEmail!=null && tPassword!=null)
		{
			ep= as.login(tEmail, tPassword);
		}
		if(ep==null)
		{
			throw new Exception("\nWRONG ADMIN CREDENTIALS!!!! \n");
		}
		return ep;
	}
	
}
