const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var eng,world,ground,ball
function setup() {
  createCanvas(400,400);
  eng=Engine.create()
  world=eng.world
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,400,20,options)
  World.add(world,ground)
  var ball_options={
    restitution:1
  }
 ball=Bodies.circle(200,100,20,ball_options)
  World.add(world,ball)

}

function draw() {
  background(0);
  Engine.update(eng)
  rectMode(CENTER)  
  rect(ground.position.x,ground.position.y,400,20)
  ellipseMode(RADIUS)
  fill("red")
  ellipse(ball.position.x,ball.position.y,20,20)

}