require("babel-register");
const numbers = require("./index");
console.log(numbers.addAll([1, 2, 3]));
console.log(numbers.multiplyAll([1, 2, 3, 4]));