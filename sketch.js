const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var background;
var engine, world;
var umbrella;
var maxDrops = 100;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(200,375);
    
}

function draw(){
    
    background = background("black");
    Engine.update(engine);
    
    for(var i =0; i < maxDrops; i++){
        maxDrops.push(new Drop(random(0,400)));
    }

    umbrella.display();
    drop.display();
}   

