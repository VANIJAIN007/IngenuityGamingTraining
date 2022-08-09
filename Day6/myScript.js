"use strict";
// javascript statements/commands/instruction
document.body.style.backgroundColor="pink"

//output statement
document.write("Hello World");
// window.alert("This is Javascript");
alert("This is Javascript");
console.log("This is console to debug your code");

//Variables in javascript

// Multi line
// Comments

//VariablesIn javascript
var name;
name="Vani";

var Name="xyz";

//Variables Rule
// 1 variables are case sensitive
// 2.variable name can not start from Number
// 3. Only underscore (_) is used as a special symbols
// 4. spaces are not allowed between variable name
// 5. you cannot use variable name as a keyword

// var first name="Vani"

var firstName="Vani";//allowed

// Datatypes in Javascript

// 1. Premitive Data Types->String,number,boolean,undefined,null
// 2.Refrence 

// var firstname="Vani",
//  lastname="Jain";


// String DT
var firstname="Vani";//can also use single quote both treated as a string
var lastname="Jain";

// Number DT

var distance=40
var excatDistance=40.7

//Boolean Dt

var isOpened=false

console.log(typeof firstName);
console.log(typeof distance);
console.log(typeof(isOpened));

var training;
// console.log(training);
console.log(typeof(training));

var trainingType=null;//if dont know then put it as a null
console.log(typeof(trainingType));

// Types Of programming language
//Javascript is typeless(loosely typed language)
//which make javascript to be dynamic

firstName=52000;
console.log(typeof firstName);

// lastDay="Monday";
// console.log(lastDay); it will run in sloppy mode not in strict mode

//Dyanmic behaviour  of Jvascript

function sayHi(value){
    if(true){
        console.log("correct");
    }
    else{
        console.log("incorrect");
    }
}
sayHi(true);
sayHi("true");

//Javascript worked in two modes

// 1.Sloppy Mode
    // by default mode
// 2.Strict Mode

'use strict';
// Dialog Boxes

// 1.alert: use to display some message as notification
// 2.confirm:a dialog box which input as "Yes" or "No"
// 3.prompt: use to take input from the user

// alert("This is notification");
// var isOK=confirm("Are yo sure to go Further")
// console.log(isOK);

var fullname=prompt("Enter yor fullname");
console.log(fullname);

let x=10
x=true
x="new string";

const val1='5';
const val2=9;//concatenation implicitly
let sum=val1+val2;
console.log(sum);

// let sum1=(Number)val1+val2;
// console.log(sum1);
    'true'==true //comparing the values  (NaN comparing with 1)
