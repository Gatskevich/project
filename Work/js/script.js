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
const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
const personalDatabase = {
    count: numberOfFilms,
    movies:{},
    actors: {},
    genres: [],
    private: false

};
const number1 = prompt("Один из просмотренных фильмов?", ""),
      number2 = prompt("На сколько оцените его?", ""),
      number3 = prompt("Один из просмотренных фильмов?", ""),
      number4 = prompt("На сколько оцените его?", "");

personalDatabase.movies[number1] = number2; 
personalDatabase.movies[number3] = number4; 

console.log(personalDatabase);


