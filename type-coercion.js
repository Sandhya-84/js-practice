//implicit
console.log('5'+2);  // + operator is used for both addition and string concatenation. When one operand is a string, it converts the other operand to a string and concatenates them.
console.log('5'-2);
console.log('5'*2);
console.log('5'/2);

// in js expressions are evaluated form left to right, so in the first example '5'+2 is evaluated first, resulting in '52', and then '52'+3 is evaluated, resulting in '523'. In the second example, 5+2 is evaluated first, resulting in 7, and then 7+'3' is evaluated, resulting in '73'.
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