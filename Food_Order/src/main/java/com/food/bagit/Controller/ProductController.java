package com.food.bagit.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;

import com.food.bagit.Model.Product;
import com.food.bagit.Service.ProductService;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/product")
@CrossOrigin( origins="http://localhost:4200")
public class ProductController {

	@Autowired
	private ProductService ps;
	
	@GetMapping("/all")
	public List<Product> getallProductDetails()
	{
		return ps.getAllProduct();
	}
	
	@PostMapping("/add")
	public Product addPro(@RequestBody Product p)
	{
		return ps.addProduct(p);
	}
}
