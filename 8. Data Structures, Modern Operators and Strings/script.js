"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order receieved ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivred to ${address} at ${time} `
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3} `
    );
  },
};

//**---Destructuring Arrays ---**//
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//Destructuring assignment
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// const [first, , second] = restaurant.categories; //"Italian", "Pizzeria",
// const [first, , second] = restaurant.categories; //second elemen skipped "Italian",  "Vegetarian"
// console.log(first, second);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

//Switching variable
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);//Pizzeria Italian

//Destructing
[main, secondary] = [secondary, main];
console.log(main, secondary); //Pizzeria Italian

restaurant.order(2, 0);
console.log(restaurant.order(2, 0)); //['Garlic Bread', 'Pizza']

//Recieve 2return from a function
const [starterCourse, mainCourse] = restaurant.order(2, 0);
console.log(starterCourse, mainCourse); //Garlic Bread Pizza

//Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); //(2) [5, 6]
const [i, , [j, k]] = nested;
console.log(i, j, k); //2 5 6

//Default values
// const [p, q, r] = [8, 9];
// console.log(p, q, r); //8 9 undefined

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); //8 9 1
 */
//**---Destructuring Objects ---**//
/*
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories); //{thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

const {
  name: restaurantName,
  openingHours: openingHours,
  categories: tags,
} = restaurant;

console.log(restaurant, openingHours, tags); // Classico Italiano  {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// const { menu, starterMenu: starters = [] } = restaurant; //undefined (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

//Default value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 12 };
({ a, b } = obj);
console.log(a, b); //23,7

//Nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close); // 11 23

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
// 11 23

restaurant.orderDelivery({
  time: "22:30",
  address: "Yunusota 20",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Yunusota 20",
});
 */

//**---The Spread Operator (...) ---**//
//Unpack an Array
//Expand array
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); //[1, 2, 7, 8, 9]

const newGoodArr = [1, 2, 3, 4, ...arr];
console.log(newGoodArr); //[1, 2, 3, 4, 7, 8, 9]
console.log(...newGoodArr); //1 2 3 4 7 8 9

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

//Copy array

const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//Iterables ; arrays, strings, maps, sets. NOT OBJECTs

const str = "Shoxrux";
const letters = [...str];
console.log(letters);

const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Ingredient 2?"),
  // prompt("Ingredient 3?"),
];
console.log(ingredients);
restaurant.orderPasta(...ingredients);

//Objects
const newRestauraunt = {
  foundedIn: 1998,
  ...restaurant,
  founder: "Shomurodov",
};
console.log(newRestauraunt);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Zafar";
console.log(restaurantCopy);
