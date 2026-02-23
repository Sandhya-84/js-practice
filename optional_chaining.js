/*it is used to avoid error . means if the accessing pbject is present  then it will return the accessed value
 if not it will return undefined instead of throwing an error
 */
// it is used by the symbol "?" and it is called optional chaining operator
const user={
    name:'sandhya',
    age:20
};
console.log(user?.name);
console.log(user?.address); //undefined instead of error
console.log(user.address); //Cannot read properties of undefined (reading 'address')  -- this will be the error

//nested objects
const user1={
    name:'sandhya',
    age:20,
    address:{
        city:'delhi',
        country:'india'
    }
};
console.log(user1?.address?.city); //delhi
console.log(user1?.address?.street); //undefined instead of error


//syntax:
/*
object?.property
object?.method()
array?.[index]
*/
// call function safely
let use = {
    greet(){
        console.log("Hello");
    }
};

use.greet?.(); // runs

let admin = {};
admin.greet?.(); // no error

//Access array index
let arr = null;
console.log(arr?.[0]);

//summary
/* optional chaining means
“If this exists, continue… otherwise stop safely.”

?. is a safe way to access nested properties, call functions, or access array elements without worrying about whether the intermediate values exist. If any part of the chain is null or undefined, it will return undefined instead of throwing an error.
*/

