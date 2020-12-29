const Engine = Matter.Engine ;
const World = Matter.World ;
const Bodies = Matter.Bodies ;
var engine , world , ground , ball;

function setup() {
  createCanvas(400,400);

 engine = Engine.create();
 world = engine.world;

 var ground_options = {
   isStatic:true
 }

 var ball_options = {
   restitution:0.8
 }

 ground = Bodies.rectangle(200,390,200,20,ground_options);  
 World.add(world,ground);

ball = Bodies.circle(200,100,20,ball_options);
World.add(world,ball);

 console.log(ground.position.y)
}

function draw() {
  background(0);  
 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,200,20);

  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20,20)
}