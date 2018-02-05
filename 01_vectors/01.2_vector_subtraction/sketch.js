// ------------------------------------------------- //
// 05/02/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Vectors // 1.2 Vector Subtraction
// Displaying a magnitude from a resultant vector + translating it
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
  // N.B '.sub()'
  // w = u - v
  vectorLine = mouse.sub(centre);
  // Using vectors, one of them is always taken as being from @ (0,0)
  // i.e the magnitude is measured from the origin to the locations we stored in a given vector
  // So we need to move them so to be visible
  // Instead of moving both 'points' (vectors)
  // We move the whole window
  translate(width/2,height/2);
  strokeWeight(5);
  stroke(150,50,0);
  line(0,0,vectorLine.x,vectorLine.y);
}
