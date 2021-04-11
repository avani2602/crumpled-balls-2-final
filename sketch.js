const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bgImg;
var ball;
var wall1, wall2, wall3;
var ground;
var dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	bgImg = loadImage("bg.png");

	ground = new Ground(800,670,1600,20);


	//wall1 = new Wall(900,630,500,20);
	//wall2 = new Wall(640,515,20,250);
	//wall3 =  new Wall(1160,515,20,250);
	ball = new Ball(200,450,60,60);
	dustbin = new Dustbin(1200, 550, 20,20);

			  
	Engine.run(engine);
  
}


function draw() {

  background("lightblue");
  Engine.update(engine);

 
  //wall1.display();
 // wall2.display();
  //wall3.display();
  ball.display();
  ground.display();
  dustbin.display();

  

}



function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:750, y:-900})
}
}