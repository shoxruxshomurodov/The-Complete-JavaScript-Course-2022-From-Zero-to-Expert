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
/*
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
 */
//**---Introduction to Array---**//
/*
const friend1 = "Shahboz";
const friend2 = "Ibrohim";
const friend3 = "Abror";
const friend4 = "Zarif";
const friend5 = "Ubaydulla";

const friends = ["Shahboz", "Ibrohim", "Abror", "Zarif", "Ubaydulla"];
console.log(friends);

// const years = new Array(1998, 2003, 1967, 1971, 2005);

//Array is zero(0) based ☝
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);
console.log(friends[4]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Abush";
console.log(friends);

const firstName = "Shoxrux";
const shoxrux = [firstName, "Shomurodov", 2022 - 1998, "programmer", friends];
console.log(shoxrux);

//Exercise

const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const years = [1998, 2003, 1967, 1971, 2005];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);
const age5 = calcAge(years[4]);

console.log(age1, age2, age3, age4, age5);

 */
//**---Array Methods---**//
/*
const friends = ["Shahboz", "Ibrohim", "Abror", "Zarif", "Ubaydulla"];

//Add Elements
//push() add element in the end
friends.push("Humoyun");
console.log(friends);

//unshift() add element in the beginning
friends.unshift("Ramazon");
console.log(friends);

//Remove elements
//pop() remove element in the end
friends.pop();
console.log(friends);

//shift() remove element in the beginning
friends.shift();
console.log(friends);

//Other methods
console.log(friends.indexOf("Zarif"));
console.log(friends.includes("Ilhom")); //false //strict equality
console.log(friends.includes("Abror")); //true //strict equality

if (friends.includes("Shahboz")) {
  console.log("I hava a friend called Shahboz");
}
 */

//**---Coding Challenge #2🔥---**//
/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips);
console.log(totals);
 */

//**---Objects---**//

/*
const shoxruxArray = [
  "Shoxrux",
  "Shomurodov",
  2022 - 1998,
  "programmer",
  ["Shahboz", "Ibrohim", "Abror", "Zarif", "Ubaydulla"],
];

const shoxrux = {
  firstName: "Shoxrux",
  lastName: "Shomurodov",
  age: 2022 - 1998,
  job: "programmer",
  friends: ["Shahboz", "Ibrohim", "Abror", "Zarif", "Ubaydulla"],
};
 */

//**---Objects Dot vs. Bracket Notation---**//
/*
const shoxrux = {
  firstName: "Shoxrux",
  lastName: "Shomurodov",
  age: 2022 - 1998,
  job: "programmer",
  friends: ["Shahboz", "Ibrohim", "Abror", "Zarif", "Ubaydulla"],
};

console.log(shoxrux);

console.log(shoxrux.lastName);
console.log(shoxrux["lastName"]);

const nameKey = "Name";
console.log(shoxrux["first" + nameKey]);
console.log(shoxrux["last" + nameKey]);

// const interestedIn = prompt("What do you want to know about Shoxrux ?");
// console.log(shoxrux[interestedIn]);

console.log(
  `Shoxrux has ${shoxrux.friends.length}, and his best friend is called ${shoxrux.friends[0]}`
);

 */

//**---Objects Methods---**//

const shoxrux = {
  firstName: "Shoxrux",
  lastName: "Shomurodov",
  birthYear: 1998,
  job: "programmer",
  friends: ["Shahboz", "Ibrohim", "Abror", "Zarif", "Ubaydulla"],
  hasDriversLicence: true,
  calcAge0: function (birthYear) {
    return 2022 - birthYear;
  },

  calcAge1: function (birthYear) {
    return 2022 - shoxrux.birthYear;
  },
  calcAge2: function () {
    return 2022 - this.birthYear;
  },
};

console.log(shoxrux.calcAge0(1998));
console.log(shoxrux["calcAge0"](1998));

console.log(shoxrux.calcAge1());
console.log(shoxrux["calcAge1"]());

console.log(shoxrux.calcAge2());
console.log(shoxrux["calcAge2"]());
