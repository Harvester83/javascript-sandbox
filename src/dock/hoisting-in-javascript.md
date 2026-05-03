**Hoisting (всплытие)** — это поведение в JavaScript, при котором **объявления переменных и функций поднимаются вверх своей области видимости (scope)** *до выполнения кода*.

Но важно:
👉 поднимается **объявление**, а не всегда **значение**

---

# 🔹 1. Hoisting с `var`

```js
console.log(a); // undefined 😬

var a = 10;
```

Как это видит движок:

```js
var a;          // поднялось наверх
console.log(a); // undefined
a = 10;
```

📌 Вывод:

* `var` поднимается
* автоматически получает `undefined`

---

# 🔹 2. Hoisting с `let` и `const`

```js
console.log(a); // ❌ ReferenceError

let a = 10;
```

Почему ошибка?

Потому что `let` и `const` тоже **hoisting**, НО:
👉 они попадают в **TDZ (Temporal Dead Zone)**

```js
// TDZ начинается
let a = 10;
// TDZ заканчивается
```

📌 До строки объявления переменная:

* существует
* но недоступна ❌

---

# 🔹 3. TDZ (очень важно)

```js
{
  console.log(x); // ❌ ошибка
  let x = 5;
}
```

👉 `x` уже "зарегистрирован", но использовать нельзя до объявления

---

# 🔹 4. Hoisting функций

## Function Declaration (обычная функция)

```js
sayHello(); // ✅ работает

function sayHello() {
  console.log("Hello");
}
```

Как будто:

```js
function sayHello() {
  console.log("Hello");
}

sayHello();
```

📌 Полностью поднимается (и тело тоже)

---

## Function Expression

```js
sayHello(); // ❌ TypeError

var sayHello = function () {
  console.log("Hello");
};
```

Как видит JS:

```js
var sayHello; // undefined

sayHello(); // ❌ undefined is not a function
```

---

## С `let` / `const`

```js
sayHello(); // ❌ ReferenceError

const sayHello = () => {
  console.log("Hello");
};
```

📌 Здесь TDZ → переменная недоступна

---

# 🔹 5. Важный пример (часто спрашивают)

```js
var a = 1;

function test() {
  console.log(a);
  var a = 2;
}

test(); // ?
```

👉 Ответ: `undefined`

Почему:

```js
function test() {
  var a;          // hoisting
  console.log(a); // undefined
  a = 2;
}
```

---

# 🔹 6. Еще tricky пример

```js
var a = 1;

function test() {
  console.log(a);
  a = 2;
}

test(); // 1
```

📌 Здесь **нет локального `var a`**, значит берется глобальный

---

# 🔹 7. Hoisting внутри блока

```js
if (true) {
  var x = 5;
}

console.log(x); // 5 😬
```

👉 потому что `var` — **function scope**, не block

---

```js
if (true) {
  let x = 5;
}

console.log(x); // ❌ ошибка
```

👉 `let` — block scope

---

# 🔥 Итог (очень кратко)

| Тип           | Hoisting | Значение до объявления | Scope    |
| ------------- | -------- | ---------------------- | -------- |
| `var`         | ✅        | `undefined`            | function |
| `let`         | ✅        | ❌ TDZ ошибка           | block    |
| `const`       | ✅        | ❌ TDZ ошибка           | block    |
| function decl | ✅        | ✅ можно вызвать        | function |
| function expr | частично | ❌ зависит от var/let   | зависит  |

---

# 💡 Как объяснять на собесе

👉 Лучший ответ:

> Hoisting — это механизм JavaScript, при котором объявления переменных и функций поднимаются в начало области видимости во время компиляции.
> При этом:
>
> * `var` и function declaration доступны до объявления
> * `let` и `const` находятся в TDZ и вызывают ошибку
> * поднимается объявление, но не всегда значение

---

Если хочешь — могу дать тебе **10 tricky вопросов как на собесе (с ответами)**, там прямо любят ловить на hoisting 😄
