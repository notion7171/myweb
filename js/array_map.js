// array_map.js
let person = new Object();    //object 타입을 담는다. 생성자 함수 이용
//let person = {};

person.name = 'Hong';
person.age = 10;

person = {
    name : 'Hwang',
    age : 15
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}

person = new Person('Park', 20);
console.log(person);

let persons = [];   //배열 변수

persons.push(person); //값을 하나씩 담겠다.
persons.push(new Person('Choi',25));
persons.push(new Person('Hong',26));
persons.push(new Person('Hwang',27));
console.log(persons);

let names = persons.map(function(a, b, c) {   //map은 return 값이 있고, foreach는 void
    console.log(a,b,c);                     //a,b,c에 뭐가 담겨있는지 볼 수 있음.
    let member = {};                         //또 다른 object를 만들어도 된다.
    member.id = a.name + '-' + b;
    member.age = a.age;
    //return a.name;
    return member;
});

let over21 = persons.filter(function (a, b, c) {
    return a.age > 21;
}).map(function (a,b,c) {
    return a.age;
});
console.log(over21);

names.forEach(function(a,b,c) {
    document.write('<h1>' + a.id + '/' + a.age + '</h1>');
});

console.log(names);



