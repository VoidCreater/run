
var frontground , frontgroundImg, temple, templeImg
function preload() {
  templeImg = loadImage("./images/temple.png");
  frontgroundImg = loadImage("./images/background.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  //creating the background
  frontground = createSprite(width/2, height/2, width, height);
  frontground.addImage(frontgroundImg);
  //creating the temple
  temple = createSprite(200, height- 200);
  temple.addImage(templeImg);
  
  frontground.scale = 2.5;


}

function draw() {

  background(255,255,255);  
  if(frontground.x< 0){
    frontground.x = width/2;
  }
  if(keyDown("space")){
    frontground.velocityX = -3;
    temple.visible = false;
  }
  drawSprites();

}