// ------------------------------------------------- //
// 21/01/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Introduction // I.4 A Normal/Gaussian Distribution of Random Numbers // Part a.
// http://natureofcode.com/book/introduction/
// ------------------------------------------------- //
function setup() {
  createCanvas(windowWidth, windowHeight);
  background('black');
}

function draw() {
  // Normal/Gaussian distribution
  var xloc = randomGaussian();
  // Standard deviation
  var sd = 150;
  var mean = width/2;
  // Scale by sd & mean
  // Distribution of values clustered around an average
  // -> Gaussian or Normal distribution
  xloc = (xloc * sd) + mean;
  fill('rgba(0,255,0, 0.25)');
  noStroke();
  ellipse(xloc,height/2,20,20);
}
