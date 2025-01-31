
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperObj;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject = new ground(width/2,670,width,20);
	dustbinObj = new dustbin(1200,650);
	paperObj = new paperClass(200, 1500, 40, 40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  keyPressed();
 

  groundObject.display();
  dustbinObj.display();
 paperObj.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		paper.velocityX=3;
		paper.velocityY=2;
	}
  
}