//! (1)
console.log(Number("123") + 7);

//! (2)

let value = 0;
if (!value) {
  console.log("Invalid");
} else {
  console.log("Valid");
}

//! (3)

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

//! (4)
let arr = [1, 2, 3, 4, 5];

let Result = arr.filter((num) => num % 2 === 0);

console.log(Result);

//! (5)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

function merge_Arrays(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log(merge_Arrays(arr1, arr2));

//! (6)

function getDay(day) {
  switch (day) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Wednesday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Not Found";
  }
}

console.log(getDay(4));

//! (7)

const Arr = ["a", "ab", "abc"];

let resultOfArray = Arr.map((str) => str.length);
console.log(resultOfArray);

//! (8)

// function checkDivisibility(NUM) {
//   if (NUM % 3 === 0 && NUM % 5 === 0) {
//     return "Divisible by both";
//   } else {
//     return "NotDivisible";
//   }
// }

// console.log(checkDivisibility(15));

// ! Another Solution
function checkDivisibility(num) {
  if (num % 15 === 0) return "Divisible by both";
  if (num % 3 === 0) return "Divisible by 3 only";
  if (num % 5 === 0) return "Divisible by 5 only";
  return "Not divisible";
}
console.log(checkDivisibility(5));

//! (9)
const squareNumber = (a) => a * a;
console.log(squareNumber(5));

//! (10)
const person = {
  name: "Ziad Ammar",
  age: 21,
};

function getPersonInfo(person) {
  const { name, age } = person;

  return `${name} is ${age} years old`;
}

console.log(getPersonInfo(person));

//! (11)

function sum(...nums) {
  return nums.reduce((acc, num) => acc + num, 0);
}

console.log(sum(2, 3, 5, 10, 100));

//! (12)

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}

getData().then((result) => {
  console.log(result);
});

//! (13)

function findLargest(arr) {
  let max = arr[0];

  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}

console.log(findLargest([15, 29, 50, 20, 34]));

//! (14)

const user = {
  name: "Ziad",
  age: 25,
  city: "Giza",
};
function getKeys(user) {
  return Object.keys(user);
}

console.log(getKeys(user));

//! (15)

let splitWords = (str) => str.split(" ");

console.log(splitWords("The quick brown fox"));
console.log(splitWords("Ziad Ammar Ganem"));
