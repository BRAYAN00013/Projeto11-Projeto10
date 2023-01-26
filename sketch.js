var navio,navegando;
var sea;
function preload(){
  navegando=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(50,200,200,200);
  sea.addImage("mar",seaImg);
  navio=createSprite( 200,280 ,20 ,50);
  navio.addAnimation("barco",navegando);
  navio.scale*=0.15;
  sea.scale*=0.25
  sea.velocityX = 5 
  
}

function draw() {
  background("blue");
  if(sea.x > 400){
    sea.x = 100
  }
 
  drawSprites();

 
}
