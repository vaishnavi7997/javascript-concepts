"use strict";
const marks = [80, 55, 77, 65, 95, 60];
const firstClassStudent = marks.filter(function(value) {
return value > 60
});
console.log(firstClassStudent);
console.log(marks);


//even numbers
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((value) => 
 value % 2 ===0                     
);
console.log(evenNumbers);


//array filter
const words = ["apple","bat", "banana","cat", "grapes", "pineapple"];
 const wordsGreater = words.filter((word) =>
       word.length > 3
);
console.log(wordsGreater);


const user = [
    {name: "Alice", age: 25},
    {name: "Jhon", age:  30},
    {name: "Alice", age:  15},
];
const greaterThan =  user.filter((user) => user.age> 18 );
console.log(greaterThan);