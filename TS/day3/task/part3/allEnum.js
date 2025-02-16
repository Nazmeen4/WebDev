"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeWarranty = exports.categoriesOfPdt = exports.statusOfPdt = void 0;
var statusOfPdt;
(function (statusOfPdt) {
    statusOfPdt["available"] = "In Stock";
    statusOfPdt["notAvailable"] = "Out of stock";
})(statusOfPdt || (exports.statusOfPdt = statusOfPdt = {}));
var categoriesOfPdt;
(function (categoriesOfPdt) {
    categoriesOfPdt["electronic"] = "Electronic";
    categoriesOfPdt["clothing"] = "Clothing";
    categoriesOfPdt["books"] = "Books";
})(categoriesOfPdt || (exports.categoriesOfPdt = categoriesOfPdt = {}));
var typeWarranty;
(function (typeWarranty) {
    typeWarranty["limit"] = "Limited";
    typeWarranty["unlimited"] = "UnLimited";
})(typeWarranty || (exports.typeWarranty = typeWarranty = {}));
