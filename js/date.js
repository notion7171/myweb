//date.js

//let today = new Date();
let today = new Date('2020-10-30');   // 이렇게 하면 원하는 날짜로 초깃값을 설정할 수 있음. GMT:00:00:00 -> 09:00:00
console.log(today);    //GMT 기준 시간보다 9시간이 빠르다.
console.log(today.getTime());  //get은 가져올 때
console.log(today.getDay());

//set은 지정할 때

today.setFullYear(2019);
console.log(today);
today.setMonth(0);
console.log(today);


function setCal(yyyy, mm, dd) {
    let today = new Date(yyyy + '-' + mm + '-' + dd);
    today = new Date(yyyy, mm, 0);     //7월1일의 전날은 6월의 마지막 날. 
    console.log(today);
    //console.log(today.getDay());

}

setCal('2020', '06', '05');