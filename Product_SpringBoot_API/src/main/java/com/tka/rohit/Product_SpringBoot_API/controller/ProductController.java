package com.tka.rohit.Product_SpringBoot_API.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tka.rohit.Product_SpringBoot_API.entity.Product;
import com.tka.rohit.Product_SpringBoot_API.service.ProductService;

@RestController
public class ProductController {

	
	@Autowired
	ProductService productService;
	
	
	@PostMapping("/addProduct")
	public Product addProduct(@RequestBody Product product) {
		return productService.addProduct(product);
	}
	
	
	@GetMapping("/getAllProducts")
	public List<Product> getAllProducts(){
		return productService.getAllProducts();
	}
	
	@GetMapping("/getById/{id}")
	public Product getProductById(@PathVariable int id) {
		return productService.getProductById(id);
	}
	
	
	@GetMapping("/getByName/{name}")
	public Product getProductByName(@PathVariable String name){
		return productService.getProductByName(name);
	}
	
	@GetMapping("/getByCategory/{category}")
	public List<Product> getProductByCategory(@PathVariable String category){
		return productService.getProductByCategory(category);
		
	}
	
	
	@PutMapping("/updateProduct/{id}")
	public Product updateProduct(@PathVariable int id, @RequestBody Product newProduct) {
		return productService.updateProduct(id, newProduct);
	}
	
	@DeleteMapping("/deleteProduct/{id}")
	public boolean deleteProduct(@PathVariable int id) {
		return productService.deleteProduct(id);
		
}
	
}
