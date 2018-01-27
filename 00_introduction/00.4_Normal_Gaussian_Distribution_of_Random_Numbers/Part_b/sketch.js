// ------------------------------------------------- //
// 22/01/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Introduction // I.4 Normal/Gaussian Distribution of Random Numbers // Part b.
// http://natureofcode.com/book/introduction/
// ------------------------------------------------- //
function setup() {
  createCanvas(windowWidth, windowHeight);
  background('black');
}

function draw() {
  // Normal/Gaussian distribution
  var xloc = randomGaussian();
  var yloc = randomGaussian();
  // Standard deviation
  var xsd = 100;
  var ysd = 90;
  // Mean
  var xMean = windowWidth/2;
  var yMean = windowHeight/2;
  // Scale by sd & mean
  // Distribution of values clustered around an average
  // -> Gaussian or Normal distribution
  xloc = (xloc * xsd) + xMean;
  yloc = (yloc * ysd) + yMean;
  var rColor = 250;
  fill(rColor, 50);
  noStroke();
  ellipse(xloc,yloc,5,5);
}
