var fixedRect, movingRect, ob1, ob2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ob1 = createSprite(200, 100, 50, 80);
  ob1.shapeColor = "green";
  ob1.debug = true;
  ob2 = createSprite(800, 100,80,30);
  ob2.shapeColor = "green";
  ob2.debug = true;

  ob1.velocityX = 5;
  ob2.velocityX = -5;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

 /** if (bounceOff()){
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  else{
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }**/


  bounceOff(ob1,ob2);
  drawSprites();
}

