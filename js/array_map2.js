let students = [];

for(let i=1; i <= 5; i++) {
    let std = {};
    std.sno = i;
    std.sname = 'Hong' + i;
    std.sgen = i % 2 == 0 ? 'M' : 'F';
    std.score = 80 + i;
    students.push(std);
}
//console.log(students);

/*let result = students.reduce(function (a,b,c,d) {
    console.log(a,b,c,d);
    //return a.score > b.score ? a : b;
    return a.score > b.score ? a.score  : b.score;
    
},0);                               //0은 reduce라고 하는 function?의 초기값으로 쓰임. 초기값이 없으면 첫번째 요소?가 초기값이 된다.

*/

let result = students.map(function (a,b,c) {
    console.log(a,b,c);
    return a.score;
}).reduce(function (a,b,c,d) {
    return a += b;
});

console.log('result: ', result);