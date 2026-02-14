// function declaration
function greet(name) {
  console.log("Hello, " + name + "!");
}  
greet("Alice");

// function with paramaters adn return value
function add(a, b) {
  return a + b;
}  
let sum = add(5, 3);
console.log("Sum:", sum);                                                   

//function expression
let multiply = function(a, b) {
  return a * b;                        // function is assigned to a variable and can be called using that variable
}        
let product = multiply(4, 6);
console.log("Product:", product);

//arrow function
let divide = (a, b) => a / b;
let quotient = divide(10, 2);           // concise syntax for functions, especially for simple one-liners . no need of giving function keyword and return statement if it's a single expression. it also lexically binds the this keyword, which can be useful in certain contexts.
console.log("Quotient:", quotient);

// default parameters
function greetUser(name = "Guest") {
  console.log("Welcome, " + name + "!");
}  
greetUser();              // uses default value "Guest"
greetUser("Bob");         // uses provided value "Bob"


//nested functions
function outer() {
  console.log("This is the outer function.");   
    function inner() {
    console.log("This is the inner function.");
    }
    inner();                // inner function can access variables and parameters of the outer function
}
outer();


//callback function
function fetchData(callback) {
  setTimeout(() => {
    let data = "Sample Data";
    callback(data);         // callback function is passed as an argument and called after data is fetched
  }, 1000);
}
fetchData((result) => {
  console.log("Fetched Data:", result);
});

//anonymous function
setTimeout(function() {
  console.log("This is an anonymous function.");
}, 1500);
