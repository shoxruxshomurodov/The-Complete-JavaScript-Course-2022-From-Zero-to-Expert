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
// console.log(fruitProcessor(5, 0));

// const fruitProcessor = (apples, oranges) => {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// };

// const appleJuice = fruitProcessor(5, 0);
// console.log(fruitProcessor());

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
