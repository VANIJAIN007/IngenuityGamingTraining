// Task1

//Call
var obj={
    firstname:"Vani",
    lastname:"Jain",
    fullname:function(){
        return this.firstname+" "+this.lastname;
    }
}
// console.log(obj.fullname());
var person2={
    firstname:"raja",
    lastname:"singh",
}

console.log(obj.fullname.call(person2));

//Apply

var obj1={
    firstname:"Vanya",
    lastname:"Sharma",

}
console.log(obj.fullname.apply(obj1));

//Task2

var number=[8,27,64,125,216];  
var numberArr=number.map((i)=>Math.cbrt(i));
console.log(numberArr);

//Task 3
for(var i=0;i<5;i++){
setTimeout(callback,3000);
}
function callback(){
    console.log("Hi");
}
// setInterval(callback,3000);
// clearInterval(myInterval);


//Task4

var people = [
    { name: "Ashish", age: 23 },
    { name: "Ajay", age: 21 },
    { name: "Arvind", age: 26 },
    { name: "Mahesh", age: 28 },
    { name: "Jay", age: 19 }
  ];

  var arr=people.map((i)=>{return i.name+" "+i.age});
  console.log(arr);

  //Task 5


var ages=people.map((i)=>{return i.age});
var result=ages.filter(filterAge).sort(function(n1,n2){return n2.age-n1.age});
console.log(result);
function filterAge(age){
    return age<25
}
// var result=ages.filter(filterAge);
// console.log(result);


