const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var sandy, startupbox, engine, world, hanger, lava;
var youLose, youLose_png


function preload (){
  youLose_png = loadImage("animation/youLose.png")
}
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  sandy = new Bob (400, 200, 20);
  startupbox = new Ground(380, 250, 80, 10);
  startupbox.shapeColor = "red";
 hanger = new Ground(500, 150, 30, 30);
lava = createSprite(700, 400, 3000, 100);
lava.shapeColor = "orange";
}

function draw() {
  Engine.update(engine);
  background("black");  
  sandy.display();
  startupbox.display();
  hanger.display();
 // constrainta.display();
 

    drawSprites();
}



