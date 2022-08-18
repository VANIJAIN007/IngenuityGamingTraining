console.log(document.documentElement);  //to access entire structure
console.log(document.head);//to access head
console.log(document.title);//to access title

//DOM REFERENCES

document.title="new title";//it will change it dynamically
console.log(document.title);

var x=document.getElementById("head1");
console.log(x);

var y=document.getElementsByClassName("para");
console.log(y);

var z=document.getElementsByTagName('ul');
console.log(z);

var a=document.querySelector("#head2"); //pointing to first and only one element
console.log(a);

var allpara=document.querySelectorAll(".para");
console.log(allpara);
console.log(allpara[1]);

var h2=document.getElementById("head2");
console.log(h2);
//Data Manipulation

// x.style.backgroundColor="yellow";

// x.innerText="New Heading";
// // h2.style.display="none";
// h2.style.visibility="hidden";

// allpara[1].style.fontFamily="arial";
// allpara[1].style.color="red";;
// allpara[1].style.border="2px solid red";

// var newLi=document.createElement('li');
// var textContent=newLi.textContent="New Item";

// z.appendChild(...newLi);

// y.style.color="blue";  //we cannot apply directyly on array

for(var i=0;i<y.length;i++) y[i].style.color="blue";

function PerformTask(){
    alert("Button Clicked");
    console.log("Clicked");
}
var btn=document.querySelector('button');
console.log(btn);

btn.onmouseover=function (){
    document.querySelector('p').style.backgroundColor="pink";
};

btn.onmouseleave=()=>{
    document.querySelector('p').style.backgroundColor="skyblue";
}

