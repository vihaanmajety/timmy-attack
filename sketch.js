var missileImg,backgroundimg,spaceshipimg,ufoImg
var Ufo,Missilebase
var number
function preload(){
  missileImg=loadImage('Missile.png')
  backgroundimg=loadImage('Background.png')
  spaceshipimg=loadImage('walker.png')
  ufoImg=loadImage('Ufo enemy (1).png')
}


function setup(){
  
  createCanvas(windowWidth,windowHeight);
   Ufo=createSprite(width/2,height/2-300)
Ufo.addImage('ufo',ufoImg)
Ufo.scale=0.75
Missilebase=createSprite(width/2,height-150)
Missilebase.addImage('base',spaceshipimg)
Missilebase.scale=0.25
Ufo.velocityX=5
createEdgeSprites()

}

function draw() {
  background(0);
  image(backgroundimg,0,0,width,height)
  drawSprites()
  if(keyDown(RIGHT_ARROW)){
    Missilebase.x+=2
  }
  if(keyDown(LEFT_ARROW)){
    Missilebase.x-=2
  }
  if(Ufo.x>1000){
    Ufo.x=500
    Ufo.velocityX=-5
  }
  console.log(Ufo.x)
  if(Ufo.x>200){
    Ufo.velocityX=5
  }
}
