//array.js

let fruits2 = []; //아무 값도 안 들어있는 배열을 하나 선언
let fruits = ['Apple', 'Banana'] ; //선언하면서 값을 준다.
fruits[2] = 'Melon';
fruits[fruits.length] = 'Orange';
fruits[fruits.length] = 'Mango';
fruits[2] = 'new Melon';
delete fruits[2];

//for(let i=0; i<fruits.length; i++) {
//    console.log(fruits[i]);
//}

fruits = [];
fruits.push('Apple');
fruits.push('Banana');
fruits.unshift('Orange');
fruits.unshift('Melon');

//fruits.pop();
//fruits.shift();
// Melon, Orange, Apple, Banana
let fruit = fruits.splice(1, 2, 'New Orange');
//let fruit = fruits.splice(1, 0, 'New Orange', 'New Apple'); 이런 식으로 안 잘라내고 추가도 가능
console.log(fruit);

//for(let i = 0; i < fruits.length; i++) {
//    console.log(fruits[i]);
//}

for(fruit of fruits) {
    console.log(fruit);
}

fruits = ['Apple', 'Banana', 'Mango'];
fruit = {
    name : 'Apple',
    price : 2000,
    weight : 50
}

fruit['name']; // name based; fruit.name;
fruits[0]; //index based 

