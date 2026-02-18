//templates literals variable interpolation
const name = "Sandhya";
const age = 30; 
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message); // Output: My name is Sandhya and I am 30 years old.

//multiline strings
const multiline=`this is a 
multi line 
string`;
console.log(multiline);

//expressions in template literals
let a=10;
let b=20;
console.log(`sum  is ${a+b}`); // Output: sum is 30

//also used in innerHTML

//for example html programm will be  .... that will not run in node environment but will run in browser environment
/*<button onclick="show()">Click</button>
<p id="msg"></p>

<script>
function show(){
    let user = "Sandhya";
    document.querySelector("#msg").textContent =
        `Hello ${user}, Welcome to Template Literals 🎉`;
}
</script>
*/




