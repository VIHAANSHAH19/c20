function setup() {
  createCanvas(800,400);
  sprite1 = createSprite(200, 200, 50, 50);
  sprite2 = createSprite(400, 200, 50, 50);
  sprite1.velocityX=5;
  sprite2.velocityX=-5;
  sprite1.shapeColor="blue"
  sprite2.shapeColor="red"
}

function draw() {
  background(0);
  if(sprite1.x-sprite2.x<=sprite1.width/2+sprite2.width/2&&
    sprite2.x-sprite1.x<=sprite1.width/2+sprite2.width/2
    ){
      sprite1.velocityX=sprite1.velocityX*-1
      sprite2.velocityX= sprite2.velocityX*-1
    }  
  drawSprites();
}
