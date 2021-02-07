"use strict";


// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//     a:50
// };

// obj.a = 10;

// console.log(obj);

// console.log(name);
// var name = 'Ivan';

// {
//     var result = 50;
// }

// console.log(result);
// alert(5);


// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// console.log(obj["name"]);

// let arr = ['plum', 'orange.jpg', 'apple.bmp', 4];
// console.log(arr[1]);

// const result = confirm("Are you here");
// console.log(result);

// const aswer = prompt('Вам есть 18?');
// console.log(aswer);

// const answer = [];

// answer[0] = prompt('Как ваше имя?', '');
// answer[1] = prompt('Как ваше Фамилия?', '');
// answer[2] = prompt('Как ваше Отчество?', '');

// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";
// alert(`Привет, ${user}`);

// console.log('arr' + "- object");
// console.log(4 + +"5");

// let incr = 10,
//     decr = 10;

// ++incr;
// --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(2+2*4==='8');

// const isChecked = true,
//       isClousee = false;
// console.log(isChecked &&  !isClousee);
// const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
// const personalDatabase = {
//     count: numberOfFilms,
//     movies:{},
//     actors: {},
//     genres: [],
//     private: false

// };
// const number1 = prompt("Один из просмотренных фильмов?", ""),
//       number2 = prompt("На сколько оцените его?", ""),
//       number3 = prompt("Один из просмотренных фильмов?", ""),
//       number4 = prompt("На сколько оцените его?", "");

// personalDatabase.movies[number1] = number2; 
// personalDatabase.movies[number3] = number4; 

// console.log(personalDatabase);

// if(1) {
//     console.log('OK');
// } else {
//     console.log('Lol');    
// }

// const num = 50;

// if (num <49) {
//     console.log('Error');
// } else if (num < 100) {
//     console.log('ok');
// } else {
//     console.log('lol');
// }

// (num === 50) ? console.log('lol') : console.log('Kek');
// const num = 51;
// switch (num) {
//     case 49:
//         console.log("Неверно");
//         break;
//     case 100:
//         console.log("Неверно");
//         break;
//     case 50:
//         console.log("В точку");
//         break;   
//     default:
//         console.log("Не в этот раз");
//         break;           
// }

// let num = 50;

// while (num<55) {
//     console.log(num);
//     num++; 
// }

// do {
//     console.log(num);
//     num++; 
// }
// while (num<55);

// for (let i=1; i<10; i++) {
//     if (i===6) {
//         //break;
//         continue;
//     }
//     console.log(i);
// }

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalDatabase = {
    count: numberOfFilms,
    movies:{},
    actors: {},
    genres: [],
    private: false

};
for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalDatabase.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalDatabase.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalDatabase.count > 10 && personalDatabase.count < 30) {
    console.log('Вы классический зритель');
} else if (personalDatabase.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalDatabase);