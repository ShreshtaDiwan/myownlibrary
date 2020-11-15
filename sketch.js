var stella,pen;

function setup() {
  createCanvas(800,400);
  stella = createSprite(400, 400, 50, 50);
  stella.shapeColor = "cyan";
  stella.velocityY = -3;
  pen = createSprite(400,0,30,30);
  pen.shapeColor = "pink" 
  pen.velocityY = 3
}


function draw() {
  background(0);  
  //stella.x = mouseX;
  //stella.y = mouseY;

  console.log(stella.x)
bounceoff(stella,pen)

  drawSprites();
}
