//ES6 Promise
//1. its a way of connecting with APIS
//2. iTS an  object that returns a value that hope to receive in future but not right now
//3. Promise is well suited for handling Asynchronous operations
//4. Promise has three states. Pending,Fulfilled,Rejected

function sayHi(){
    return new Promise((resolve,reject)=>{
        console.log("Let me check my calender...")
        setTimeout(()=>{
        const err=true;
        if(!err)
        {
            resolve("Ok i will call you");
        }
        else{
            reject("I am busy");
        }
    },3000);
})
        
}
console.log(sayHi());
sayHi().then((val)=>console.log(val)).catch((err)=>console.log(err));

