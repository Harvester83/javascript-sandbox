## Closure (Замыкание)

**Closure** — это функция, которая «запоминает» переменные из своей внешней области видимости, даже после того, как эта внешняя функция завершила выполнение.

### Как это работает

Когда функция создаётся внутри другой функции, она получает доступ к переменным родителя. Этот доступ сохраняется, даже когда родительская функция уже «умерла».

```javascript
function createCounter() {
  let count = 0; // эта переменная "захватывается"

  return function() {
    count++;
    return count;
  };
}

const counter = createCounter(); // createCounter завершилась...
console.log(counter()); // 1  — но count всё ещё жива!
console.log(counter()); // 2
console.log(counter()); // 3
```

`count` не удаляется из памяти, потому что на неё ссылается внутренняя функция.

---

### Практические применения

**1. Приватные переменные**
```javascript
function createUser(name) {
  let _password = "secret123"; // снаружи не доступна

  return {
    getName: () => name,
    checkPassword: (pwd) => pwd === _password
  };
}

const user = createUser("Alice");
user.getName();              // "Alice"
user.checkPassword("secret123"); // true
console.log(user._password); // undefined — скрыто!
```

**2. Фабрика функций**
```javascript
function multiply(x) {
  return (y) => x * y; // x "запомнен"
}

const double = multiply(2);
const triple = multiply(3);

double(5); // 10
triple(5); // 15
```

**3. Частичное применение**
```javascript
function greet(greeting) {
  return (name) => `${greeting}, ${name}!`;
}

const sayHello = greet("Привет");
const sayBye   = greet("Пока");

sayHello("Иван"); // "Привет, Иван!"
sayBye("Мария");  // "Пока, Мария!"
```

---

### Классическая ловушка с `var` в циклах

```javascript
// ❌ Неправильно — все выведут 3
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

// ✅ Правильно — let создаёт новый scope на каждой итерации
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 0, 1, 2
}
```

---

### Ключевая идея

| Понятие | Объяснение |
|---|---|
| **Scope** | Область, где переменная видна |
| **Lexical scope** | Scope определяется местом объявления функции |
| **Closure** | Функция + захваченные переменные из внешнего scope |

> Closure — это не магия, а просто следствие того, что функции в JS являются объектами и хранят ссылку на свой «родной» scope.