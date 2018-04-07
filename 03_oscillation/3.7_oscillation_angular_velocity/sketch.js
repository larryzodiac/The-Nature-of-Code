// ------------------------------------------------- //
// 07/04/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Oscillation // Oscillation and Angular Velocity
// http://natureofcode.com/book/chapter-3-oscillation/
// ------------------------------------------------- //
var Mover = function() {
  // Characteristics
  this.aVelocity = createVector(random(-0.05,0.05),random(-0.05,0.05));
  this.angle = createVector();
  this.amplitude = createVector(random(width/2),random(height/2))
  // functionality/behaviours
  this.update = function() {
    this.angle.add(this.aVelocity);
  }
  this.display = function() {
    // Oscillation on x + y axes this time
    var x = this.amplitude.x * sin(this.angle.x);
    var y = this.amplitude.y * sin(this.angle.y);

    stroke(100,43,92, 150);
    fill(226,43,92, 150);

    push();
    translate(width/2,height/2);
    line(0,0,x,y);
    ellipse(x,y,16,16);
    pop();
  }
}

// ------------------------------------------------- //
var movers = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  // Create new objects
  for (var i = 0; i < 20; i++) {
    movers[i] = new Mover();
  }
}

// ------------------------------------------------- //
function draw() {
  noStroke();
  fill(0,150);
  rect(0,0,windowWidth,windowHeight);
  // Call functionality
  for (var i = 0; i < movers.length; i++) {
    movers[i].update();
    movers[i].display();
  }
}
