//DEstructuring

var arr=[1,2,3,4,5,6,7,8,9,10];

let x=arr[0];
let y=arr[1];
let z=arr[9];

let[a,b,c,d,, , , t]=arr;
console.log(a);
console.log(t);
console.log(b);


//Destructuring with objects
let person={
    name:"vani",
    age:21,
    mobile:98546246545,
    email:"vaks@jnd",
    city:"agra",
    address:{
        pincode:282010,
    }
}
console.log(person.email)

let{pincode}=person.address;
let{mobile,email,city}=person;
console.log(pincode);
console.log(mobile);