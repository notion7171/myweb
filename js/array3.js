let numbers = [34, 55, 22, 10, 100, 6, 7];
numbers.sort(function (a, b) {
    //    if(a > b) {
    //        return -1;
    //   } else {
    //        return 1;
    //   }
    //});

    return a - b;
});


//console.log(numbers);

//numbers.forEach(function(a,b,c) {
//    console.log(a,b);
//});

let ulTag = document.createElement('ul');
document.getElementById('show').append(ulTag);
let sum = 0;


numbers.forEach(function(item, idx, ary) {
    sum += item;
    console.log(item, idx);
    let liTag = document.createElement('li');
    liTag.innerHTML = item;
    ulTag.append(liTag);
});

let liTag = document.createElement('li');
liTag.innerHTML = '합계: ' + sum;
ulTag.append(liTag);