package com.food.bagit.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.food.bagit.Model.Product;

@Service
public interface ProductService {
	
	public Product addProduct(Product p);
	
	public List<Product> getAllProduct();

}