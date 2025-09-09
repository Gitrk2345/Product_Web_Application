package com.tka.rohit.Product_SpringBoot_API.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tka.rohit.Product_SpringBoot_API.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{

	public Product findByName(String name);

	public List<Product> findAllByCategory(String category);

}
