"use strict";

//**---Default Parameters ---**//
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 240
  // price = 199 * numPassengers
) {
  //Old way before ES6
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH233", 2, 400);
createBooking("LH123", 3, 400);

 */

//**---How passing Argument Works Value vs. Reference ---**//

/*
const flight = "LH234";
const shoxrux = {
  name: "Shoxrux Shomurodov",
  passport: "AB0584433",
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH777";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === "AB0584433") {
    alert("Cheked IN");
  } else {
    alert("Wrong passport!");
  }
};

checkIn(flight, shoxrux);
console.log(flight);
console.log(shoxrux);

// flightNum = flight;
// passenger = shoxrux;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(shoxrux);
checkIn(flight, shoxrux);
 */

//**---First Class and Higher Order Function---**//

//First Class functions

//JavaScript treats functions as first-class cutizens
//This means that  functions are simply values
//Functions are just another  "type" of object

/*
Store functions in variables or properties:

const add = (a, b) => a + b;
const counter = {
  value: 23,
  inc: function () {
    this.value++;
  },
};
 */

/*
Pass functions as arguments to Other functions:

const greet = () => console.log("Hey Shoxrux");
btnClose.addEventListener("click", greet);
 */

//Return Functions FROM functions

/*
Call methods on functions:
counter.inc.bind(someOtherObject);
 */

//Higher-Order functions

/*
A funtion that receviess another function as an argument ,
that returns a new function, or both

This is only possible because of first-class function

// Function that receive another function
const greet = () => console.log("Hey Shoxrux");
btnClose.addEventListener("click", greet);
//addEventListener Higher-order function
//greet callback function
 */

/*
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

//Function Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, "").toUpperCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string : ${str}`);
  console.log(`Transformed string : ${fn(str)}`);

  console.log(`Transformed by : ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);
