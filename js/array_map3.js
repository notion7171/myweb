let students = [];

for(let i=1; i <= 5; i++) {
    let std = {};
    std.sno = i;
    std.sname = 'Hong' + i;
    std.sgen = i % 2 == 0 ? 'M' : 'F';
    std.score = 80 + i;
    students.push(std);
}

let result = students.every(function (a,b,c) {
    return a.score > 80;
});
console.log(result);

let result1 = students.some(function (a,b,c) {    //하나라도 만족되는 값이 있으면 출력?
    return a.score > 81;
});
console.log(result1);

result2 = students.map(function (a) {
    a.sname;
}).indexOf('Hong1');    //배열에 indexOf를 쓰면 배열 안에 내가 찾고자 하는 요소가 있는지를 
    
console.log(result2);