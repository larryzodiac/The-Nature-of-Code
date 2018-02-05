// ------------------------------------------------- //
// 05/02/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Vectors // 1.4 Vector Magnitude
// Capturing the magnitude of a vector
// http://natureofcode.com/book/chapter-1-vectors/
// ------------------------------------------------- //
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(0);
  noStroke();
  fill(0,15);
  rect(0,0,width,height);
  // Capture mouse co-ordinates + centre of window as vectors
  var mouse = createVector(mouseX, mouseY);
  var centre = createVector(width/2,height/2);
  // 'vectorLine' is our resultant
  var vectorLine = mouse.sub(centre);
  // Returns the magnitude (length) of a vector from (0,0) to (a,b)
  // https://p5js.org/reference/#/p5/mag
  var m = vectorLine.mag();
  // Here we define a 'measuring tape' to track the magnitude
  fill(255);
  stroke(0);
  rect(0,0,m,10);
  // Translate window as before
  translate(width/2,height/2);
  strokeWeight(5);
  stroke(200,50,100);
  line(0,0,vectorLine.x,vectorLine.y);
}
