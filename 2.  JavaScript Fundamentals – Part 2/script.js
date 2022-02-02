"use strict";

//**---Activating Strict Mode ---**//

// "use strict"
// It help us more secure code that means avoid error
// It creates visible errors developer tools

/*
let hasDriversLicence = false;
const passTest = true;

if (passTest) {
  hasDriverLicence = true;
}
//script.js:10 Uncaught ReferenceError: hasDriverLicence is not defined  at script.js:10:20

if (hasDriverLicence) {
  console.log("I can drive :D");
}

const interface = "Audio"; //Uncaught SyntaxError: Unexpected strict mode reserved word
const private = 998; //Uncaught SyntaxError: Unexpected strict mode reserved word

 */

//**---Functions---**//
/*
function logger() {
  console.log("My name is Shoxrux");
}
//Invoking , calling, running  function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  //   console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

// const fruitProcessor = (apples, oranges) => {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// };

// const appleJuice = fruitProcessor(5, 0);
// console.log(fruitProcessor());

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
 */

//**---Functions Declaration & Function Expression---**//

//Functions Declaration

//Function is Value not type
/*
function calcAge1(currentYear, birthYear) {
  return currentYear - birthYear;
}
const age1 = calcAge1(2021, 1998);

//Functions Expression
const calcAge2 = function (currentYear, birthYear) {
  return currentYear - birthYear;
};
const age2 = calcAge1(2021, 2003);

console.log(age1, age2);

//Main differencce between function declaration and expression is
//In function declaration you can define them before they are defined

// const age1 = calcAge1(2021, 1998);

// function calcAge1(currentYear, birthYear) {
//   return currentYear - birthYear;
// }
 */

//**---Arrow Functions Declaration ---**//

//Function Expression
const calcAge2 = function (currentYear, birthYear) {
  return currentYear - birthYear;
};
const age2 = calcAge2(2021, 1967);
console.log(age2);

//Arrow function
const calcAge3 = (currentYear, birthYear) => currentYear - birthYear;
const age3 = calcAge3(2021, 2003);

console.log(age3);

const yearsUntilRetire = (
  currentYear = 2022,
  birthYear = 1998,
  firstName = "Shoxrux"
) => {
  const age = currentYear - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetire(2022, 2003, "Muhtarama"));
