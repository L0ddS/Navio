var ship, shipImg1, shipImg2;
var sea, seaImg;
function preload(){
shipImg1=loadAnimation("ship-1.png","ship-2.png");
shipImg2=loadAnimation("ship-3.png","ship-4.png");
seaImg = loadImage("sea.png");

}

function setup(){
  createCanvas(1042,600);
  sea=createSprite(521,300,1042,600);
  sea.addImage(seaImg);
  sea.velocityX=-5;
  sea.scale = 0.5;
  ship=createSprite(200,300,50,50);
  ship.addAnimation("animacao1",shipImg1);
  ship.scale=0.3;
}

function draw() {
  background("lightblue");
  if(sea.x < 0){
    sea.x=sea.width/4;
    }

    drawSprites();
	
 
}
