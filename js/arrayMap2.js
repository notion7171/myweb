
let persons = ['Hong', 'Hwang', 'Park', 'Choi'];

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


let tableTag = document.createElement('table'); //테이블 태그 만듦
    tableTag.setAttribute('border', '1');

function drawTable() {
    let titles = ['이름', '나이', '점수'];

    

    let trTag = document.createElement('tr'); //tr 태그를 만들겠다.
    for (title of titles) {
        let tdTag1 = document.createElement('th');
        tdTag1.innerHTML = title;
        trTag.append(tdTag1);
    }
    tableTag.append(trTag);  //여기까지가 타이틀 생성.

    //let tdTag1 = document.createElement('td');
    //tdTag.innerHTML = '이름';
    //trTag.append(tdTag1);
    //let tdTag2 = document.createElement('td');
    //tdTag2.innerHTML = '나이';
    //trTag.append(tdTag2);
    //let tdTag3 = document.createElement('td');
    //tdTag3.innerHTML = '점수';

    persons.forEach(myCallFunc);
    document.getElementById('show').append(tableTag);



}

//테이블, row, column => persons 에 들어있던 배열요소를 화면에 보여주는 것.
 //부모요소.append(자식요소);
    // #show에 append;


    function myCallFunc(item, idx, ary) {
        let trTag = document.createElement('tr'); //tr 태그를 만들겠다.
        for (field in item) {
            let tdTag1 = document.createElement('td');
            tdTag1.innerHTML = item[field];
            trTag.append(tdTag1);
        }
        tableTag.append(trTag);

    }; // 데이터 생성.
