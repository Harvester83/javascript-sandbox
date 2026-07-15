
// 1. Hoisting у var
// console.log(a);
// var a = 10;

// output: undefined


// 2. Hoisting у function declaration
// hello();

// function hello() {
//     console.log("Hello");
// }

// output: Hello


// 3. Hoisting у let
// {
//     console.log(a);
//     let a = 5;
// }

// output: hoisting.js:30 Uncaught ReferenceError: Cannot access 'a' before initialization ...


// 4. Hoisting у const
// Абсолютно так же.

// console.log(a);
// const a = 10;

// output: ReferenceError


// 5. Function Expression
// sayHi();

// var sayHi = function () {
//     console.log("Hi");
// };

// output: ReferenceError 
// Потому что sayHi это обычная переменная const.
// Если использовать var то будет: TypeError: sayHi is not a function потому что sayHi - undefined


// Задача 1

// var a = 1;

// function test() {
//   console.log(a);
//   var a = 2;
// }

// test(); // undefined

// Обрати внимание:
// Это другая переменная, не глобальная.
// Получается теперь существуют две переменные.

// Задача 2

// const a = 10;
// function test() {
//   console.log(a);
// }

// test(); // 10


// Задача 3

// var a = 1;
// function test() {
//   console.log(a);
//   a = 2;
// }

// test();

// output: 1 // 

// Вызывается функция test(); Внутри функции нет
// let a;
// const a;
// var a;
// То есть локальной переменной вообще не создается.
// Выполняется первая строка
// console.log(a);
// JavaScript ищет a.
// В функции нет.
// Идет выше.
// Находит
// Global
// a = 1
// Поэтому выводит: 1





