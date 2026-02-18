//Array destructuring
let arr=['sandhya',30,'kuppili']; //destructuring assignment
let [name,age,surname]=arr; //destructuring the array into variables
console.log(name);
console.log(age);
console.log(surname);

let[a,,c]=arr;
console.log(c); //skipping the second element

let ab=["Ravi"];
let [na , ag=18]=ab;
console.log(na); //Ravi
console.log(ag); //18 (default value since age is not provided in the array)

//swapping variables using destructuring
let x=5,y=10;
[x,y]=[y,x];
console.log(x);
console.log(y);

//object destruction
let person={
    name_1:"Sandhya",
    age_1:30,
    city:"Hyderabad"
};
let {name_1,age_1,city}=person; //destructuring the object into variables (variable names must match the property names in the object)
console.log(name_1); //person.name is not used here
console.log(age_1);
console.log(city);

//rename variables
let {name_1:n,age_1:a_1}=person; //renaming variables while destructuring
console.log(n);
console.log(a_1);

//destructuring in function parameters
function display({name_1,age_1}){
    console.log(`Name: ${name_1}, Age: ${age_1}`);
}
display(person); //passing the person object to the function which destructures it in the parameters

//nested destructuring
let student={
    name:"Sandhya",
    marks:{
        math:90,
        science:95
    }
};
let {name:studentName,marks:{math,science}}=student;
console.log(studentName);
console.log(math);
console.log(science);
