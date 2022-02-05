"use strict";

//**---Destructuring Arrays ---**//

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

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

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); //8 9 1
