var myArr=[1,3,5,7,10];
var newArr=myArr.map((i)=>i*10);
console.log(newArr); //foreach will not give new array

var users=[
    {firstname:"vani",lastname:"jain"},{firstname:"kfenk",lastname:"jkeb"},{firstname:"jkskj",lastname:"msnkl"},
];

var arr=users.map((u)=>{return users.firstname+" "+users.lastname});
console.log(arr);

