package com.SajeeProjects.ProductManagement.productManagement.controller;

import com.SajeeProjects.ProductManagement.productManagement.exception.ResourceNotFoundException;
import com.SajeeProjects.ProductManagement.productManagement.model.Product;
import com.SajeeProjects.ProductManagement.productManagement.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/")
@CrossOrigin
public class ProductController {

    @Autowired
    ProductRepository proRep;

    @GetMapping("/product")
    public List<Product> getAllProduct(){

        return proRep.findAll();
    }

    @PostMapping("/product-add")
    public String addProduct(@RequestBody Product objProduct){

        proRep.save(objProduct);
        return "Product Details Added Successfully!";
    }

    @GetMapping("/product-update/{Id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long Id){
        Product objProduct = proRep.findById(Id).orElseThrow(
                ()-> new ResourceNotFoundException("Product not exit with Id: "+ Id)
        );

        return ResponseEntity.ok(objProduct);
    }

    @PutMapping("/product-update/{Id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long Id, @RequestBody Product product_details){
        Product objProduct = proRep.findById(Id).orElseThrow(
                ()-> new ResourceNotFoundException("Product not exit with Id: "+ Id)
        );

        objProduct.setName(product_details.getName());
        objProduct.setCompany(product_details.getCompany());
        objProduct.setYear(product_details.getYear());
        objProduct.setFeature(product_details.getFeature());

        Product updateProduct = proRep.save(objProduct);
        return ResponseEntity.ok(updateProduct);
    }

    @DeleteMapping("/product-delete/{Id}")
    public ResponseEntity< Map<String, Boolean> > deleteProduct(@PathVariable Long Id){
        Product objProduct = proRep.findById(Id).orElseThrow(
                ()-> new ResourceNotFoundException("Product not exit with Id: "+ Id)
        );

        proRep.delete(objProduct);
        Map<String,Boolean> status = new HashMap<>();
        status.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(status);
    }


}
