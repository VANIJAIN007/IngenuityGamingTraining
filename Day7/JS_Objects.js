//Javascript Object

//Way-1 to create objects

var person={
    name:"Vani",
    age:21,
    city:{cityName:"Agra",pincode:282010},
    sector:[1,2,3,4,5],
    details:function(){
        return this.name+" "+this.age+" "+this.city.cityName+" ";
    },
};

console.log(person);
console.log(person.name);
console.log(person.city.cityName);
console.log("sECTOR"+person.sector[2]);
console.log(person.details());

//by using constructor

var student=new Object();
// student.name=prompt("Enter student name");
student.name="Vani";
student.age=21;
student["city"]="Mathura";

console.log(student);

person.email="vajain@ingenuitygaming.com";
console.log(person);

// person.name="jle";
// console.log(person);

