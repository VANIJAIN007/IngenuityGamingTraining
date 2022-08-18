//ES5 based function

// var add=function(a,b){
//     return a+b;
// }
// console.log(add(5,10));

//ES6 SPECIFICATION Fat Arrow Function

//variation -3
var add=(a,b)=> a+b;
console.log(add(5,15));


//variation-1

var sayHello=()=>console.log("This is Arrow Function of Variation-1");
sayHello();

var sayHello=()=>{console.log("This is Arrow Function of Variation-1")
    console.log("Statement2");
};
sayHello();

//variation2
var sqr=(a)=>console.log("Result "+ (a*a));
sqr(3);

var myarr=[1,2,3,4,5];
myarr.forEach((i)=>console.log(i*10));