//number.js

let x= 10;
let y = 'hello';
let z = '20.55';

//let result = x + parseInt(y) + parseInt(z);
let result2 = parseFloat(z);
//console.log(result);
console.log(result2);

let result = x/y;
//result = x/0;

console.log(result);

function sum() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    
    console.log(parseInt(num1)+parseInt(num2));

}