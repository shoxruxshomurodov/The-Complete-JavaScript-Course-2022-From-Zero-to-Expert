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

//**---Arrow Functions  ---**//
/*
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

function cutFruitPieces(fruit) {
  return fruit * 4;
}

const fruitProcessor = (apples, oranges) => {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  console.log(apples, oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
};

console.log(fruitProcessor(2, 5));
 */

//**---Reviewing Functions  ---**//

/*
☝Function Decloration => that can be used before it's declared

☝Function Expression => essentially a function value stored in a variable 

☝Arrow Function +> Great for a quick one-line functions .
Has no this keyword


const calcAge = (currentYear = 2022, birthYear = 1998) => {
  return currentYear - birthYear;
};

const yearsUntilRetire = (
  firstName = "Shoxrux",
  currentYear = 2022,
  birthYear = 1998
) => {
  const age = calcAge(currentYear, birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired🎉`);
    return -1;
  }
};

console.log(yearsUntilRetire("Muhtarama", 2022, 2003));
console.log(yearsUntilRetire("Shohrux", 2022, 1948));

*/

//**---Coding Challenge #1🔥---**//

const calcAverage = function (score1, score2, score3) {
  const average = (score1 + score2 + score3) / 3;
  return average;
};

const scoreDolphins = calcAverage(144, 183, 171);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

checkWinner(scoreDolphins, scoreKoalas);
