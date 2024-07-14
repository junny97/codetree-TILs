const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
const a = parseFloat(input[0]);
const b = parseFloat(input[1]);
const c = parseFloat(input[2]);
console.log(a.toFixed(3));
console.log(b.toFixed(3));
console.log(c.toFixed(3));