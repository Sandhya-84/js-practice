//modules
/* JavaScript Modules (ES Modules)

Modules let you split your JS code into multiple files and reuse code cleanly.
 Instead of writing everything in one big file, you can export from one file and import into another.
 */

export const PI =3.14;
export function add(a,b){
    return a+b;
}
export function subtract(a,b){
    return a-b;
}

// default function. 
// A module can have only one default export, and it can be imported without using curly braces.
export default function greet(name){
    return `hellow ${name}`;
}