// global scope
let globalVar = "I am a global variable";

function outerFunction() {
  // local scope of outerFunction
  let outerVar = "I am an outer variable"; 
    console.log(globalVar); // can access global variable;
    console.log(outerVar);  // can access its own variable

    function innerFunction() {
        // local scope of innerFunction
        let innerVar = "I am an inner variable";
        console.log(globalVar); // can access global variable
        console.log(outerVar);  // can access outer function variable
        console.log(innerVar);  // can access its own variable
    }
    innerFunction();
    // console.log(innerVar); // cannot access inner function variable
}
outerFunction();
// console.log(outerVar); // cannot access outer function variable


// block scope
if (true) {
    let blockVar = "I am a block variable";
    console.log(blockVar); // can access block variable
}
// console.log(blockVar); // cannot access block variable

// function scope
function test() {
    let functionVar = "I am a function variable";
    console.log(functionVar); // can access function variable
}
// console.log(functionVar); // cannot access function variable


//shadowing
let name = "Global Name";  
function shadowingExample() {
  let name = "Local Name"; 
    console.log(name); // outputs "Local Name" due to variable shadowing
}
shadowingExample();
console.log(name); // outputs "Global Name" as it accesses the global variable  
