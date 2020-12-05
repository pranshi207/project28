
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.constraint;


var dground,tree,treeimg;
var boy,boyimg;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;

function preload()
{
	treeimg=loadImage("tree.png");
	boyimg=loadImage("boy.png");
	
}

function setup() {
	createCanvas(1000, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dground=new Ground();
	Stone=new Stone(100,460,23);
	mango1=new Mango(600,290,34);
	mango2=new Mango(855,325,35);
	mango3=new Mango(670,260,35);
	mango4=new Mango(730,200,35);
	mango5=new Mango(710,320,36);
	mango6=new Mango(780,250,35);
	mango7=new Mango(825,170,33);
	mango10=new Mango(880,260,35);
	mango1=new Mango(940,220,35);
	mango1=new Mango(980,305,35);

	attach=new Throw(stones.body,{x:100,y:465});


	tree=createSprite(775,368);
	tree.addImag(treeimg);
	tree.scale=0.42;


	boy=createSprite(160,550);
	boy.addImage(boyimg);
	boy.scale=0.125;



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");


  fill("black");
  textSie(18);
  text("- pressspacebar foe more chances-",50,50);
  
  
  deleteCollision(stone,mango1);
  deleteCollision(stone,mango2);
  deleteCollision(stone,mango3);
  deleteCollision(stone,mango4);
  deleteCollision(stone,mango5);
  deleteCollision(stone,mango6);
  deleteCollision(stone,mango7);
  deleteCollision(stone,mango8);
  deleteCollision(stone,mango9);
  deleteCollision(stone,mango10);
  
  drawSprites();

  stone.display();
  dground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango5.display();
  mango4.display();
  mango6.display();
  mango4.display();
  mango8.display();
  mango9.display();
  mango10.display();
}

function mouseDragged(){
	matter.Body.setPosition(sone.body,{x:mouseX,mouse:mouseY});

}

function mouseReleased(){
	attacg.fly();
}

function deleteCollision(lstones,lmango){
	if(lstones.body.position.x-lmango.body.position.x<lmango.diametre+lstones.diametre
		&& lmango.body.position.x-lstones.body.position.x<lmango.diametre+lstone.siametre
		&& lstone.body.position.y-lmango.body.position.y<lmango.diametre+lstone.diametre
		&& lmango.body.position.y-lstone.body.position.y<lmango.diametre+lstone.diametre){
			Matter.Body.setStatic(lmango.body,false);
		}

		function keyPressed(){
       if(keyCode===32){
		   Matter.Body.setPosition(stonnes.body,{x:100,y:465});
		   attach.launch(stones.body);
	   }
		}
}




