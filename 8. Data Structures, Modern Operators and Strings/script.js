/*📒📒📒 Data Structures, Modern Operators and Strings 📒📒📒*/
"use strict";
/* Initial values */

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
      open: 0,
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

//**--- 🔥🔥🔥Destructuring Arrays🔥🔥🔥 ---**//
const arr = [2, 3, 4];
/*
//OLD WAY 😥😥😥
const a = arr[0];
const b = arr[1];
const c = arr[2];
*/
/* 
//NEW WAY 😛😛😛
const [x, y, z] = arr;
console.log(x, y, z);
*/
const [main, , secondary] = restaurant.categories;
// const [main, , secondary] = restaurant.categories; //Skip second element
// console.log(main, secondary);

const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);
