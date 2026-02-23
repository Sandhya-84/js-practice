/* 
⭐ First-Class Functions in JavaScript

In JavaScript, functions are first-class citizens.
This means functions behave just like variables.

👉 You can:

Store them in variables

Pass them as arguments

Return them from other functions

Put them inside objects/arrays
*/
// Example 1: Storing a function in a variable
let greet=function(name){
    console.log("Hello, " + name + "!");
}
greet("sandhya"); // Output: Hello, sandhya!

// Example 2: Passing a function as an argument
function say(name){
    console.log("Hi, " + name + "!");
}
function message(callback){
    callback("sandhya");
}
message(say); // Output: Hi, sandhya!

// Example 3: Returning a function from another function
function outer(){
    return function inner(name){
        console.log("Welcome, " + name + "!");
    }
}
let innerFunction=outer();
innerFunction("sandhya"); // Output: Welcome, sandhya!
//another way
function multiplier(x) {
    return function(y) {
        return x * y;
    };
}

let double = multiplier(2);
console.log(double(5));  // 10

// Example 4: Storing functions in an array
let operations=[
    function(x){ return x + 2; },   
    function(x){ return x * 2; },
    function(x){ return x - 2; }
];
console.log(operations[0](5)); // Output: 7
console.log(operations[1](5)); // Output: 10
console.log(operations[2](1)); // Output: -1

// Example 5: Storing functions in an object
let user = {
    name: "Ravi",
    greet: function() {
        console.log("Hi!");
    }
};

user.greet();



