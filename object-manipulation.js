//object manipulation
let person={
    name:'sandhya',
    age:30,
    city:'hyderabad'
};
console.log(person);
console.log(person.name);   //accessing property using dot notation
person.age=21;  //modifying existing property
console.log(person);
console.log(person['city']); //accessing property using bracket notation
person.country='India'; //adding new property
console.log(person);
delete person.city; //deleting a property
console.log(person);
for(let key in person){
    console.log(key,person[key]);
}

console.log(Object.keys(person)); //returns an array of the object's own property names
console.log(Object.values(person)); //returns an array of the object's own property values
console.log(Object.entries(person)); //returns an array of the object's own enumerable string-keyed property [key, value] pairs


//copy objects
let copy={...person}; //shallow copy using spread operator
console.log(copy);
copy.name='sandy';
console.log(copy);
console.log(person); //original object remains unchanged

//merge objects
let extra={hobby:'coding',country:'India'};
let merged={...person,...extra};
console.log(merged);

//check if property exists
console.log('name' in person); //true
console.log(person.hasOwnProperty('age')); //false

//nested objects
let student={
    name:'sandhya',
    marks:{
        math:90,
        science:95
    }
};

console.log(student.marks.math); //accessing nested property
student.marks.english=85;  //updating nested values
console.log(student);

//object methods
let obj={
    name:'sandhya',
    greet:function(){
        console.log(`Hello, my name is ${this.name}`);
    }
};
obj.greet();
