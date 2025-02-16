//required parameter
function cal(a, b) {
    return a + b;
}
console.log(cal(67, 23));
//default parameter
function ask(a, b) {
    if (b === void 0) { b = "Hello"; }
    return a + b;
}
console.log(ask("Bob"));
console.log(ask("Alice", "Good Morning"));
//optional parameter
function address(street, city) {
    if (city) {
        return street + city;
    }
    else {
        return street;
    }
}
console.log(address("Banjara hills ", "Hyderabad"));
console.log(address("Gachibowli"));
//rest parameter
function sum(first, second) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    if (rest) {
        var re_1 = first + second;
        rest.forEach(function (itm) { return re_1 += itm; });
        return re_1;
    }
    else {
        return first + second;
    }
}
console.log(sum(12, 121));
console.log(sum(12, 13, 14, 15, 16, 17, 18));
