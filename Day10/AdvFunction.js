//Invoking a Function as a Method in Object

var obj={
    firstname:"Vani",
    lastname:"Jain",
    //using function to crreate method of object
    fullname:function(){
        return this.firstname+" "+this.lastname;
    },
};

console.log(obj.fullname());



//Function call()

var person1={
    firstname :"Sara",
    lastname  :"Khan",
}
console.log(obj.fullname.call(person1));//reusability

var person={
    fullname:function(city,country){
        return this.firstname+" "+this.lastname+" "+city+" "+country;
    },
};

var person1={
    firstname :"Sara",
    lastname  :"Khan",
};

console.log(person.fullname.call(person1,"agra","india"));


//Function apply()

// Apply method to reuse a method available in other object

var person2={
    firstname:"raj",
    lastname:"agar"
};

console.log(person.fullname.apply(person2,["delhi","india"]));



//Function bind()


//Arrow Function

//map function

//filter function

//Callback function

//Timing Functions