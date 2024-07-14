const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");

let a = Number(input[0]);
let b = Number(input[1]);
const result1 = a + b
const result2 = result1.toFixed(2)
console.log(result2)