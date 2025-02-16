"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.product = void 0;
var warrantyClass_1 = require("./warrantyClass");
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
}(warrantyClass_1.productWarranty));
exports.product = product;
