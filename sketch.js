
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);
	engine = Engine.create();
	world = engine.world;


	roof = new Roof(600,200,250,20);
	bobObject1 = new Bob(500,400);
	bobObject2 = new Bob(550,400);
	bobObject3 = new Bob(600,400);
	bobObject4 = new Bob(650,400);
	bobObject5 = new Bob(700,400);
	rope1 = new Rope(roof.body,bobObject1.body,-100);
	rope2 = new Rope(roof.body,bobObject2.body,-50);
	rope3 = new Rope(roof.body,bobObject3.body,0);
	rope4 = new Rope(roof.body,bobObject4.body,+50);
	rope5 = new Rope(roof.body,bobObject5.body,+100);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
 roof.display();
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}


function mouseDragged() {

		Matter.Body.setPosition(bobObject1.body,{x:mouseX,y:mouseY});
	
}



