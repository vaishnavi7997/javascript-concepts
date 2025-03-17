"use strict";

//slice

// const fruits = ["apple", "grapes", "banana","pineapple", "grapes"];

// const spliceFruits = fruits.slice(1);
// console.log(spliceFruits);


//Splice

//   indexvalue   0          1         2         3          4
const fruits = ["apple", "grapes", "banana","pineapple", "grapes"];
const spliceFruits = fruits.splice(1,2 ,"orange");
console.log(spliceFruits);
console.log(fruits);