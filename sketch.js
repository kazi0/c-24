
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var bottom
var left
var right


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bottom=createSprite(400,650,200,20);
	bottom.shapeColor=color("red")
	 
	left=createSprite(300,620,20,100)
	left.shapeColor=color("red")

	right=createSprite(500,620,20,100)
	right.shapeColor=color("red")

	ground = new Ground(600,height,1200,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



