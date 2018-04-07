// ------------------------------------------------- //
// 07/04/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Oscillation // Introduction to Angles w/ Objects
// http://natureofcode.com/book/chapter-3-oscillation/
// ------------------------------------------------- //
var Mover = function() {
  // Characteristics
  this.location = createVector(random(width),random(height));
  this.velocity = createVector(0,0);
  this.acceleration = createVector();
  this.mass = floor(random(0,10));
  // Angle
  this.aVelocity = 0;
  this.aAcceleration = 0.01;
  this.angle = 0;
  // functionality/behaviours
  this.update = function() {
    // Capture centreof screen
    var centre = createVector(windowWidth/2,windowHeight/2);
    this.acceleration = p5.Vector.sub(centre, this.location);
    this.acceleration.setMag(0.05);
    // Previous rules of motion
    this.velocity.add(this.acceleration);
    this.velocity.limit(15);
    this.location.add(this.velocity);
    // Implementation of new angle formulae
    this.aAcceleration = this.acceleration.x / 10;
    this.aVelocity += this.aAcceleration;
    this.aVelocity = constrain(this.aVelocity,-0.03,0.03);
    this.angle += this.aVelocity;

    this.acceleration.mult(0);
  }
  this.display = function() {
    stroke(100,43,92, 150);
    fill(226,43,92, 150);

    push();
    translate(this.location.x, this.location.y);
    rotate(this.angle);
    rectMode(CENTER);
    rect(0, 0, this.mass*10, this.mass*10);
    pop();
  }
  this.boundary = function() {
    if(this.location.x > width - 10 || this.location.x < 10) {
      this.velocity.x = this.velocity.x * -1;
    }
    if(this.location.y > height - 10 || this.location.y < 10) {
      this.velocity.y = this.velocity.y * -1;
    }
  }
}

// ------------------------------------------------- //
var movers = []

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
    movers[i].boundary();
    movers[i].display();
  }
}
