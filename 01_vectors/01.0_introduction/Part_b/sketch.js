// ------------------------------------------------- //
// 05/02/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Vectors // 1.0 Intro // Part b.
// Simple moving ellipse using 'createVector' function
// http://natureofcode.com/book/chapter-1-vectors/
// ------------------------------------------------- //
// We have location vectors -> describe position
// Plus, velocity vectors -> describe where we want to go
// Declaring our vectors
var position;
var velocity;

function setup() {
  createCanvas(windowWidth,windowHeight);
  // Defining our vectors
  // 'createVector()' is built-in function that creates new vector storage
  // We're only using two dimensions for the moment -> createVector([x],[y],[z])
  // We use createVector to simplify our code
  // Also provides a set of functions we can call on these vectors for common mathematical operations
  // https://p5js.org/reference/#/p5/createVector
  // A vector is an entity that has both magnitude and direction.
  position = createVector(100,100);
  velocity = createVector(5,5);
}

function draw() {
  // Ellipse fade effect, same as before
  fill(0,15);
  rect(0,0,width,height);
  // If something is moving, it changes location
  // Speed relates to location
  position.x = position.x + velocity.x;
  position.y = position.y + velocity.y;
  // Check boundaries
  if ((position.x > width) || (position.x < 0)) {
    velocity.x = velocity.x * -1;
  }
  if ((position.y > height) || (position.y < 0)) {
    velocity.y = velocity.y * -1;
  }
  // Draw ellipse w/ changing location values
  noStroke();
  fill(0,200,200);
  ellipse(position.x,position.y,50,50);
}
