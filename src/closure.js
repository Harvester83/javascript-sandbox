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