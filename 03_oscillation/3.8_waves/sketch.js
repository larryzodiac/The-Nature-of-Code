// ------------------------------------------------- //
// 07/04/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Oscillation // Oscillation and Angular Velocity
// http://natureofcode.com/book/chapter-3-oscillation/
// ------------------------------------------------- //
var aVelocity = 0.1;
var startAngle = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
}

// ------------------------------------------------- //
function draw() {
  noStroke();
  fill(0,150);
  rect(0,0,windowWidth,windowHeight);
  // Variable dedicated to tracking value of angle
  // the wave should start with
  var angle = startAngle;

  fill(169, 209, 139, 150);
  for (var i = 0; i <= windowWidth; i += 24) {
    // Calculate y according to amplitude + sine of angle
    var y = map(sin(angle),-1,1,0,windowHeight/2);
    ellipse(i,y+windowHeight/4,50,50);
    // Increment angle according to 'aVelocity'
    angle += aVelocity;
  }
  // Increments w/ own velocity
  startAngle += 0.02;
}
