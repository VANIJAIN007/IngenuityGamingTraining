console.log("State1");
var result=0;

//settimeout is asynchronous
//it will not stop the flow of execution
setTimeout(()=>{
    for(var i=0;i<1000000;i++){
        result+=i;
    }
})
// for(var i=0;i<1000000000;i++)  result+=i;
console.log(result);
console.log("State2");