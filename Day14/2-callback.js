// in javascript functions are first class citizens

//function can be use as an argument
//function can be assigned to a variable
//function can also be used as a return statement


// callback:

// 1.Function can be used as an arguments
// 2. a calback is a function which is used inside another function

var students=[
    {name:"vani",subject:"java"},
    {name:"manish",subject:"python"},{name:"rupali",subject:"c++"},
];

function admitStudent(student,callback){
    setTimeout(()=>{
        students.push(student);
        console.log("student has been admitted");
        callback();
    },3000);
}

function displayStudent(){
    setTimeout(()=>{
        var str="";
        students.forEach(element => {
            str+=element.name+" "
        });
        console.log(str);
        console.log("student has been fetched");

    },1000);
};

var newStudent={name:"raj",subject:"react"};
// admitStudent(newStudent);
// displayStudent();
admitStudent(newStudent,displayStudent);