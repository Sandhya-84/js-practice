console.log("===== JAVASCRIPT OPERATORS FULL DEMO =====");

//ARITHMETIC OPERATORS
let a = 10;
let b = 3;

console.log("\n--- Arithmetic Operators ---");
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Power:", a ** b);

//ASSIGNMENT OPERATORS
console.log("\n--- Assignment Operators ---");
let x = 5;
console.log("Initial x:", x);

x += 2;
console.log("x += 2:", x);

x -= 1;
console.log("x -= 1:", x);

x *= 3;
console.log("x *= 3:", x);

x /= 2;
console.log("x /= 2:", x);

//COMPARISON OPERATORS
console.log("\n--- Comparison Operators ---");
console.log("5 == '5' :", 5 == "5");   // true
console.log("5 === '5':", 5 === "5");  // false
console.log("10 > 3:", 10 > 3);
console.log("10 < 3:", 10 < 3);
console.log("10 >= 10:", 10 >= 10);
console.log("10 <= 9:", 10 <= 9);
console.log("5 != 3:", 5 != 3);
console.log("5 !== '5':", 5 !== "5");

//LOGICAL OPERATORS
console.log("\n--- Logical Operators ---");
let age = 20;
let hasID = true;

console.log("age > 18 AND hasID:", age > 18 && hasID);
console.log("age < 18 OR hasID:", age < 18 || hasID);
console.log("NOT hasID:", !hasID);

//INCREMENT / DECREMENT
console.log("\n--- Increment & Decrement ---");
let count = 5;
count++;
console.log("After ++ :", count);

count--;
console.log("After -- :", count);

//STRING OPERATORS
console.log("\n--- String Operators ---");
let firstName = "Sandhya";
let lastName = "Kuppili";

let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);

//TERNARY OPERATOR
console.log("\n--- Ternary Operator ---");
let marks = 75;

let result = marks >= 50 ? "Pass" : "Fail";
console.log("Exam Result:", result);

//MIXED EXPRESSIONS
console.log("\n--- Expressions Example ---");
let total = (5 + 3) * 2 > 10 && true;
console.log("Complex Expression Result:", total);

