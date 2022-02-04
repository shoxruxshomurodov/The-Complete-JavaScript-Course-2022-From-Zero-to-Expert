"use strict";

// const x = '23'; //"singleQuote": true,
// if (x === 23) {
//   console.log(23);
// }
const x = "23"; //"singleQuote": false,
if (x === 23) {
  console.log(23);
}

// const calcAge = (birthYear) => 2022 - birthYear; //Prettier "arrowParens": "always"
const calcAge = birthYear => 2022 - birthYear; //Prettier "arrowParens": "avoid"

console.log(x);
