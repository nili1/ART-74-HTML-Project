var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState= "L1";

var img;  // declares an image variable
var img2;
var img3;
function preload() {
// preload() runs once, it may make you wait
  img = loadImage('https://nili1.github.io/gameinteraction3dart/crosshairs.png');
  img2 = loadImage('https://nili1.github.io/gameinteraction3dart/cod.jpg');
  img3 = loadImage('https://nili1.github.io/gameinteraction3dart/cod2.jpg')
  img4 = loadImage('https://nili1.github.io/gameinteraction3dart/cod3.jpg')
  img5 = loadImage('https://nili1.github.io/gameinteraction3dart/cod4.jpg')
}
function setup() {
  createCanvas(960, 540);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
  background(220);
  image(img2, 0, 0, 960, 540);
  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo();
  }
  if (gameState=="L3"){
   levelThree(); 
  }
  if (gameState=="L4"){
   levelFour(); 
  }
  
  text(("Objective: Hit the Targets! Score: " + score), width/2, 40);
  

} // end draw


function levelOne(){
  text("Mission 1", width/2, height = 20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>5){
// call level 2
 // fill(random(255));
 gameState= "L2";
  }
  
  //ellipse(ballx, bally, ballSize, ballSize);
image(img, ballx, bally, ballSize, ballSize);
} // end level one

function levelTwo(){
  background(200, 100, 0);
  image(img4, 0, 0, 960, 540);
  text("Mission 2", width/2, height = 20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>10){
// lvel 3
   gameState = "L3";

  }
  
//  line(ballx, bally, mouseX, mouseY);
  image(img, ballx, bally, ballSize, ballSize);
} // end level two

function levelThree(){
    background(200, 100, 2000);
  image(img5, 0, 0, 960, 540);
  text("Final Mission", width/2, height = 20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>14){
// level 4
//   gameState = "L4";
   gameState = "L4"

  }
  
//  line(ballx, bally, mouseX, mouseY);
  image(img, ballx, bally, ballSize, ballSize);
} // end level thre

function levelFour(){
    background(200, 100, 2000);
  image(img3, 0, 0, 960, 540);
  text("Game Over", width/2, height = 20);
  text("Objective Complete!", width/2, height = 65);
  }
