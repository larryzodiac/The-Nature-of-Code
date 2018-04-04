// ------------------------------------------------- //
// 04/04/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Oscillation // Pointing in the Direction of Movement
// http://natureofcode.com/book/chapter-3-oscillation/
// ------------------------------------------------- //
var Mover = function () {
  // Characteristics
  this.position = createVector(width / 2, height / 2);
  this.velocity = createVector(0, 0);
  this.acceleration = 0;
  this.topspeed = 5;
  // Behaviours
  this.update = function () {
    var mouse = createVector(mouseX, mouseY);
    var dir = p5.Vector.sub(mouse, this.position);
    dir.normalize();
    dir.mult(0.09);
    this.acceleration = dir;
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
  }
  this.display = function () {
    noStroke();
    fill('crimson');
    var angle = this.acceleration.heading();
    push();
    translate(this.position.x, this.position.y);
    rotate(angle);
    triangle(30, 75, 58, 20, 86, 75);
    pop();
  }
  this.checkEdges = function () {
    if (this.position.x > width) {
    this.position.x = 0;
    } else if (this.position.x < 0) {
    this.position.x = width;
    }

    if (this.position.y > height) {
    this.position.y = 0;
    } else if (this.position.y < 0) {
    this.position.y = height;
    }
  }
}

// ------------------------------------------------- //
var mover;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  mover = new Mover();
}

// ------------------------------------------------- //
function draw() {
  noStroke();
  fill(0,100);
  rect(0,0,windowWidth,windowHeight);
  mover.checkEdges();
  mover.update();
  mover.display();
}
