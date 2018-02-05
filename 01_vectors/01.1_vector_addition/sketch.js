// ------------------------------------------------- //
// 05/02/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Vectors // 1.1 Vector Addition
// Introducing our first built-in vector function '.add()'
// http://natureofcode.com/book/chapter-1-vectors/
// ------------------------------------------------- //
// Declaring our vectors
var location;
var velocity;

function setup() {
  createCanvas(windowWidth,windowHeight);
  // Defining vectors
  location = createVector(100,100);
  velocity = createVector(5,5);
}

function draw() {
  // Ellipse fade effect, same as before
  fill(0,15);
  rect(0,0,width,height);
  // N.B first of our built-in functions we can call on vectors
  // '.add()' returns a resultant vector, the sum of two
  // Denote vectors w/ arrow above letters
  // u(5,3) + v(3,4) = w(8,7)
  // w = u + v
  location.add(velocity);
  // Check boundaries
  if ((location.x > width) || (location.x < 0)) {
    velocity.x = velocity.x * -1;
  }
  if ((location.y > height) || (location.y < 0)) {
    velocity.y = velocity.y * -1;
  }
  // Draw ellipse w/ changing location values
  noStroke();
  fill(0,200,200);
  ellipse(location.x,location.y,50,50);
}
