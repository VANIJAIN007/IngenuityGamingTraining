//global Scope
var bg,bgImage;
var mario,mario_running;
var ground;
var brick


//Load Assets
function preload(){  //it will load all resources in memory
    bgImage=loadImage("./images/bgnew.jpg")
    mario_running=loadAnimation("./images/mar1.png","./images/mar2.png","./images/mar3.png","./images/mar4.png","./images/mar5.png","./images/mar6.png");

    //load image
}

//function setup //for location,size creating basix skeleton with their required credentials
function setup(){
    createCanvas(1000,600);

    //create objects
    bg=createSprite(600,300,50,50);
    mario=createSprite(600,300,50,50);

    //Add pictures on objects
    bg.addImage(bgImage);
    mario.addAnimation("running",mario_running);
    mario.scale=0.2

    //scale objects
    bg.scale=.5;
    bg.x=bg.x-400;


    //create ground

    ground=createSprite(200,580,400,10)
} 


//used to redraw objects on the canvas
function draw(){
    //make background move and repeat
    bg.velocityX=-5;
    if(bg.x<100){
        bg.x=bg.width/4
    }
    if(keyDown('space')){
        mario.velocityY=-10;

    }
    mario.velocityY=mario.velocityY+0.5;

    //mario stuck on ground
    mario.collide(ground);
    ground.visible="false";
    // background("black");
    drawSprites();
}