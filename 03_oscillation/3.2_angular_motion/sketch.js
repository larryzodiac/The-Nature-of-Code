// ------------------------------------------------- //
// 06/04/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Oscillation // Introduction to Angles w/ Motion
// http://natureofcode.com/book/chapter-3-oscillation/
// ------------------------------------------------- //
var angle = 0;
var aVelocity = 0;
var aAcceleration = 0.001;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
}

function draw() {
  background(0);

  fill('violet');
  // Draws from centre of shapes
  rectMode(CENTER);
  translate(width/2,height/2);
  // Rotates shapes by param
  rotate(angle);
  stroke('violet');
  line(-150,0,150,0);
  noStroke();
  ellipse(150,0,50,50);
  ellipse(-150,0,50,50);
  // Introduction of new formula
  aVelocity += aAcceleration;
  angle += aVelocity;
}
