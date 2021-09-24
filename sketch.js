var bg, b;
var boy , boyrunning ,boystanding
var obstacles,ob1image, ob2image, ob3image , ob4image 
var ground;



function preload()
{
 bg = loadImage("bg8.png");
 ob1image = loadImage("ob1.png")

 ob2image = loadImage("ob2.png")

 //ob3image = loadImage("ob3.png")

 //ob4image = loadImage("ob4.png")

boystanding = loadAnimation("run7.png")

 boyrunning = loadAnimation("run1.png", "run2.png" ,"run3.png" , "run5.png" , "run6.png" , "run7.png", "run8.png" )
}
function setup()
{
  createCanvas(windowWidth,windowHeight);
  
  b = createSprite(windowWidth/2, windowHeight/2)
  b.addImage(bg)
  b.scale = 1.2;
 
b.velocityX = -3

boy = createSprite(100,windowHeight - 100)
boy.debug = true
boy.addAnimation("running", boyrunning)
boy.addAnimation("standing", boystanding)
ground = createSprite(100,windowHeight - 10, 400, 10);
ground.visible = false;

obstacles = new Group();
}
function draw()
{

  background(0)
  //console.log(b.x)
   if(keyDown("space")&& boy.y > windowHeight - 300){

    boy.velocityY = -10

   }
    
boy.velocityY = boy.velocityY + 0.5

  if(b.x < 0 ){

  b.x  = windowWidth

  }


  
  if(boy.isTouching(obstacles)){
    console.log("hi")
     boy.changeAnimation("standing" , boystanding)
    obstacles.setVelocityXEach(0)
    obstacles.destroyEach()
    b.velocityX  = 0;
  }
  boy.collide(ground)


  spawnobstacles();
  
  drawSprites();
}


function spawnobstacles(){

if(frameCount%100 === 0 ){

 var ob = createSprite(windowWidth, windowHeight - 40 , 50,50)
 ob.debug = true
 ob.velocityX = -5
 //ob.scale = 0.9
 var r = Math.round(random(1,4))
 switch(r){
case 1 : ob.addImage(ob1image);
ob.scale = 1.1
break

case 2 : ob.addImage(ob2image);
ob.scale = 0.9
break

case 3 : ob.addImage(ob3image);
ob.scale = 0.9
break

case 4 : ob.addImage(ob4image);
ob.scale = 0.9
break

  

 }

 obstacles.add(ob)
}


}