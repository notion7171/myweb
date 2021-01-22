//string.js
let str = 'Please locate where "locate" occurs!';
let strLeng = str.length;

console.log(strLeng);

//indexOf, lastIndexOf, search

str.indexOf('locate');
console.log(strLeng);
console.log(str.search('locate'));

//slice, substring, substr
let fruit = 'Apple, Banana, kiwi';
let result = fruit.slice(0,5);
console.log(result);

let from = fruit.indexOf('Banana');
result = fruit.substring(from, from + 6);
result = fruit.substr(from, 6);

console.log(fruit);

//replace

let newFruit = fruit.replace('Banana', 'Orange');
console.clear();
console.log(newFruit);

//toUpperCase, toLowerCase, concat, trim, padStart, padEnd

console.log('       hello       '.trim());
console.log('  good       hello       '.trim());
console.log('55'.padStart(4,'0'));
console.log('55'.padEnd(4,'0'));
console.log('  good       hello       '.trim().toUpperCase());

let uri = 'http://www.naver.net';

console.log(uri.replace('net','com'));
console.log(uri.replace(uri.substring(uri.lastIndexOf('.')), '.com'));

let fruits = fruit.split(','); //Apple, Banana, kiwi
for(f of fruits) {
    console.log(f.trim());
}



//990101-1234567
//990102-2345678
//000201-3456789
//000202-4567890

//2000년 이전, 이후 구분 -> 1,3이면 남자, 2,4면 여자


function getGender(num) {

    console.log(num.substr(-7,1));
    if(num.substr(-7,1) == 1 || num.substr(-7,1) == 3)
    {return '남자'}
    else {return '여자'};
}
let numbers = '990101-1234567';
numbers += ' 990102-2345678';
numbers += ' 000201-3456789';
numbers += ' 000202-4567890';
numbers += ' 0003014567890';

let numAry = numbers.split(' ');


for (num of numAry) {
    result = getGender(num);

    console.log('결과: ' + result);
}


