const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,ground1;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new box(200,200,50,50);
    box2 = new box(350,200,50,50);
    box3 = new box(150,200,50,50);

    ground1 = new ground(200,350,400,50);
  
   
}

function draw(){
    background("white");
    Engine.update(engine);
    
   box1.display();
   box2.display();
   box3.display();

   ground1.display();
  

    
}