//basic array operations
let arr=[1,2,3,4,5];
console.log(arr.length); //length
console.log(arr[0]); //accesing elements
console.log(arr[arr.length-1]);
arr.push(6);                //adding element at th end
console.log(arr);
arr.pop();                  //removes from the last
console.log(arr);
arr.shift();                 //removes from the start
console.log(arr);
arr.unshift(0);            //adds at the start
console.log(arr);

//searching methods
console.log(arr.indexOf(3));
console.log(arr.includes(4));
console.log(arr.find(n=>n===3));
console.log(arr.findIndex(n=>n>3)); //findIndex returns the index of the first element that satisfies the condition

//iteration methods
arr.forEach(n=>console.log(n)); //forEach executes a provided function once for each array element
let doubled=arr.map(n=>n*2); //map creates a new array by applying a function to each element
console.log(doubled);
let even=arr.filter(n=>n%2===0); //filter creates a new array with elements that pass a test
console.log(even);
let sum=arr.reduce((acc,n)=>acc+n,0);

//sorting and reversing (sorts as strings by default)
arr.sort((a,b)=>b-a);   //sort in descending order
console.log(arr);
arr.reverse();       //reverse the array
console.log(arr);

//slice and splice
let sliced=arr.slice(1,4); //slice returns a shallow copy of a portion of an array into a new array object
console.log(sliced);
arr.splice(2,1,99); //splice changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
console.log(arr);

//combining arrays
let arr2=[7,8,9];
let combined=arr.concat(arr2); //concat is used to merge two or more arrays
console.log(combined);
let combined2=[...arr,...arr2]; //spread operator to combine arrays
console.log(combined2);

//convert array to string 
let words=['sandhya','kuppili'];
console.log(words.join(' '));
let s="sandhya,kuppili";
console.log(s.split(','));


//some and every
console.log(arr.some(n=>n>3)); //some checks if at least one element satisfies the condition
console.log(arr.every(n=>n>0)); //every checks if all elements satisfy the condition

//multidimensional arrays
let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matrix[1][2]); //accessing element in a 2D array

//Array.from() and Array.of()
let a=Array.from('hello'); //creates an array from an iterable or array-like object
console.log(a);
let b=Array.of(1,2,3); //creates a new array instance with a variable number of arguments
console.log(b);

