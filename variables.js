let naem ='sandhya';
let age=20;
console.log(age);
age=30; //updatable
console.log(age);
if(age>18){
    let a=1;  // scoped
    console.log('verified');
}
console.log(a); //scoped


var a=10;
if(a>9){
    var b=4;  
    console.log('verified');
}
console.log(b); // not scoped
var c=3;
c=7;            //updatable
console.log(c);

const pi=3.14;
console.log(pi);
pi=3;           // cannot be done
