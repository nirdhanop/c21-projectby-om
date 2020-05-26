var thickness,wall;
var bullet,speed,weight

function setup() {
  createCanvas(1600,400);
  
thickness = random(22,83);  
speed = random(223,320);
weight = random(30,50);
bullet = createSprite(50,200,20,40);
wall = createSprite(1200,200,thickness,200);
wall.shapeColor = ("80,80,80,80");
damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
}

function draw() {
  background(0,0,255);  
  drawSprites();
  bullet.velocityX = speed;



  if(bullet.isTouching(wall) && damage < 80){
   bullet.velocityX = 0;
    wall.shapeColor = "green";

  }
  
  
  if(bullet.isTouching(wall) && damage > 80){
    bullet.velocityX = 0;
    wall.shapeColor = "red";
  }


}