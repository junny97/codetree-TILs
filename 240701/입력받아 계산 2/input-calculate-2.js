const fs = require('fs');
let a = fs.readFileSync(0).toString().split(" ");


let num1  = Number(a[0]);
let num2 = Number(a[1]);

function multiflyNum(num1, num2){
    return num1 * num2
}

console.log(multiflyNum(num1,num2))