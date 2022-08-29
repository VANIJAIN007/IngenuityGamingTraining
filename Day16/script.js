var canvas=document.getElementById('canvas');
const ctx = canvas.getContext('2d');//it helps like a pencil

// canvas.width=200;
canvas.width=window.innerWidth;
//Filled Rectangle
ctx.fillStyle="red";
ctx.fillRect(50,50,150,100);

//Strok Rectangle

ctx.lineWidth=5;
ctx.strokeStyle="blue";
ctx.strokeRect(250,50,150,100);

//Rounded Rectangle
ctx.fillStyle="orange";
ctx.roundRect(450,50,100,100,[10]);
ctx.fill();


//clear canvas
function clearCanvas(){
    ctx.clearRect(40,40,canvas.width,canvas.height);
}


ctx.font="30px Arial"
// ctx.fillText("Hello world",200,200);
ctx.lineWidth=1;
ctx.strokeText("Hello World",200,300)

//Draw Triangle

//Path
ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(150,50);
ctx.lineTo(100,200);
// ctx.lineTo(50,50);
ctx.closePath();
ctx.fillStyle="coral";
ctx.fill();
ctx.stroke();

//Stroke Triangle
ctx.beginPath();
ctx.moveTo(200,50);
ctx.lineTo(150,200);
ctx.lineTo(250,200);
ctx.closePath();
ctx.stroke();

//Fill rectangle
ctx.beginPath();
// ctx.moveTo();
ctx.rect(300,50,150,100);
ctx.fillStyle="blue"
ctx.fill();
ctx.stroke();

//Draw ARC

ctx.beginPath();
ctx.arc(300,300,100,0,Math.PI *2) // first in location
ctx.fillStyle="TEAL";
ctx.fill();
ctx.stroke();

// radian=(Math.PI) //deGREE(180) HALF CIRCLR
// radian=(Math.PI)*2(FULL CIRCLE)

clearCanvas();

