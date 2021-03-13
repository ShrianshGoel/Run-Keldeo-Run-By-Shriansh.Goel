var keldeo, kel1, kel2;
var play = 0;
var forest, forest1;
var score;
var l, l1;
var jump;
var invisibleGround;
var stone, stone1, load, j1;

var score=0

function preload(){
  forest1 = loadImage("445635e83a83f66.gif")
  j1 = loadImage("1200px-646Kyurem.webp");
  jump = loadSound("keldeo voice sample.mp3");
  stone1 = loadImage("clipart961968.png");
  l1 = loadImage("—Pngtree—game over pixel and skull_5309256.png");
  load = loadImage("kissclipart-pokemon-loudred-clipart-loudred-whismur-exploud-d5311e249005df15.png ");
  kel1 = loadAnimation("d8mhi0s-d5d0d259-0ac2-457c-b326-39f704185090.gif")
   kel2 = loadAnimation("217-2175617_647-keldeo-by-inflationdex-d8flh2i-cartoon.png");
}

function obs(){
  if (frameCount%120===0){
  var ston = createSprite(width,height-50,60,60);
 ston.velocityX = -4 -score/50;
 
    ston.lifetime = width/3;
  
    

  
    
    var rand = Math.round(random(1,2));
    switch(rand) {
        
      case 1: ston.addImage(stone1);
        ston.scale = 0.09;
        
          ston.setCollider("circle",0,0,450)
              break;
      case 2: ston.addImage(load);
              ston.scale = 0.13;
          ston.setCollider("circle",0,0,350)
        break;
    }
    stone.add(ston);
}
}




function obs2(){
  if (frameCount%320===1){
  var h = createSprite(width,height/2.32,60,60);
  h.velocityX = -22;
    h.lifetime = 95;
  h.addImage("g",j1);
    h.scale = 0.09;
    
    stone.add(h);
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  forest = createSprite(width/2,height/2,width,height);
  forest.addImage("e",forest1);
 forest.scale = height/257 ;
  
 stone = new Group();
  
  l = createSprite(width/2,height/2,20,20);
  l.addImage("g",l1);
  l.scale  = 0.07;
  l.visible = false;
  
  keldeo = createSprite(55,height-20,20,20);
  keldeo.addAnimation("k",kel1);
 keldeo.addAnimation("kg",kel2);
  keldeo.scale = 0.12;
  keldeo.setCollider("circle",0,0,400)
  
  
  invisibleGround = createSprite(width,height-5,width + width,10)
  invisibleGround.visible = false;
  
   
  score = 0;
}

function draw() {
  background(0);
  

  
    if (stone.isTouching(keldeo)){
      play=1;
      h=0;
      stone.destroyEach();
      keldeo.velocityY = 0;
      keldeo.visible = false;
      keldeo.x = width/1.34;
      keldeo.scale = 0.56;
      }
  
    
  
  if (play===0){
       if (keyDown("space") && keldeo.y>=height-90 || touches.length>0 && keldeo.y>=height-90){
     keldeo.velocityY = -17;
        jump.play();
          touches = [];
     }

 
    
      score = Math.floor(frameCount/5) ;
     if (keyDown("down")){
     keldeo.velocityY = 17
     }

  
  obs()
  obs2()
    
  keldeo.velocityY = keldeo.velocityY + 0.59;
   drawSprites();
  keldeo.collide(invisibleGround);
      }
  if (play===1){
    l.visible = true;
    keldeo.collide(invisibleGround)
     drawSprites();
    if (mousePressedOver(l) || touches.length>0){
        play=0;
       keldeo.changeAnimation("k",kel1);
      keldeo.scale = 0.12;
      keldeo.x = 55;
          keldeo.visible = true;
      score=0;
      l.visible = false;
      touches = []; 
      score=0;
      frameCount = 0;
        }
    textSize(22)
    text("touch Game over to restart",width/2,height/1.20);
    
      }
  
  
 
     text("Score: "+ score, 300,50);
}
