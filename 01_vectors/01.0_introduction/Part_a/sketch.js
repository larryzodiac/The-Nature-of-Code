// ------------------------------------------------- //
// 05/02/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Vectors // 1.0 Intro // Part a.
// Simple moving ellipse demonstration
// http://natureofcode.com/book/chapter-1-vectors/
// ------------------------------------------------- //
// We have location vectors -> describe position
// Plus, velocity vectors -> describe where we want to go
// These demonstrate our values needed fpr vector work
var x = 100;
var y = 100;
var xspeed = 10;
var yspeed = 2;

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  // Ellipse fade effect, same as before
  fill(0,15);
  rect(0,0,width,height);
  // If something is moving, it changes location
  // Speed relates to location
  x = x + xspeed;
  y = y + yspeed;
  // Check boundaries
  if ((x > width) || (x < 0)) {
    xspeed = xspeed * -1;
  }
  if ((y > height) || (y < 0)) {
    yspeed = yspeed * -1;
  }
  // Draw ellipse w/ changing location values
  noStroke();
  fill(0,0,200);
  ellipse(x,y,50,50);
}
