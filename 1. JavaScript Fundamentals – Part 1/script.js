//HELLO WORLD
/*
alert("Hello Shoxrux!");
let js = "amazing";
if (js === "amazing") alert("JavaScript is FUN!");
js = "boring";
("boring");
if (js === "amazing") alert("JavaScript is FUN!");
25 + 13 - 10;
 */

//A Brief Introduction to JavaScript
/*
---------------------------------
WHAT IS JAVASCRIPT ?

JavaScript is a High-level,
Object-Oriented , Multi-Paradigm
programming language.
---------------------------------

_____________ECMA Script Versions______________
ES5 -> ES6/ES2015 -> ES7/ES2016 -> ES8/ES2017 -> ES9/ES2018 -> ES10/ES2019 -> ES11/ES2020 -> ...

ES5 -> ECMAScript
ES6/ES2015 -> Biggest update to the language EVER✨

//Linking a JavaScript File

Internal->>>>>>
<script>
let js = "amazing";
if (js === "amazing") alert("JavaScript is FUN!");
</script>

External->>>>>>
<script src="script.js"> </script>

//Values and Variables
let js = "amazing";
console.log(65 - 32 + 10);
console.log("Shoxrux");
console.log(23);

let firstName = "Muhtarama";

console.log(firstName);
console.log(firstName);
console.log(firstName);

//not allowed naming
// let 3years = 3;
// let shoxrux&shomurodov = "ShSh"
let shoxrux_shomurodov = "ShSh";
let shoxrux$shomurodov = "ShSh";
//Not allowed reserved word
// let new = "new year"

//Reserved but allowed
let name = "Muhtarama"; //Not Reccomended

//Not begin with Uppercase just convention
let Person = "Shoxrux"; //for Objects
let PI = 3.14;
console.log(PI);

let job1 = "Programmer";
let job2 = "Teacher";
//Better than above
let myFirstJob = "Programmer";
let myCurrnetJob = "Teacher";
*/

//-----Data Types-----//
//Objects (Reference) Data types
// 7 Primitive Data types
/*
1-> Number = Floating Points Number 👉 used for decimal and integers
2-> String = Sequence of characters 👉 used for text
3-> Boolean = Logical type that can only be "true" or "false" 👉 used for taking decision
4-> Undefined = Value taken by a variable that is not yet defined ("empty value")
5-> Null = also means "empty value"
6-> Symbol(ES2015/ES6) = value that is unique and cannot be changed 
7-> BigInt(ES2020/ES11) = Larger integers than the Number type can hold
*/
/*
👆JavaScript has dynamic typing : We do not have to manually define 
the data types of the value stored in a variable. Instead, data types are 
determined automatically
 */
//Single Line Comment
/*
Multi
Line
Comment
*/
/*
//JavaScript executes from top to bottom
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun); //Boolean
console.log(typeof 12); //Number
console.log(typeof "Shoxrux"); //String
javascriptIsFun = "Yes!"

let year;
console.log(year);
console.log(typeof year);

year = 1998;
console.log(year);
console.log(typeof year);
console.log(typeof null);
let age = 23;
console.log(age);
const birthYear = 1998;
console.log(birthYear);

let age; //accepted

// with declare const not accepted
// const job

//Var is old way!!! priorty of ES6
var job = "Programmer";
job = "teacher";
console.log(job);

//Trible!!!☝
// lastName = "Shomurodov";
// console.log(lastName);

//****---Basic Operators---****/ //
/*
//Math Operators
const year = 2030;
const ageShoxrux = year - 1998;
const ageMuhtarama = year - 2003;
console.log(ageShoxrux, ageMuhtarama);

console.log(ageShoxrux * 2, ageShoxrux / 10, 2 ** 3);
//2**3 explanation operator means 2 to the power of 3 = 2*2*2
const firstName = "Shoxrux";
const lastName = "Shomurodov";
console.log(firstName + " " + lastName);

//Assignment operator (=)
let x = 98 + 8;
console.log(x);
x += 10; //x = x + 10=116;
x *= 4; //x = x * 4 = 464;
x++; // x = x + 1 = 465;
x--; // x = x - 1 = 464;
console.log(x);

//Comparision Operators
/*
<
>
>=
<=
*/
/*
console.log(ageShoxrux > ageMuhtarama); //true
console.log(ageShoxrux < ageMuhtarama); //false
const isAdultAge = ageShoxrux >= 18;
console.log(isAdultAge);
 */

//****-----------Operator Precedence--------*****//
/*
const now = 2022;
const ageShoxrux = now - 1998;
const ageMuhtarama = now - 2003;

console.log(now - 1991 > now - 2020);
const averageAge = ageShoxrux + ageMuhtarama / 2;
console.log(averageAge);
 */
