"use strict"
const marks = [10, 70, 30, 60, 110, 1120, 210, 50, 40, 20];

//sort method

//10,20,30,40,50,60,70
//'10','20','30','40','50','60','70', internal it convert to string (sort lexicographically)

console.log(marks);
marks.sort()
console.log(marks);

//array of objects
const fruits = ["banana", "apple", "graphes", "pineapple","orange"];
fruits.sort();
console.log(fruits);


//comparation operator
marks.sort((a,b) => a - b);  //decending(b-a)  for ascending(a-b); 
console.log(marks);