package com.tka.rohit.Product_SpringBoot_API.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.tka.rohit.Product_SpringBoot_API.entity.Product;
import com.tka.rohit.Product_SpringBoot_API.repository.ProductRepository;

@Service
public class ProductService {

	
	@Autowired
	ProductRepository productRepository;


	public Product addProduct(Product product) {
		return productRepository.save(product);
		
	}

	public List<Product> getAllProducts() {
		return productRepository.findAll();
		
	}

	public Product getProductById(int id) {
		Optional<Product> byId = productRepository.findById(id);
		return byId.get();
		
	}

	public Product getProductByName(String name) {
		return productRepository.findByName(name);
		
	}

	public List<Product> getProductByCategory(String category) {
		return productRepository.findAllByCategory(category);
		
	}

	public Product updateProduct(int id, Product newProduct) {
		Optional<Product> oldProduct = productRepository.findById(id);
		
		if(oldProduct.isPresent()) {
			
			Product product = oldProduct.get();
			product.setName(newProduct.getName());
			product.setCategory(newProduct.getCategory());
			product.setPrice(newProduct.getPrice());
			product.setQuantity(newProduct.getQuantity());
			product.setMfg_date(newProduct.getMfg_date());
			product.setExp_date(newProduct.getExp_date());
			
			return productRepository.save(product);
				
		}
		else {
			throw new RuntimeException("Product not found with id: " + id);
		}
		
	}

	public boolean deleteProduct(int id) {
		Optional<Product> existingProduct = productRepository.findById(id);
		
		if(existingProduct.isPresent()) {
			productRepository.deleteById(id);
			return true;
		}
		else {
			return false;
		}
	}
}
