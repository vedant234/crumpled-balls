const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var dustbinObj, paperObject, groundObject;	
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	launcherObject = new launcher(paperObject.body, {x:500,y:300});
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("grey");
 
 // call function to display objects
 dustbinObj.display();
 paperObject.display();
 groundObject.display();
 launcherObject.display();
}

function mouseDragged(){
    Matter.Body.setPosition(paperObject.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    // call function fly() given in launcher class file
	launcherObject.fly()
}





