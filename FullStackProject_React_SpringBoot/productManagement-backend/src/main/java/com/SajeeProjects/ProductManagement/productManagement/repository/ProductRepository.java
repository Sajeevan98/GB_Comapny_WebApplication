package com.SajeeProjects.ProductManagement.productManagement.repository;
import com.SajeeProjects.ProductManagement.productManagement.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {


}
