// ------------------------------------------------- //
// 07/04/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Oscillation // Polar Co-ordinates
// http://natureofcode.com/book/chapter-3-oscillation/
// ------------------------------------------------- //
var radius = 5;
var angle = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
}

// ------------------------------------------------- //
function draw() {
  // Convert fromcartesian to polar
  var x = radius * cos(angle);
  var y = radius * sin(angle);
  noStroke();
  fill(255,100);
  ellipse(x+width/2, y+height/2, 16, 16);
  // Spiral
  angle += 0.03;
  radius += 0.1;
}
