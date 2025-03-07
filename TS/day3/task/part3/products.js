"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var productClass_1 = require("./productClass");
var reviewClass_1 = require("./reviewClass");
var allEnum_1 = require("./allEnum");
var allEnum_2 = require("./allEnum");
var allEnum_3 = require("./allEnum");
var allProducts = [];
var arrReview1 = [];
var review1 = new reviewClass_1.reviewOfProduct("John", 5);
var review2 = new reviewClass_1.reviewOfProduct("Jack", 4);
var review3 = new reviewClass_1.reviewOfProduct("James", 5);
arrReview1.push(review1);
arrReview1.push(review2);
arrReview1.push(review3);
var color = ['red', 'gray', 'black'];
var product1 = new productClass_1.product(1, "Oven", "Its an electronic device", 200000, allEnum_1.statusOfPdt.available, allEnum_2.categoriesOfPdt.electronic, "2 years", allEnum_3.typeWarranty.limit, arrReview1, color);
product1.display();
product1.avgRating();
allProducts.push(product1);
var arrReview2 = [];
var reviewBook1 = new reviewClass_1.reviewOfProduct("Amulya", 5);
var reviewBook2 = new reviewClass_1.reviewOfProduct("Ashwanth", 4);
var reviewBook3 = new reviewClass_1.reviewOfProduct("Niharaka", 4);
arrReview2.push(reviewBook1);
arrReview2.push(reviewBook2);
arrReview2.push(reviewBook3);
var product2 = new productClass_1.product(2, "IKIGAI", "Its a The book about the lifestyle of a japanice guys", 30000, allEnum_1.statusOfPdt.notAvailable, allEnum_2.categoriesOfPdt.books, "-", allEnum_3.typeWarranty.unlimited, arrReview2);
product2.display();
product2.avgRating();
allProducts.push(product2);
