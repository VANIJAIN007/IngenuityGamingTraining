// JavaScript Operators

// 1.Arithmetic Operators
// +,-,*,/,%,++,--

var a=10,b=20;

var c=a+b;
var d=a+-b;
var e=a*b;
var f=a/b;
var g=a%b;
console.log("Result "+c);
console.log("Result "+d);
console.log("Result "+e);
console.log("Result "+f);
console.log("Result "+g);
console.log("Result "+ ++g);
console.log("Result "+ g--);
console.log("Result "+ --g);

// console.log("Result "+c);


//Conditional Operators

// <,>,<=,>=,==,===,!=,!==

//Results in TRUE and FALSE

a=10,b=20,c=30;
console.log(a<b); //true
console.log(a>b); //false
console.log(a<=b); //true
console.log(a>=b); //false
console.log(a!=b);  //true;

a="20";

//Comparison Operators :it compares the value
console.log(a==b);  //true

//Strict comparison Operator :it compare value and data type
console.log(a===b);  //false

console.log(a!=b);  //false

console.log(a!==b); //true   check type

//logical operator

var result=a<b && a!=b;
console.log("Logical And"+result);

var result="hello" && a!=b;
console.log("Logical AND"+result);

var result="hello" || a!=b;
console.log("Logical OR "+result);
console.log("Logical NOT "+!result);

//Assignment Operators

// =,+=,-=,/+,*=,%=

b=55;
console.log((a=b));
console.log((a+=b));
// console.log((a+=b));
// console.log((a+=b));

//Ternary Operators

result=(a!=b)?"Hi!":"NJD";
console.log(result);
