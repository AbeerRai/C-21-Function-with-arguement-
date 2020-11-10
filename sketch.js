var fixedRect, movingRect;
var gameobject1,gameobject2,gameobject3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameobject1 = createSprite(500,300,40,40);
  gameobject2 = createSprite(700,500,60,60);
  gameobject3 = createSprite(600,100,30,50);

}

function draw() {
  background("black");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(gameobject1,movingRect)){
    gameobject1.shapeColor="red";
    movingRect.shapeColor="red";
  } else {
    gameobject1.shapeColor="green";
    movingRect.shapeColor="green";
  }

  drawSprites();
}