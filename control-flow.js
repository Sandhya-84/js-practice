console.log("===== CONTROL FLOW & LOOPS FULL DEMO =====");

//VARIABLES
let age = 20;
let marks = 82;
let day = 3;

// IF STATEMENT
console.log("\n--- IF STATEMENT ---");
if (age >= 18) {
  console.log("You are eligible to vote");
}

//- IF ELSE
console.log("\n--- IF ELSE ---");
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

//IF ELSE IF LADDER
console.log("\n--- IF ELSE IF ---");
if (marks >= 90) {
  console.log("Grade A");
}
else if (marks >= 70) {
  console.log("Grade B");
}
else if (marks >= 50) {
  console.log("Grade C");
}
else {
  console.log("Fail");
}

//SWITCH STATEMENT
console.log("\n--- SWITCH ---");
switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

//TERNARY OPERATOR
console.log("\n--- TERNARY ---");
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);



//FOR LOOP
console.log("\n--- FOR LOOP ---");
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

//WHILE LOOP
console.log("\n--- WHILE LOOP ---");
let i = 1;
while (i <= 5) {
  console.log("While:", i);
  i++;
}

//DO WHILE LOOP
console.log("\n--- DO WHILE LOOP ---");
let j = 1;
do {
  console.log("Do While:", j);
  j++;
} while (j <= 5);

// FOR OF (ARRAY LOOP)
console.log("\n--- FOR OF (ARRAY) ---");
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log(fruit);          // just like for each loop in java
}

//FOR IN (OBJECT LOOP)
console.log("\n--- FOR IN (OBJECT) ---");
let student = {
  name: "Sandhya",
  age: 20,
  city: "Tenali"
};

for (let key in student) {
  console.log(key, ":", student[key]);
}                                                 // just like for each loop in java but for objects

// BREAK & CONTINUE
console.log("\n--- BREAK ---");
for (let k = 1; k <= 5; k++) {
  if (k == 3) break;
  console.log(k);
}

console.log("\n--- CONTINUE ---");
for (let k = 1; k <= 5; k++) {
  if (k == 3) continue;
  console.log(k);
}

//example of nested loops
console.log("\n--- FINAL PRACTICE ---");

let numbers = [5, 12, 18, 7, 25];

for (let num of numbers) {

  if (num >= 18) {
    console.log(num, "Adult");

  } else if (num >= 10) {
    console.log(num, "Teen");

  } else {
    console.log(num, "Child");
  }
}

