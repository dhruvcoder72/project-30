const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12;
var block13, block14, bloack15, block16, block17, block18, bloack19, block20, block21, block22, block23, block24;
var ground, base1, base2, slingshot, polygon;

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Base(500, 590, 1000, 20);
  base1 = new Base(390, 285, 270, 10);
  base2 = new Base(790, 205, 210, 10);

  //first layer
  block1 = new Block(300, 260, 30, 40);
  block2 = new Block(330, 260, 30, 40);
  block3 = new Block(360, 260, 30, 40);
  block4 = new Block(390, 260, 30, 40);
  block5 = new Block(420, 260, 30, 40);
  block6 = new Block(450, 260, 30, 40);
  block7 = new Block(480, 260, 30, 40);

  //second layer
  block8 = new Block(330, 220, 30, 40);
  block9 = new Block(360, 220, 30, 40);
  block10 = new Block(390, 220, 30, 40);
  block11 = new Block(420, 220, 30, 40);
  block12 = new Block(450, 220, 30, 40); 

  //third layer
  block13 = new Block(360, 180, 30, 40);
  block14 = new Block(390, 180, 30, 40);
  block15 = new Block(420, 180, 30, 40); 

  //top
  block16 = new Block(390, 140, 30, 40); 

  //second tower
  //first layer
  block17 = new Block(730, 180, 30, 40);
  block18 = new Block(760, 180, 30, 40);
  block19 = new Block(790, 180, 30, 40);
  block20 = new Block(820, 180, 30, 40);
  block21 = new Block(850, 180, 30, 40);

  //second layer
  block22 = new Block(760, 140, 30, 40);
  block23 = new Block(790, 140, 30, 40);
  block24 = new Block(820, 140, 30, 40);

  //top
  block25 =new Block(790, 100, 30, 40);

  polygon = new Polygon(70 ,100, 50, 50);
  slingshot = new Slingshot(polygon.body, {x:70, y:200});


}

function draw() {
  background("black");
  Engine.update(engine);

  ground.display();
  base1.display();
  base2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();

  block16.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();

  block25.display();

  polygon.display();
  slingshot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.throw();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(polygon.body);
  }
}