//Conditional Statements

//If,If-else,if-elseif-else,Nested if-else

// var number=prompt("Enter a number");
// var number=5;
// if(number>0){
//     console.log("Number is Positive");
// }
// console.log("This is Simple If Statement");

var number=-1;
if(number>=0){
    console.log("positive");
}
else if(number==0){
    console.log("zero");
}
else{
    console.log("negative");
}
console.log("Simple if statement");


var num=2;
if(num>=0){
    if(num==0){
        console.log("Zero");
    }
    else{
        console.log("positive");  //we can remove extra brackets but not main bracket which is checking multiple conditions inside it
    }
}
else{
    console.log("negative");
}
console.log("simple if statement");
