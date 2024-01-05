// Function Declaration
// let res = dummyFunc();

function dummyFunc() {
  let a = 33;
  let b = 90;
  let res = a * b;
  console.log("Here: ", this);
  //   console.log("Regular func call: ", res);
  return res;
}

// Function Expressions

// let aNum = 3; // expression
// let bNum = 12;
// let res = aNum + bNum;

// greet();

const greet = function () {
  console.log("Hello I am Bijay");
};

const addition = function (a, b = 90) {
  console.log(a + b);
};

// greet();
// addition(-89);

// Immediately Invoked Function Expression: IIFE
(function (a, b) {
  console.log("Anony Func: ", a * b);
})(3, 5);

// Anonymous Function
let x = 2;
let as = x + 2; // expression

let returnedVal = (function (a, b) {
  return a * b;
})(3, 15);

// console.log(`returnedVal: ${returnedVal}`);

// Arrow Functions (Fat arrow => ->)
const simpleArrow = () => {
  console.log("Arrow Functions");
};

// simpleArrow();

// function division(a, b) {
//   return a / b;
// }

const division = (a, b) => a / b;
// the above code is same as this:
// const division = (a, b) =>{
//     return  a / b
// };

// console.log(`division result: ${division(10, 2)}`);

const arr = [12, 13, 14, 15];

// const newArr = arr.map(function (e) {
//   return 2 * e;
// });

// const newArr = arr.map((e) => 2 * e);
const newArr = arr.map((e) => 2 * e);

// console.log(newArr);

const bijay = {
  fn: "Bijay",
  yob: 1989,
  calcAge: function () {
    console.log("👉🏼", this.yob);
    console.log("Age ▶", 2023 - this.yob);
    //Approach 1, before ES6
    // const that = this;
    // const isMillenial = function () {
    //   console.log("And here: 🔥", that.yob);
    // };

    // Approach 2, after ES6
    const isMillenial = () => {
      console.log("And here: 🔥", this.yob);
    };
    isMillenial();
  },
};

bijay.calcAge();

// Recursion function
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// console.log(factorial(4));

// Generator functions
function* generator() {
  yield "Bijay";
  yield "Prakash";
  yield "Singh";
  yield 34;
}

// const seq = generator();
// console.log(seq.next());
// console.log(seq.next());
// console.log(seq.next());
// console.log(seq.next());
// console.log(seq.next());

function* infiniteSequence() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

// const numbers = infiniteSequence();
// console.log(numbers.next().value);
// console.log(numbers.next().value);
// console.log(numbers.next().value);

// RUn at your own RISK 😁
// let i = 0;
// while (true) {
//     i++;
//   }
