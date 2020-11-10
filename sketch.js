var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 200, 80, 50);
  movingRect.shapeColor = "green";
  gm1 = createSprite(100,100,50,50);
  gm1.shapeColor = "green";
  gm2 = createSprite(200,100,50,50);
  gm2.shapeColor = "green";
  gm3 = createSprite(300,100,50,50);
  gm3.shapeColor = "green";
  gm4 = createSprite(400,100,50,50);
  gm4.shapeColor = "green";
  gm4.velocityY = 2;
}

function draw() {
  background(0,0,0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  console.log(movingRect.x,fixedRect.x);
if(istouching(movingRect,gm3)){
  gm3.shapeColor = "blue";
  movingRect.shapeColor = "blue";
}
else{
  gm3.shapeColor = "green";
  movingRect.shapeColor = "green";
}

bounceoff (gm4,movingRect);
  drawSprites();
}