/*
Codding Challenge #1🔥

Shoxrux and Shahboz are trying to compare their BMI (Body Mass Index),
which is calculated using the formula : 
BMI = mass / height ** 2
BMI = mass / (height * height)
(mass in kg height in meter).

1. Stored Shoxrux's and Shahboz's mass and height in variables

2. Calculate  both their BMIs using the formula 
(you can even implement both version)

3. Create a boolean variable "shoxruxHeigherBMI" containing 
information about whether shoxrux has a higher BMI than shaxboz
*/
/*
const shoxruxsMass = 90;
const shoxruxsHeight = 1.76;

const shahbozsMass = 75;
const shahbozHeight = 1.86;

const shoxruxsBMI = shoxruxsMass / shoxruxsHeight ** 2;
const shahbozsBMI = shahbozsMass / shahbozHeight ** 2;

const shoxruxHeigherBMI = shoxruxsBMI > shahbozsBMI;
console.log(
  "Shoxrux BMI is " + shoxruxsBMI,
  "Shaxboz BMI is " + shahbozsBMI + " " + shoxruxHeigherBMI
);
 */

//****---Template Literals---****/ //
//ES6 version
/*
const firstName = "Shoxrux";
const job = "programmer";
const birthYear = 1998;
const currentYear = 2022;

//Simple example
const shoxrux =
  "I'm " +
  firstName +
  " " +
  ",a " +
  (currentYear - birthYear) +
  "years old " +
  job +
  "!";
console.log(shoxrux);

//Template
const shoxruxNew = `I'm ${firstName} a ${
  currentYear - birthYear
} years old ${job}!`;
console.log(shoxruxNew);

console.log("String with \nmultiple \nlines");
console.log(`String with 
multiple 
ines`);
 */

//****---Taking Decision if-else Statements---****/ //
/*
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Muhtarama can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(
    `Muhtarama can't start driving license 🚗 , she is young. Wait another ${yearsLeft} years😥`
  );
}

const birthYear = 1998;

let century;
if (birthYear < 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century + " " + "century");
 */
/*
Codding Challenge #2🔥

Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Shoxrux's BMI is higher than Shahboz's!" or "Shahboz's BMI is higher than Shoxrux's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Shoxrux's BMI (28.3) is higher than Shahboz's (23.9)!"
HINT: Use an if/else statement 😉
const shoxruxsMass = 90;
const shoxruxsHeight = 1.76;

const shahbozsMass = 105;
const shahbozHeight = 1.86;

const shoxruxsBMI = shoxruxsMass / shoxruxsHeight ** 2;
const shahbozsBMI = shahbozsMass / shahbozHeight ** 2;

if (shoxruxsBMI > shahbozsBMI) {
  console.log(
    `Shoxruxs BMI is ${shoxruxsBMI} grater than Shahbozs BMI ${shahbozsBMI}`
  );
} else {
  console.log(
    `Shahbozs BMI is ${shahbozsBMI} grater than Shoxruxs BMI ${shoxruxsBMI}`
  );
}
*/

//****---Type Conversion and Coersion---****//

/*
Type Conversion = is manually convert type from one type to another
Coersion = is automaticly convert type behind the scenes  
*/
/*
const inputYear = "1998";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18); //199818
console.log(Number(inputYear) + 18); //2016

console.log(Number("Shoxrux")); //NaN string word can't convert number
console.log(typeof NaN); //Type of NaN is Not a Number

console.log(String(23) + 13); //Convert 23 to String output is 2313

//Type coercion
console.log("I am " + 23 + " years old.");
console.log("23" - "13" - 3); //convert string to number automatically
console.log("23" * "2");
console.log("23" / "2");
console.log("23" > "2");

let n = "1" + 1; //Convert to String 11
n = n - 1; //Convert to Number 10
console.log(n);
 */

//****---Equality operators == vs ===---****//

//=== Strict Don't doing type coersion compare type and value
//== Loose Don't compare type compare only value
//Clean Code you use ===(Strict Equality☝☝☝)
/*
const age = 18;
console.log(age);
if (age === 18) {
  console.log("You just became an Adult! (strict)");
}
if (age == 18) {
  console.log("You just became an Adult! (loose)");
}
console.log(18 === 18);
console.log(18 === 20);
console.log(18 === "18"); //false
console.log(18 == "18"); //true

// const favourite = prompt("What is your favorite number");
const favourite = Number(prompt("What is your favorite number"));
console.log(favourite);
23;
console.log(typeof favourite);

// if (favourite == 23) {
//   //"23"==23
//   console.log("Cool! 23 is an amazing number!");
// }
if (favourite == 23) {
  //23===23
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}
if (favourite !== 23) {
  console.log("Why not 23");
}
 */
//****---Truthy and Falsy Values---****//

//5 falsy value: 0, "", undefined, null, NaN☝
/*
console.log(Boolean(0)); //False
console.log(Boolean(undefined)); //False
console.log(Boolean(null)); //False
console.log(Boolean(NaN)); //False
console.log(Boolean("")); //False
console.log(Boolean("shoxrux")); //True

const money = 0;
if (money) {
  //0 is falsy value
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}

let height;
if (height) {
  //undefined is falsy
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED!");
}
 */

//****---Boolean Logic---****//
/*

//Basic Boolean Logic : AND , OR & NOT
// && AND if all true be true
// || OR if all false be false
// ! NOT Invert true to false , false to true

const age = 16;
if (age >= 20 || age < 30) {
  console.log("Age is less than30");
}
 */

