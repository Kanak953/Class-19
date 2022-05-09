var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  ghost = createSprite(300,300);
  ghost.addImage("ghost",ghostImg);
  ghost.scale = 0.30
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }

   if(keyDown("left_arrow")){
     ghost.x = ghost.x -3

   }
   
   if(keyDown("right_arrow")){
     ghost.x = ghost.x +3
   }
   
   if(keyDown("up_arrow")){
     ghost.velocityY = -3
   }


   ghost.velocityY = ghost.velocityY +0.5

    spawnDoor();
    drawSprites();


}

function spawnDoor() {
if(frameCount % 240 === 0) {


  var door = createSprite(200,0)
  door.addImage("door",doorImg);
  door.x = Math.round(random(120,400))

  var climber = createSprite(200,50);
  climber.addImage("climber",climberImg)
  climber.x= door.x

  door.velocityY=1;
  climber.velocityY=1;

}

}