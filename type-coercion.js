//implicit
console.log('5'+2);
console.log('5'-2);
console.log('5'*2);
console.log('5'/2);


console.log(true+1);
console.log(false+1);
console.log(true+false);
console.log(5+2+'3');
console.log('5'+2+3);
//explicit
console.log(Number('5')+2);
console.log(Number('5')-2);
console.log(Number('5')*2);
console.log(Number('5')/2);
console.log(Boolean(1));
console.log(Boolean(0));
console.log(parseInt('10'));
console.log(parseFloat('3.14'));
console.log(String(5));
console.log(String(true));
console.log(+'30');

if(5=='5'){
    console.log('equal');  // coercion happens, so they are considered equal
}
if(5==='5'){
    console.log('equal'); // no coercion, so they are not considered equal
}