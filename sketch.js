
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);
  ground1 = new Ground (600,680,1200,20)
  dustbin1 = new Ground (900,670,200,20)
  dustbin2 = new Ground (800,640,20,100)
  dustbin3 = new Ground (1000,640,20,100)


paper = new Ball (100,100,50,50)

}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display()
  fill ("red")
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  paper.display()

  drawSprites();
 
}



function keyPressed(){
	Matter. Body . applyForce(paper.body, paper.body.position, {x:105, y:-85})
}