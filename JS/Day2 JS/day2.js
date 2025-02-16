//coercion
console.log(1 + '1');   
console.log(1 - '1');   
//boxing
let str = 'hello';
console.log(str.toUpperCase());
console.log(str);
//primitive values
let x = 10;
let y = x;
x = 20;
console.log(x);
console.log(y);
//reference values
let a = {value: 10};
let b = a;
a.value = 20;
console.log(a);
console.log(b);
