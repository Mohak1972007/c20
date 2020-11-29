var mr,fr;




function setup() {
  createCanvas(800,400);
  mr=createSprite(400, 200, 80, 30);
  fr=createSprite(200, 200, 50, 80);
mr.shapeColor="yellow"
fr.shapeColor="yellow"


}

function draw() {
  background(255,255,255);  
mr.x=World.mouseX
mr.y=World.mouseY
if(mr.x-fr.x<mr.width/2+fr.width/2
  && fr.x-mr.x<mr.width/2+fr.width/2
  && mr.y-fr.y<mr.height/2+fr.height/2
  && fr.y-mr.y<mr.height/2+fr.height/2)

  {
    mr.shapeColor="green"
    fr.shapeColor="green" 
  }
else{
  mr.shapeColor="yellow"
fr.shapeColor="yellow"
}

  drawSprites();
}