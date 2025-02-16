/*
Create an enum to represent the status of a product with the values: "In Stock" and "Out of Stock".
Create an enum to represent product categories with the values: "Electronics", "Clothing", and "Books".
Define a class for the basic properties of a product, including id, name, description, price, status, and category.
Define a class for warranty details including duration and type, where type can be either "Limited" or "Unlimited".
Define an interface for optional properties such as color options and size options.
Define a class for product reviews, including user, rating, and comment.
 Create a Product class that inherits from the previously defined classes/interfaces and includes additional properties such as warranty, rating, reviews, color options, and size options.
 Use access modifiers (public, private, protected) to encapsulate data where necessary.
 Implement methods within the Product class to:
Display product details
Calculate the average rating from reviews
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var statusOfPdt;
(function (statusOfPdt) {
    statusOfPdt["available"] = "In Stock";
    statusOfPdt["notAvailable"] = "Out of stock";
})(statusOfPdt || (statusOfPdt = {}));
var categoriesOfPdt;
(function (categoriesOfPdt) {
    categoriesOfPdt["electronic"] = "Electronic";
    categoriesOfPdt["clothing"] = "Clothing";
    categoriesOfPdt["books"] = "Books";
})(categoriesOfPdt || (categoriesOfPdt = {}));
var typeWarranty;
(function (typeWarranty) {
    typeWarranty["limit"] = "Limited";
    typeWarranty["unlimited"] = "UnLimited";
})(typeWarranty || (typeWarranty = {}));
var productWarranty = /** @class */ (function () {
    function productWarranty(duration, type) {
        this.extraDetails = "This is private";
        this.duration = duration;
        this.typeOfProduct = type;
    }
    return productWarranty;
}());
var reviewOfProduct = /** @class */ (function () {
    //comment:string;
    function reviewOfProduct(user, rating) {
        this.user = user;
        this.rating = rating;
        //this.comment=comment;
    }
    return reviewOfProduct;
}());
var product = /** @class */ (function (_super) {
    __extends(product, _super);
    function product(id, name, des, price, status, category, duration, type, review, color, size) {
        var _this = _super.call(this, duration, type) || this;
        _this.idOfProduct = id;
        _this.nameOfProduct = name;
        _this.descriptionOfProduct = des;
        _this.priceOfProduct = price;
        _this.statusOfProduct = status;
        _this.categoriesOfProduct = category;
        _this.review = review;
        _this.color = color;
        _this.size = size;
        return _this;
    }
    product.prototype.display = function () {
        console.log("Product Id:", this.idOfProduct);
        console.log("Name of Product: ", this.nameOfProduct);
        console.log("Description of Product :", this.descriptionOfProduct);
        console.log("Price :", this.priceOfProduct);
        console.log("Status :", this.statusOfProduct);
        console.log("Category :", this.categoriesOfProduct);
        console.log("Review :", this.review);
        if (this.size) {
            console.log("The Avaliable sizes are", this.size);
        }
        if (this.color) {
            console.log("The available Colors are :", this.color);
        }
    };
    product.prototype.avgRating = function () {
        var sum = 0;
        this.review.forEach(function (item) {
            sum += item.rating;
        });
        sum = sum / this.review.length;
        console.log("Average Rating is: ", sum.toFixed(2));
    };
    return product;
}(productWarranty));
var allProducts = [];
var arrReview1 = [];
var review1 = new reviewOfProduct("John", 5);
var review2 = new reviewOfProduct("Jack", 4);
var review3 = new reviewOfProduct("James", 5);
arrReview1.push(review1);
arrReview1.push(review2);
arrReview1.push(review3);
var color = ['red', 'gray', 'black'];
var product1 = new product(1, "Oven", "Its an electronic device", 200000, statusOfPdt.available, categoriesOfPdt.electronic, "2 years", typeWarranty.limit, arrReview1, color);
product1.display();
product1.avgRating();
allProducts.push(product1);
var arrReview2 = [];
var reviewBook1 = new reviewOfProduct("Amulya", 5);
var reviewBook2 = new reviewOfProduct("Ashwanth", 4);
var reviewBook3 = new reviewOfProduct("Niharaka", 4);
arrReview2.push(reviewBook1);
arrReview2.push(reviewBook2);
arrReview2.push(reviewBook3);
var product2 = new product(2, "IKIGAI", "Its a The book about the lifestyle of a japanice guys", 30000, statusOfPdt.notAvailable, categoriesOfPdt.books, "-", typeWarranty.unlimited, arrReview2);
product2.display();
product2.avgRating();
allProducts.push(product2);
// console.log("---------------------");
// console.log(allProducts);
