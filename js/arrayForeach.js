//arrayForeach.js

let persons =['Hong', 'Hwang', 'Park', 'Choi'];

//persons.forEach(function (a, b, c) {
//    console.log(a,b,c);
//});

persons.forEach(myCallBack);

function myCallBack(a, b, c) {
    console.log(a, b, c);
}

persons = [];
let person = {
    name: '이혜빈',
    age: 20,
    score: 90
}

persons.push(person);

let person1 = {};
person1.name = '이나경';
person1.age = 21;
person1.score = 80;
persons.push(person1);

//persons.push('송다희');

console.log(persons);


function drawTable() {
    //테이블, row, column => persons 에 들어있던 배열요소를 화면에 보여주는 것.
    let table1 = document.createElement('table');
    
    //부모요소.append(자식요소);
    // #show에 append;
    let persons =['Hong', 'Hwang', 'Park', 'Choi'];
    persons.forEach(callback);

    function callback(a,b,c) {
        console.log(a,b,c);
    }

}