// primitive data types in javascaript

let number =10;
console.log(number);
let string='sandhya';
console.log(string);
let boolean=true;
console.log(boolean);
let nullValue=null;
console.log(nullValue);
let undefinedValue;
console.log(undefinedValue);
let symbol=Symbol('id');
console.log(symbol);
let bigInt=1234567890123456789012345678901234567890n;
console.log(bigInt);

// non-primitive data types in javascript
let array=[1,2,3,4,5,'sandhya',true];
console.log(array);
let object={
    name: 'sandhya',
    age: 20
};
console.log(object);
function greet(){
    console.log('hello');
}
greet();
console.log(typeof 10);
console.log(typeof 'sandhya');
console.log(typeof true);
console.log(typeof nullValue);
console.log(typeof undefinedValue);
console.log(typeof symbol);