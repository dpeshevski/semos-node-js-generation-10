const firstName = "Toni";
let isValid = false;
let lastName;

console.log(isValid); // false
isValid = true;
console.log(isValid); // true

console.log(lastName); // undefined
lastName = "Parker";
console.log(lastName); // Parker

lastName = 2546;
console.log(lastName); // 2546

lastName = null;
console.log(lastName); // null

console.log('Hello'); // 1

setTimeout(() => {
  console.log('2021');
}, 1000); // 4

setTimeout(() => {
  console.log('year');
}, 1000); // 5

setTimeout(() => {
  console.log('there');
}, 0); // 3

console.log('NodeJS'); // 2

// hoisting
// scope

// var, let, const

console.log(age); // 22
var age = '22';

// console.log(year); // get an error
// let year = "2020";

// console.log(day); // get an error
// const day = "Friday";


printName();

function printName () {
  console.log('John Bon Jovi');
}

// print();

// const print = function () {
//   console.log('James Hetfield');
// };

const person = {};
const people = [{}, {}, {}];






// function hello {
//   return new Promise((resolve, reject) => {
//     resolve('Hello');
//   })
// };

function aritmeticOperation (type) {
  let result;
  const x = 5;
  const y = 7;
  if (type === 'add') {
    // block scope
    const z = 10;
    result = x + y + z;
    return result;
  } else if (type === 'sub') {
    result = x - y;
  } else if (type === 'mul') {
    result = x * y;
  } else if (type === 'div') {
    result = x / y; 
  } else {
    return 'Unknown operation';
  }

  console.log(z); // 10

  return result;
}


aritmeticOperation('add');


function printMessage (age) {
  let message;
  if (age >= 18) {
    message = 'IT';
  } else {
    message = 'Tom & Jerry';
  }
  return message;
  // console.log(message);
}

const messagePrinting = printMessage(25);

function movie (age) {
  const messagePrinting = printMessage(age);
  let isAnAdult = false;
  if (messagePrinting === 'Tom & Jerry') {
    isAnAdult = false;
  } else if (messagePrinting === 'IT') {
    isAnAdult = true;
  } else {
    return 'Movie is not found';
  }

  return isAnAdult;
}

console.log('Movie log', movie(21));

const messageMovie = 'Tom & Jerry'; // || 'IT'
console.log(messagePrinting);

console.log(printMessage(15));

// console.log('Message', message);

// Hello
// there
// nodeJs
// 2021


const numbers = [1, 2, 3];

const printNumber = numbers => {
  const newNumbersList = [];
  numbers.forEach(number => {
    newNumbersList.push(number);
  });
  return newNumbersList;
};

console.log(printNumber(numbers));


// [1, 2, 3] => [2, 4, 6]
const factorNumbers = numbers => numbers.map(number => number * 2);
console.log(factorNumbers(numbers));
