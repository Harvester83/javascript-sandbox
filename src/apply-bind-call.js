function sayHi(age, city) {
    console.log(`Hi my name is ${this.name}, I am ${age} and I am from ${city}`);
}

const person = {
    name: 'Rashad',
}

const person2 = {
    name: 'Sam',
}

const person3 = {
    name: 'Bill',
}

sayHi.call(person, 43, 'Baku')
sayHi.apply(person2, [25, 'Moscow'])

const hello = sayHi.bind(person3, 70, 'New-York');
hello();