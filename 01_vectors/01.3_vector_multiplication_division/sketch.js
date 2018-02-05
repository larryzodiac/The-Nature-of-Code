// ------------------------------------------------- //
// 05/02/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Vectors // 1.3 Vector Multiplication & Division
// Displaying a magnitude from a resultant vector + translating it
// Using multiplication or division
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
  // When speaking of multiplying vectors, we think of scaling vectors
  // When we multiply, we do so by a 'scaler', a single number, not a vector
  // w = u * n
  // Below we multiply by 0.5
  // This eqivalent to division -> multiply by a fraction
  // The vectorLine is now half it's size
  vectorLine.mult(0.5);
  // Same as:
  // vectorLine.div(2);
  translate(width/2,height/2);
  strokeWeight(5);
  stroke(100,0,200);
  line(0,0,vectorLine.x,vectorLine.y);
}
