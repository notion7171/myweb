//date2.js
function createHeader(a, b, c) {
    let tdTag = document.createElement('th');
    tdTag.innerHTML = a;
    trTag.append(tdTag);
    tableTag.append(trTag);

}

function createData(item, idx, ary) {
    //console.log(item,idx);
    if (idx % 7 == 0) {
        trTag = document.createElement('tr');
    }
    let tdTag = document.createElement('td');
    //tdTag.setAttribute('border','3px');
    tdTag.innerHTML = item;
    trTag.append(tdTag);
    tableTag.append(trTag);
}

function showCal(yyyy, mm, dd) {
    let today = new Date(yyyy + '-' + mm + '-' + '01');
    
    let tGetDay = today.getDay();
    for (let i = 0; i < tGetDay; i++) {
        dates.push('');
    }
    today = new Date(yyyy, mm, 0);
    for (let i = 1; i <= today.getDate(); i++) {
        dates.push(i);                //date 배열에 추가 된다.
    
    }
    //console.log(today);
    //console.log(tGetDay);
}

let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
let dates = [];

showCal('2020', '11');

let tableTag = document.createElement('table');
tableTag.setAttribute('border', '3');
tableTag.setAttribute('id', 'tbl');



//console.log(tableTag);

let trTag = document.createElement('tr');

days.forEach(createHeader);
dates.forEach(createData);
console.log(dates);

document.getElementById('show').append(tableTag);





