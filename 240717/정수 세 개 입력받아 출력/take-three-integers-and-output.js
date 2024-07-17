const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split('\n');
let [a, b] = input[0].split(' ').map(Number);
let c = Number(input[1]);
console.log(a, b, c);