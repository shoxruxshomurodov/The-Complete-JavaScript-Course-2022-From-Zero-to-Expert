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

/*
const shoxrux = {
  firstName: "Shoxrux",
  lastName: "Shomurodov",
  birthYear: 1998,
  job: "programmer",
  friends: ["Shahboz", "Ibrohim", "Abror", "Zarif", "Ubaydulla"],
  hasDriversLicence: true,

  // calcAge0: function (birthYear) {
  //   return 2022 - birthYear;
  // },

  // calcAge1: function (birthYear) {
  //   return 2022 - shoxrux.birthYear;
  // },
  calcAge2: function () {
    return 2022 - this.birthYear;
  },
  calcAge3: function () {
    console.log(this);

    this.age = 2022 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.age} years old programmer, and he ${
      this.hasDriversLicence ? "has" : "hasn't"
    } driver's licence`;
  },
};

// console.log(shoxrux.calcAge0(1998));
// console.log(shoxrux["calcAge0"](1998));

// console.log(shoxrux.calcAge1());
// console.log(shoxrux["calcAge1"]());

// console.log(shoxrux.calcAge2());
// console.log(shoxrux["calcAge2"]());
console.log(shoxrux.calcAge3());
console.log(shoxrux.age);
console.log(shoxrux["age"]);

//Challenge
//"Shoxrux is a 24 years old programmer, and he has a driver's licence "

console.log(
  `${shoxrux.firstName} is a ${shoxrux.age} years old programmer, and he ${
    shoxrux.hasDriversLicence ? "has a" : "hasn't"
  } driver's licence`
);

console.log(shoxrux.getSummary());
 */

// Coding Challenge #3🔥

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
GOOD LUCK 😀
*/
/*
const shoxrux = {
  fullName: "Shoxrux Shomurodov",
  height: 1.69,
  weight: 78,
  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

const shahboz = {
  fullName: "Shahboz Rasulov",
  height: 1.95,
  weight: 92,
  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

shahboz.calcBMI();
console.log(shahboz.bmi);
shoxrux.calcBMI();
console.log(shoxrux.bmi);

if (shoxrux.bmi > shahboz.bmi) {
  console.log(
    `${shoxrux.fullName}'s BMI:(${shoxrux.bmi}) is hiegher than ${shahboz.fullName}'s BMI (${shahboz.bmi}) `
  );
} else if (shoxrux.bmi < shahboz.bmi) {
  console.log(
    `${shahboz.fullName}'s BMI:(${shahboz.bmi}) is hiegher than ${shoxrux.fullName}'s BMI (${shoxrux.bmi}) `
  );
}
*/

//**---Loops---**//

/*
console.log("Lefting weights repition 1 🏋️‍♂️");
console.log("Lefting weights repition 2 🏋️‍♂️");
console.log("Lefting weights repition 3 🏋️‍♂️");
console.log("Lefting weights repition 4 🏋️‍♂️");
console.log("Lefting weights repition 5 🏋️‍♂️");
console.log("Lefting weights repition 6 🏋️‍♂️");
console.log("Lefting weights repition 7 🏋️‍♂️");
console.log("Lefting weights repition 8 🏋️‍♂️");
console.log("Lefting weights repition 9 🏋️‍♂️");
console.log("Lefting weights repition 10 🏋️‍♂️");

//for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 20; rep++) {
  console.log(`Lefting weights repition ${rep} 🏋️‍♂️`);
}

const types = [];
const shoxruxArray = [
  "Shoxrux",
  "Shomurodov",
  2022 - 1998,
  "programmer",
  ["Shahboz", "Ibrohim", "Abror", "Zarif", "Ubaydulla"],
];

for (let i = 0; i < shoxruxArray.length; i++) {
  console.log(shoxruxArray[i], typeof shoxruxArray[i]);
  // types[i] = typeof shoxruxArray[i];
  types.push(typeof shoxruxArray[i]);
}

console.log(types);

const years = [1967, 1971, 1998, 2003];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages[i] = 2022 - years[i];
}
console.log(ages);

//continue and break

console.log(`---ONLY STRINGS`);
for (let i = 0; i < shoxruxArray.length; i++) {
  if (typeof shoxruxArray[i] !== "string") continue;
  console.log(shoxruxArray[i], typeof shoxruxArray[i]);
}

console.log(`---ONLY NUMBER`);
for (let i = 0; i < shoxruxArray.length; i++) {
  if (typeof shoxruxArray[i] !== "number") continue;
  console.log(shoxruxArray[i], typeof shoxruxArray[i]);
}

console.log(`---BREAK with numbers`);
for (let i = 0; i < shoxruxArray.length; i++) {
  if (typeof shoxruxArray[i] === "number") break;
  console.log(shoxruxArray[i], typeof shoxruxArray[i]);
}
 */

//**---Looping Backward and Loops in Loops---**//

const shoxruxArray = [
  "Shoxrux",
  "Shomurodov",
  2022 - 1998,
  "programmer",
  ["Shahboz", "Ibrohim", "Abror", "Zarif", "Ubaydulla"],
  true,
];

//0, 1, ....., 4
for (let i = shoxruxArray.length - 1; i >= 0; i--) {
  console.log(i, shoxruxArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----------Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise} Lefting weight repitition ${rep} 🏋️‍♂️ `);
  }
}
