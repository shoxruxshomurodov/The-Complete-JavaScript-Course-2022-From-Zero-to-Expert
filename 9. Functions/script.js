"use strict";
//**---Default Parameters ---**//
/* 
//ES6
const bookings = [];
const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking("LH123");
*/
//Old way
// const bookings = [];
// const createBooking = function (flightNum, numPassengers, price) {
//   numPassengers = numPassengers || 1;
//   price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking("LH123"); // flightNum: 'LH123', numPassengers: 1, price: 199
// createBooking("LH123", undefined, 1000); // flightNum: 'LH123', numPassengers: 1, price: 1000
// createBooking("LH123", 5, 800); // flightNum: 'LH123', numPassengers: 5, price: 800

//**---How passing Argument Works Value vs. Reference ---**//
//JS - always passing with value☝️☝️☝️
/*
const flight = "SA234";
const shoxrux = {
  name: "Shoxrux Shomurodov",
  passport: 10584433,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH777";
  passenger.name = "Mr, " + passenger.name;
  if (passenger.passport === 10584433) {
    console.log("Check in");
  } else {
    console.log("Wrong passport");
  }
};

checkIn(flight, shoxrux);
console.log(flight);
console.log(shoxrux);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};
newPassport(shoxrux);
checkIn(flight, shoxrux);
console.log(shoxrux);
 */

//**---First Class and Higher Order Function---**//
/*
First Class Functions
JavaScript treats functions as first-class citizens
This means that  functions are simply values
Functions are just another  "type" of object

Store functions in variables or properties:

const add = (a, b) => a + b;
const counter = {
  value: 23,
  inc: function () {
    this.value++;
  },
};

Pass functions as arguments to Other functions:
const greet = () => console.log("Hey Shoxrux");
btnClose.addEventListener("click", greet);

Return Functions FROM functions:

Call methods on functions:
counter.inc.bind(someOtherObject);

Higher-Order functions:
A funtion that receviess another function as an argument ,
that returns a new function, or both

This is only possible because of first-class function

 Function that receive another function
const greet = () => console.log("Hey Shoxrux");
btnClose.addEventListener("click", greet);

//Function returns a new function
function count() {
  //High-order function
  let counter = 0;
  return function () {
    // Returned function
    counter++;
  };
}
 */

//**---Function Accepting Callback Functions---**//
/*
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string : ${str}`);
  console.log(`Transformed string : ${fn(str)}`);

  console.log(`Transformed string : ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

//JS uses callback all the time
const high5 = function () {
  console.log("🤚");
};

document.body.addEventListener("click", high5);

["Shoxrux", "Shahboz", "Abror", "Ibrohim"].forEach(high5);
 */

//**---Function Returning Functions---**//
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
//Closures
const greeterHey = greet("Hello");
greeterHey("Shoxrux");
greeterHey("Muhtarama");
greet("Hi")("Shomurodov");

//In arrow function
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArr("Hello")("Shoxrux");
 */

//**---The call and apply Methods---**//

/*
const uzairways = {
  airline: "UzAirways",
  iataCode: "Uz",
  bookings: [],
  // book: function () {},
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum} `, name });
  },
};

uzairways.book(27, "Shoxrux Shomurodov");
uzairways.book(333, "Shox Shomurodov");
console.log(uzairways);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = uzairways.book;
//Does NOT work
// book(45, "John Dee");

book.call(eurowings, 45, "John Dee");
console.log(eurowings);

book.call(uzairways, 277, "Shomurodova Muhtarama");
console.log(uzairways);

const swiss = {
  airline: "Swiss Airline",
  iataCode: "SW",
  bookings: [],
};

book.call(swiss, 555, "Rose Marry");
console.log(swiss);

//Apply method
const flightData = [677, "Shahboz Rasulov"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
console.log(swiss);
 */

//**---The bind Methods---**//
//Bind don't immediatly call function instead return new function

/*
const uzairways = {
  airline: "UzAirways",
  iataCode: "Uz",
  bookings: [],
  // book: function () {},
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum} `, name });
  },
};
const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const swiss = {
  airline: "Swiss Airline",
  iataCode: "SW",
  bookings: [],
};

const book = uzairways.book;

const bookEurowings = book.bind(eurowings);
const bookSwiss = book.bind(swiss);
bookEurowings(988, "Dilmurod Shomurodov");
console.log(eurowings);
bookSwiss(876, "Dangerboy");
console.log(swiss);

const bookEurowings24 = book.bind(eurowings, 24);
bookEurowings24("Ibrohim");
console.log(bookEurowings24);

//With event Listener
uzairways.planes = 45;
uzairways.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
uzairways.buyPlane();
// document
//   .querySelector(".buy")
//   .addEventListener("click", uzairways.buyPlane.bind(uzairways));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = (value) => (value = value * 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
 */

// Coding Challenge #1 🔥🔥🔥

/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this and the last section 😉
BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀
*/
/*
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    console.log(answer);
    //Register answer
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;
    console.log(this.answers);
    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

// poll.registerNewAnswer();
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
 */

//**---Immediately Invoked Function Expression (IIFE)---**//

/*
const runOnce = function () {
  console.log("This will never run again");
};
runOnce();

//(IIFE)
(function () {
  console.log("This will never run again");
  const isPrivate = 23;
})();
// console.log(isPrivate);

(() => console.log("This will ALSO never run again"))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);
*/

//**---Closures---**//

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);

// Coding Challenge #2 🔥🔥🔥

/* 

This is more of a thinking challenge than a coding challenge 🤓
Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!
And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.
GOOD LUCK 😀

*/

const header = document.querySelector("h1");
const changeColor = () => {
  header.style.color = "blue";
};

document.querySelector("body").addEventListener("click", changeColor);
