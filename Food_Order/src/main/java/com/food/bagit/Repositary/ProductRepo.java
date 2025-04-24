package com.food.bagit.Repositary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.food.bagit.Model.Product;

@Repository
public interface ProductRepo extends JpaRepository<Product, Integer>  {
	

}