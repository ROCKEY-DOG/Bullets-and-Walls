var wall,thickness;

var bullet,speed,weight;

var damage;


function setup() {
  createCanvas(1600,400);
 

  speed=random(223,321);
  weight=random(30,52);

  thckness=random(22,83);

  bullet=createSprite(50,200,50,5);
  bullet.velocityX=speed;
  bullet.shapeColor=color(255);
  
  wall=createSprite(1500,200,thickness,height/2);

  wall.shapeColor=color(80,80,80);
}

function draw() {
  background("black");  
  drawSprite();


  wall.display();
  bullet.display();

  if(wall.x-bullet.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var damage=0.5*bulletWeight*bulletSpeed*bullet/thickness*thickness*thickness;
   }
   if(damage>3.68){
     wall.shapeColor=color("green");
   }
   if(damage<5.4 && damage>12.43){
     wall.shapeColor=color("red");
   }
   if(damage<100){
     wall.shapeColor=color(0,255,0);
   }
  }



 
















