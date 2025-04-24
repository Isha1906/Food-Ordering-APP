package com.food.bagit.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.bagit.Model.Product;
import com.food.bagit.Repositary.ProductRepo;
import com.food.bagit.Service.ProductService;


@Service
public class ProductServiceImpl implements ProductService {

	
	@Autowired
	private ProductRepo pr;
	
	
	public Product addProduct(Product p)
	{
		return pr.save(p);
				
	}

	
	public List<Product> getAllProduct() {

		return pr.findAll();
	}

}