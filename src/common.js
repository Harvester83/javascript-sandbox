// console.log(a); // undefined 
// let a = 10;

// var поднимается
// автоматически получает undefined

// --------------------------
// {
//   console.log(x); // Uncaught ReferenceError: Cannot access 'x' before initialization
//   let x = 5;
// }


// --------------------------
// sayHello(); // работает
// function sayHello() {
//   console.log("Hello");
// }


// --------------------------
// sayHello(); // TypeError

// var sayHello = function () {
//   console.log("Hello");
// };

// Как видит JS:
// var sayHello; // undefined
// sayHello(); // undefined is not a function

// --------------------------

// var a = 1;

// function test() {
//   console.log(a);
//   var a = 2;
// }

// test(); // undefined


// var a = 1;

// function test() {
//   console.log(a);
// }

// test(); // 1


let a = 1;

function test() {
  console.log(a);
  a = 2;
}

 test();