console.log("=== HOISTING DEMO ===");

// var hoisting
console.log(a);
var a = 10;

// function hoisting
greet();
function greet() {
  console.log("Hello!");
}

// let hoisting
// console.log(b); // uncomment → error
let b = 20;

// function expression
// test(); // uncomment → error
var test = function() {
  console.log("Test function");
};

console.log("=== END ===");
