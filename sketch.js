const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var platform1, platform2;

var log1,log2,log3,log4,log5;
var log6,log7,log8,log9,log10;
var log11,log12,log13,log14,log15;
var log16,log17,log18,log19,log20;

var standingLog1,standingLog2;

function preload(){
  img = loadImage("forest.jpeg");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  // Creating Platforms
  platform1 = new Platform(125,350,250,150);
  platform2 = new Platform(675,350,250,150);

  // Creating The Logs
  log1 = new Log(250,250,10);
  log2 = new Log(270,250,10);
  log3 = new Log(290,250,10);
  log4 = new Log(310,250,10);
  log5 = new Log(330,250,10);

  log6 = new Log(350,250,10);
  log7 = new Log(370,250,10);
  log8 = new Log(390,250,10);
  log9 = new Log(410,250,10);
  log10 = new Log(430,250,10);

  log11 = new Log(450,250,10);
  log12 = new Log(470,250,10);
  log13 = new Log(490,250,10);
  log14 = new Log(510,250,10);
  
  // Creating Chains
  chain1 = new Chain(log1.body,log2.body);
  chain2 = new Chain(log3.body,log2.body);

  chain3 = new Chain(log4.body,log3.body);
  chain4 = new Chain(log5.body,log4.body);
  chain5 = new Chain(log6.body,log5.body);

  chain6 = new Chain(log7.body,log6.body);
  chain7 = new Chain(log8.body,log7.body);
  chain8 = new Chain(log9.body,log8.body);

  chain9 = new Chain(log10.body,log9.body);
  chain10 = new Chain(log11.body,log10.body);
  chain11 = new Chain(log12.body,log11.body);

  chain12 = new Chain(log13.body,log12.body);
  chain13 = new Chain(log14.body,log13.body);
  
  // Creating Ropes
  rope1 = new Rope(log1.body,{x:250,y:275});
  rope2 = new Rope(log14.body,{x:550,y:275});

  standingLog1 = new StandingLog(240,250);
  standingLog2 = new StandingLog(560,250);

  monkey = new Monkey(400,200);
}

function draw() {
  background(img);
  // image(img,400,200,800,400); 
  Engine.update(engine);

  displayPlatforms();
  displayLogs();
  displayChains();
  displayRopes();

  standingLog1.display();
  standingLog2.display();

  monkey.display();
}

function displayLogs(){
  // Displaying Logs
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  log5.display();

  log6.display();
  log7.display();
  log8.display();
  log9.display();
  log10.display();

  log11.display();
  log12.display();
  log13.display();
  log14.display();
}

function displayChains(){
  // Displaying Chains
  chain1.display();
  chain2.display();

  chain3.display();
  chain4.display();
  chain5.display();

  chain6.display();
  chain7.display();
  chain8.display();

  chain9.display();
  chain10.display();
  chain11.display();

  chain12.display();
  chain13.display();
}

function displayPlatforms(){
  platform1.display();
  platform2.display();
}

function displayRopes(){
  // Displaying Ropes
  rope1.display();
  rope2.display();
}