
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var bar;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(200,600,75);
	bob2 = new Bob(285,600,75);
	bob3 = new Bob(370,600,75);
	bob4 = new Bob(455,600,75);
	bob5 = new Bob(540,600,75);

	bar = new Roof(375,200,500,40);

	rope1 = new Rope(bob1.body, bar.body, -100, 0);
	rope2 = new Rope(bob2.body, bar.body, -50, 0);
	rope3 = new Rope(bob3.body, bar.body, 0, 0);
	rope4 = new Rope(bob4.body, bar.body, +50, 0);
	rope5 = new Rope(bob5.body, bar.body, +100, 0);
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  bar.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display(); 
  keyPressed();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position, {x:130, y:0});
	}
	
	}