
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1000, 500);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,500,width,20);
	dustbinObj=new dustbin(800,500);
    paper=new Paper(200,400,25)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);
  paper.display();
  groundObject.display();
  dustbinObj.display();

}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-145})
		
	}
}

