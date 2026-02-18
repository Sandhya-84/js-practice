//spread= extend value like arrays conacatenation
//rest=collect multiple elements and condense them into a single element like function parameters

//spread operator
let arr1 = [1,2,3];
let arr2 = [...arr1];

console.log(arr2); // [1,2,3]

//merge arrays
let a = [1,2];
let b = [3,4];

let c = [...a, ...b];
console.log(c); // [1,2,3,4]

//adds values while copying;
let d = [3,4];
let e=[1,2,...d,5];
console.log(e); // [1,2,3,4,5]

//spreads with objects
let user = {name:"Ravi", age:22};

let updatedUser = {...user, city:"Delhi"};
console.log(updatedUser);

//spread in functions

let numbers = [5,10,15];
console.log(Math.max(...numbers)); // 15

//rest operator
function sum(...numbers){
    console.log(numbers);
}

sum(1,2,3,4);  //just like passing n number of arguments to the function, rest operator collects them into an array

//rest with destructing
let arr = [1,2,3,4,5];
let [first, ...rest] = arr;

console.log(first); // 1
console.log(rest);  // [2,3,4,5]
