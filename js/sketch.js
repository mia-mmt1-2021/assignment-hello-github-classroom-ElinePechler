function setup() {
  // put setup code here
  createCanvas(500,500);
  background (255,0,0);
  stroke(0,150,0);
  strokeWeight(5);
  fill ("#FF234D");
  ellipse(75,50,100,100);
  fill (255,141,224,120);
  rect(100,0,100,100);
  rect(0,100,100,100);
  fill (0,0,100);
  ellipse(150,150,100,100);
  line(0,0,500,500);
  strokeWeight(3);
  line(0,500,500,0);
  point(50,50);
}

function draw() {
  background(mouseY,0,0);
  stroke("yellow");
  strokeWeight(10);
  point(250,100);
  // put drawing code here
  fill("white");
  noStroke();
  ellipse(mouseX,mouseY,25,25)
  text("jo",mouseY,random(200,400));


}