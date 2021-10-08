var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var ball=createSprite(20,20,20,20);
ball.shapeColor="red";



var wall1 = createSprite(150,70,10,150);
var wall2 = createSprite(50,200,100,10);
var wall3 = createSprite(350,300,100,10);
var wall4 = createSprite(260,325,10,150);
var wall5 = createSprite(275,250,100,10);
var wall6 = createSprite(100,300,100,10);
var wall7 = createSprite(100,100,100,10);
var wall8 = createSprite(100,250,10,110);
var wall9 = createSprite(300,200,10,100);
var wall10 = createSprite(375,200,50,10);
var wall11 = createSprite(250,150,110,10);
var wall12 = createSprite(200,175,10,50);
var wall13 = createSprite(175,200,60,10);
var wall14 = createSprite(250,50,10,100);
var wall15 = createSprite(300,100,110,10);
var wall16 = createSprite(320,350,10,60);
var wall17 = createSprite(100,350,10,60);
var wall18 = createSprite(350,50,100,10);
var wall19 = createSprite(275,200,60,10);
var wall20 = createSprite(75,150,10,50);
var wall21 = createSprite(175,370,10,70);
var wall22 = createSprite(175,335,70,10);

wall1.shapeColor = "darkred";
wall2.shapeColor = "darkred";
wall3.shapeColor = "darkred";
wall4.shapeColor = "darkred";
wall5.shapeColor = "darkred";
wall6.shapeColor = "darkred";
wall7.shapeColor = "darkred";
wall8.shapeColor = "darkred";
wall9.shapeColor = "darkred";
wall10.shapeColor = "darkred";
wall11.shapeColor = "darkred";
wall12.shapeColor = "darkred";
wall13.shapeColor = "darkred";
wall14.shapeColor = "darkred";
wall15.shapeColor = "darkred";
wall16.shapeColor = "darkred";
wall17.shapeColor = "darkred";
wall18.shapeColor = "darkred";
wall19.shapeColor = "darkred";
wall20.shapeColor = "darkred";
wall21.shapeColor = "darkred";
wall22.shapeColor = "darkred";
var obstacle1 =createSprite(25,50,15,15);
var obstacle2 =createSprite(375,100,15,15);
var obstacle3 =createSprite(25,150,15,15);
var obstacle4 =createSprite(375,200,15,15);
var obstacle5 =createSprite(25,250,15,15);
var obstacle6 =createSprite(375,300,15,15);
var obstacle7 =createSprite(25,350,15,15);

obstacle1.shapeColor = "green";
obstacle2.shapeColor = "green";
obstacle3.shapeColor = "green";
obstacle4.shapeColor = "green";
obstacle5.shapeColor = "green";
obstacle6.shapeColor = "green";
obstacle7.shapeColor = "green";

obstacle1.velocityX = 8;
obstacle2.velocityX = -8;
obstacle3.velocityX = 8;
obstacle4.velocityX = -8;
obstacle5.velocityX = 8;
obstacle6.velocityX = -8;
obstacle7.velocityX = 8;

var target=createSprite(390,390,20,50);
target.shapeColor="yellow";


var Deaths= 0;

function draw() {
 background("pink");
 createEdgeSprites();
 //ball.collide(edges);
 drawSprites();
 obstacle1.bounceOff(edges);
 obstacle2.bounceOff(edges);
 obstacle3.bounceOff(edges);
 obstacle4.bounceOff(edges);
 obstacle5.bounceOff(edges);
 obstacle6.bounceOff(edges);
 obstacle7.bounceOff(edges);
 fill("black");
 textSize(20);
 text("Muertes: "+ Deaths,260,25 );
 
 if(ball.isTouching(wall1))
 {
   ball.x=20;
   ball.y=20;
   Deaths = Deaths+1;
  }
 
  if(ball.isTouching(wall2))
 {
   ball.x=20;
   ball.y=20;
   Deaths = Deaths+1;
  }
 
  if(ball.isTouching(wall3))
 {
   ball.x=20;
   ball.y=20;
   Deaths = Deaths+1;
  }
 
  if(ball.isTouching(wall4))
 {
   ball.x=20;
   ball.y=20;
   Deaths = Deaths+1;
  }
 
  if(ball.isTouching(wall5))
 {
   ball.x=20;
   ball.y=20;
   Deaths = Deaths+1;
  }
 
  if(ball.isTouching(wall6))
 {
   ball.x=20;
   ball.y=20;
   Deaths = Deaths+1;
  }
  
 if(ball.isTouching(wall7))
 {
   ball.x=20;
   ball.y=20;
   Deaths = Deaths+1;
  }
 if(ball.isTouching(wall8))
 {
   ball.x=20;
   ball.y=20;
   Deaths = Deaths+1;
  }
 if(ball.isTouching(wall9))
 {
   ball.x=20;
   ball.y=20;
   Deaths = Deaths+1;
  }
 if(ball.isTouching(wall10))
 {
   ball.x=20;
   ball.y=20;
   Deaths = Deaths+1;
  }
 if(ball.isTouching(wall11))
 {
   ball.x=20;
   ball.y=20;
   Deaths = Deaths+1;
  }
 if(ball.isTouching(wall12))
 {
   ball.x=20;
   ball.y=20;
   Deaths = Deaths+1;
  }
 if(ball.isTouching(wall13))
 {
   ball.x=20;
   ball.y=20;
   Deaths = Deaths+1;
  }
 if(ball.isTouching(wall14))
 {
   ball.x=20;
   ball.y=20;
   Deaths = Deaths+1;
  }
 if(ball.isTouching(wall15))
 {
   ball.x=20;
   ball.y=20;
   Deaths = Deaths+1;
  }
 if(ball.isTouching(wall16))
 {
   ball.x=20;
   ball.y=20;
   Deaths = Deaths+1;
  }
 if(ball.isTouching(wall17))
 {
   ball.x=20;
   ball.y=20;
   Deaths = Deaths+1;
  }
 if(ball.isTouching(wall18))
 {
   ball.x=20;
   ball.y=20;
   Deaths = Deaths+1;
  }
  if(ball.isTouching(wall19))
 {
   ball.x=20;
   ball.y=20;
   Deaths = Deaths+1;
  }
  if(ball.isTouching(wall20))
 {
   ball.x=20;
   ball.y=20;
   Deaths = Deaths+1;
  }
  if(ball.isTouching(wall21))
 {
   ball.x=20;
   ball.y=20;
   Deaths = Deaths+1;
  }
  if(ball.isTouching(wall22))
 {
   ball.x=20;
   ball.y=20;
   Deaths = Deaths+1;
  }
 
 if(ball.isTouching(obstacle1)|| ball.isTouching(obstacle2)|| ball.isTouching(obstacle3)||ball.isTouching(obstacle4)||ball.isTouching(obstacle5)||ball.isTouching(obstacle6)||ball.isTouching(obstacle7))
 {
   ball.x=20;
   ball.y=20;
   Deaths = Deaths+1;
   
  }
  
 if(keyDown("up")){
  ball.y=ball.y-5;
 }
 if(keyDown("down")){
  ball.y=ball.y+5;
 }
 if(keyDown("left")){
  ball.x=ball.x-5;
 }
 if(keyDown("right")){
  ball.x=ball.x+5;
 }
  
  if (ball.isTouching(target)){
  background("white");
  textSize(30);
  text("Lo Lograste",150,200);
  textSize(25);
  text("Presiona (EnTER) Para reintentar",10,300);
  if (keyDown("ENTER")){
    ball.x=20;
   ball.y=20;
   Deaths = 0;
  }
  }
}











// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
