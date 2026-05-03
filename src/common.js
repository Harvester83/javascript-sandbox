// var
// 1. Что значит function scope (не block)
// Ты можешь подумать: "x внутри {} → значит снаружи не видно"
// НО с var это НЕ так 
// Результат: 5

var x = 15;

if (true) {
  var x = 5;
}

console.log(x); // 5

// Потому что var игнорирует блоки (if, for, {})
// и работает только внутри функцииx

// 2. Пример с функцией

// function test() {
//   if (true) {
//     var x = 5;
//   }
      // тут нормально — внутри функции всё видно
//   // console.log(x); // 5
// }

// console.log(x); // common.js:27 Uncaught ReferenceError: x is not defined at ...
// test();

// --------------------------------------------------------------------
// let
// 1. block scope
// if (true) {
//   let x = 5;
// }

// console.log(x); // common.js:44 Uncaught ReferenceError: x is not defined

// 2. Нельзя переобъявить в одном scope
// let a = 10;
// let a = 20; // SyntaxError

// var a = 10;
// var a = 20; // можно
// поэтому var опасен

// 3. Можно изменить значение

// let a = 10;
// a = 20;
// console.log(a); // 20


// --------------------------------------------------------------------
// const
// const a = 10;

// block scope
// нельзя изменить
// нельзя переобъявить

// const obj = { name: "Rashad" };
// obj.name = "Test"; // можно (ссылка не меняется)

// const → по умолчанию (best practice)