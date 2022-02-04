"use strict";
/*
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
 */
// Using Google, StackOverflow and MDN
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?
// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it
/*
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);

console.log(amplitude);

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degress celsius:")),
  };
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
*/

// Coding Challenge #4🔥
const data1 = [17, 21, 23];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}ºC in ${i + 1} days... `;
  }
  console.log(str);
};

printForecast(data1);
