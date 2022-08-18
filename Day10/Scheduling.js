//setTimeout function
// setTimeout(callback,timer);
setTimeout(callback,3000);
function callback(){
    console.log("hi");
}

setTimeout(() => {
    console.log("Hello");
}, 5000);

//setTimeinterval

var interval=setInterval(callback,2000);
clearInterval(interval);