//****---Logical Operators---****//
/* 
const hasDriverLicence = true; //A
const hasGoodVision = false; //B

console.log(hasDriverLicence && hasGoodVision);
console.log(hasDriverLicence || hasGoodVision);
console.log(!hasDriverLicence);

const shouldDrive = hasDriverLicence && hasGoodVision;
if (hasDriverLicence && hasGoodVision) {
  console.log("Muhtarama is able to drive!🚗");
} else {
  console.log("Someone else  is able to drive 🚗");
}

const isTired = true; //C
console.log(hasDriverLicence || hasGoodVision || isTired);
console.log(hasDriverLicence && hasGoodVision && isTired);
const hasDriverLicence = true; //A
const hasGoodVision = true; //B
const isTired = false; //C

if (hasDriverLicence && hasGoodVision && !isTired) {
  console.log("Muhtarama is able to drive!🚗");
} else {
  console.log("Someone else should to drive... 🚗");
}
*/

/*
Codding Challenge #3🔥

There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
 and print it to the console. Don't forget that there can be a draw, 
 so test for that as well (draw means they have the same average score).
3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, 
a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points.
 HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! 
So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const dolphinsAverage = (100 + 112 + 100) / 3;
const koalasAverage = (100 + 112 + 100) / 3;

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log(`Dolphins are winner with ${dolphinsAverage} 🏆🎉`);
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
  console.log(`Koalas are winner with ${koalasAverage} 🏆🎉`);
} else if (
  dolphinsAverage === koalasAverage &&
  dolphinsAverage >= 100 &&
  koalasAverage >= 100
) {
  console.log(`Both of them winner 🏆🎉`);
} else {
  console.log(`No one of them are winner 😥`);
}
*/

//****---The Switch Statement---****//

//☝using only strict equality

/*
const day = prompt("What is today");

switch (day) {
  case "monday": //day==="monday"
    console.log(`Plan course structure`);
    break;
  case "tuesday":
    console.log(`Go to coding meetup`);
    break;
  case "wednesday":
  case "thursday":
    console.log(`Prepare theory videos`);
    break;
  case "friday":
    console.log(`Write code examples`);
    break;
  case "saturday":
    console.log(`Record videos`);
    break;
  case "sunday":
    console.log(`Enjoy rest day🎉⚽🏓`);
    break;
  default:
    console.log(`Not a valid day`);
}

if (day === "monday") {
  console.log(`Plan course structure`);
} else if (day === "tuesday") {
  console.log(`Go to coding meetup`);
} else if (day === "wednesday" || day === "thursday") {
  console.log(`Prepare theory videos`);
} else if (day === "friday") {
  console.log(`Write code examples`);
} else if (day === "saturday") {
  console.log(`Record videos 🎥`);
} else if (day === "sunday") {
  console.log(`Enjoy rest day🎉⚽🏓`);
} else {
  console.log(`Not a valid day`);
}
 */

//****---The Conditional (Ternary) Operator---****//

/*
const age = 22;
age >= 18
  ? console.log(`I can drive car 🚗`)
  : console.log(`I shoundn't drive car 🚗`);

const marriage = age >= 20 ? "marriaged" : "not marriaged";
console.log(marriage);

let marriage2;

if (age >= 18) {
  console.log("marriaged");
} else {
  console.log("not marriaged");
}

console.log(
  `I am ${age} years old. I ${age >= 18 ? "can" : "can't"} drive a car 🚗`
);
 */

//****---Statements and Expressions---****//

/*
// Expression is word , Statement is sentence , consist of expression  like bunch of expression

// Expression  produce value
3 + 4; //expression
1998; //expression
true && false && !false; //expression

// Statement does not produce value
if (23 > 10) {
  const str = "23 is bigger";
}

console.log(`I am ${2022 - 1998} years old.`);
 */

//****---JavaScript Releases ES5, ES6,...., ESNext---****//
/*
 1995
 Brendan Eich
 in 10days
 Mocha
 1996 - Mocha to LiveScript 
 1997 ECMACScript ES1
 2009 ES5(ECMAScript5)
 2015 ES6 - biggest update to the language ever!
 2016 - ∞∞∞

 Backwards Compatilibility : Don't break the web!

Modern JavaScript Engine---------------> 1997 ES1
☝Old features are never removed
☝Not really new versions , just incremental updates (releases)
☝Websites keep working forever!


☝BABEL
 */

/*
Codding Challenge #4🔥

Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. 
In his country, it's usual to tip 15% if the bill value is between 50 and 300.
 If the value is different, the tip is 20%.
1. Your task is to caluclate the tip, depending on the bill value.
 Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅
  (If it's easier for you, you can start with an if/else statement, 
  and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip,
 and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25,
  and the total value 316.25'
TEST DATA: Test for bill values 275, 40 and 430
HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
*/

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
const total = bill + tip;

console.log(`Bill is ${bill} , tip is ${tip} . Total = ${total}`);
