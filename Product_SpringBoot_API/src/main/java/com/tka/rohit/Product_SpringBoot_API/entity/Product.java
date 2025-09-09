package com.tka.rohit.Product_SpringBoot_API.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

@Entity
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(nullable = false)
	private String name;
	
	@Column(nullable = false)
	private String category;
	
	@Column(nullable = false)
	private int quantity;
	
	@Column(nullable = false)
	private double price;
	
	@Column(nullable = false)
	private String mfg_date;
	
	@Column(nullable = false)
	private String exp_date;

	public Product(String name, String category, int quantity, double price, String mfg_date, String exp_date) {
		super();
		this.name = name;
		this.category = category;
		this.quantity = quantity;
		this.price = price;
		this.mfg_date = mfg_date;
		this.exp_date = exp_date;
	}
	
}
