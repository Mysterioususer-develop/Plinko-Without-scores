const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var radius=this.radius;
var width=this.width;
var particles = [];
var plinko = [];

function setup() {
  createCanvas(540,800);
  engine = Engine.create();
  world = engine.world;

  for (var i= 30; i<=width;i=i+50){
    plinko.push(new Plinko(i,75,15));
  }
  for (var k= 60; k<=width;k=k+50){
    plinko.push(new Plinko(k,135,15));
  }
  for (var l=30;l<=width;l=l+50){
    plinko.push(new Plinko(l,195,15));
  }
  for (var m=60;m<=width;m=m+50){
    plinko.push(new Plinko(m,255,15));
  }
  for (var n=30;n<=width;n=n+50){
    plinko.push(new Plinko(n,315,15));
  }


  ground = new Ground(240,790,800,20);

  division1 = new Division(0,600,30,400);
  division2 = new Division(90,600,20,400);
  division3 = new Division(180,600,20,400);
  division4 = new Division(270,600,20,400);
  division5 = new Division(360,600,20,400);
  division6 = new Division(450,600,20,400);
  division7 = new Division(540,600,30,400);
  
}

function draw() {
  background(0,0,0);  
  
  Engine.update(engine);
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  
  for (var j=0; j<plinko.length;j++){
    plinko[j].display();
  }
if (frameCount%60===0){
  particles.push(new Particle(random(width/2-15,width/2+15),10,10))
}
  for (var o=0;o<particles.length;o++){
    particles[o].display();
  }
}