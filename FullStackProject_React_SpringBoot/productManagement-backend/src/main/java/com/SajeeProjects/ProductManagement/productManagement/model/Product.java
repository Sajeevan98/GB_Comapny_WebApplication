package com.SajeeProjects.ProductManagement.productManagement.model;

import javax.persistence.*;

@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Product_Id" )
    private Long Id;

    @Column(name = "Product_Name", nullable = false)
    private String Name;

    @Column(name = "Manufacture_Company", nullable = false)
    private String Company;

    @Column(name = "Manufacture_Year")
    private String Year;

    @Column(name = "Special_Feature")
    private String Feature;

    public Product(){

    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getCompany() {
        return Company;
    }

    public void setCompany(String company) {
        Company = company;
    }

    public String getYear() {
        return Year;
    }

    public void setYear(String year) {
        Year = year;
    }

    public String getFeature() {
        return Feature;
    }

    public void setFeature(String Feature) {
        this.Feature = Feature;
    }
}
