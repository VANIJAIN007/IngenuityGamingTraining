//global Scope
var bg,bgImage;
var mario,mario_running;
var ground;
var brickImage,bricksGroup;
var coinImage,coinsGroup;
var coinScore=0;
var enemyImage,enemyGroup;



//Load Assets
function preload(){  //it will load all resources in memory
    bgImage=loadImage("./images/bgnew.jpg");
    mario_running=loadAnimation("./images/mar1.png","./images/mar2.png","./images/mar3.png","./images/mar4.png","./images/mar5.png","./images/mar6.png");
    brickImage=loadImage("images/brick.png");
    coinImage=loadAnimation("./images/con1.png","./images/con2.png","./images/con3.png","./images/con4.png","./images/con5.png","./images/con6.png");
    enemyImage=loadAnimation("./images/tur1.png","./images/tur2.png","./images/tur3.png","./images/tur4.png","./images/tur5.png");
    //load image
}

//function setup //for location,size creating basic skeleton with their required credentials
function setup(){
    createCanvas(1000,600);

    //create objects
    bg=createSprite(600,300,150,50);
    mario=createSprite(200,520,50,50);

    //Add pictures on objects
    bg.addImage(bgImage);
    mario.addAnimation("running",mario_running);
    mario.scale=0.2

    //scale objects
    bg.scale=.5;

    bg.x=bg.x-400;


    //create ground
       
    ground=createSprite(200,580,400,10);
    bricksGroup=new Group();

    coinsGroup=new Group();
    // coinsGroup=new Group();
    enemyGroup=new Group();



} 


//used to redraw objects on the canvas
function draw(){
    //make background move and repeat
    bg.velocityX=-5;
    if(bg.x<100) bg.x=bg.width/4
    if(keyDown("space")){
        mario.velocityY=-10;

    }

    mario.velocityY=mario.velocityY+0.5;

    //mario stuck on ground   
    mario.collide(ground);
    ground.visible=false;

    //call GenerateBricks
    generateBricks();
    
    for(var i=0;i<bricksGroup.length;i++){
        var temp=bricksGroup.get(i);
        if(mario.isTouching(temp)){
            mario.collide(temp);
        }
    }
    if(mario.x<200){
        mario.x=200;
    }
    if(mario.y<50){
        mario.y=50;        
    }
    generateCoins();

    for(var i=0;i<coinsGroup.length;i++){
        var temp=coinsGroup.get(i);
        if(mario.isTouching(temp)){
            temp.destroy();
            coinScore++;
            temp=null;
        }
    }
    // enemyEntered();
    // for(var i=0;i<enemyGroup.length;i++){
    //     var temp=enemyGroup.get(i);
    //     if(mario.isTouching(temp)){       
    //         enemy.destroy();
    //         temp=null;
    //     }
    // }
    


    // background("black");
    drawSprites();

    text("Coins Collected :"+coinScore,500,50);


}

function generateBricks(){
    if(frameCount % 80==0){
        console.log(frameCount);
    
    var brick=createSprite(1200,100,40,10);
    brick.y=random(50,450);
    brick.addImage(brickImage);
    brick.velocityX=-5;
    brick.lifetime=250;
    brick.scale=0.5;
    bricksGroup.add(brick);
    }

}

function generateCoins(){
    if(frameCount%80==0){
        // console.log(frameCount);
    
    var coins=createSprite(1200,100,40,10);   
    coins.y=random(50,450);
    coins.addAnimation("rotate",coinImage);
    coins.scale=0.1;  
    coins.velocityX=-5;
    coins.lifetime=250;
     coinsGroup.add(coins);
    }

}
function enemyEntered(){
    if(frameCount%80==0){
        console.log(frameCount);
        var enemy=createSprite(200,520,40,10);
        enemy.y=random(1200,200);
        enemy.addAnimation("rotate",enemyImage);
        enemy.scale=0.1;
        enemy.velocityX=-5;
        enemy.lifetime=250;
        enemyGroup.add(enemy);
    }

}
