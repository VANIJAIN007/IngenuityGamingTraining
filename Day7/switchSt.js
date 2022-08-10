var a=2;
switch(a){
    case 1:console.log(("A is one"));break;
    case 2:console.log(("A is TWO"));break;
    case 3:console.log(("A is three"));break;
    case 4:console.log(("A is four"));break;
    default:
        console.log("Number not matched");
        break;
}
console.log("Switch case ended");

a=1;
switch(a){
    case 1:
    case 2:
    case 3:
        console.log(("A is one, teo ,three"));break;
    case 4:console.log(("A is four"));break;
    default:
        console.log("Number not matched");
        break;
}
console.log("Switch case ended");


a=1;
switch(a){
    case "1":{
        console.log("a IS 1");
        break;
    }
    case 1:
    case 2:
    case 3:
        console.log(("A is one, teo ,three"));break;
    case 4:console.log(("A is four"));break;
    default:
        console.log("Number not matched");
        break;
}
console.log("Switch case ended");

a="SACHIN";
switch(a){
    case "SACHIN":{
        console.log("a IS SACHIN");
        break;
    }
    case "MANISH":
    case "MNKDLED":
    case "jndklw":
        console.log(("A is one, teo ,three"));break;
    case 4:console.log(("A is four"));break;
    default:
        console.log("Number not matched");
        break;
}
console.log("Switch case ended");