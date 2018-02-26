// ------------------------------------------------- //
// 26/02/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Forces // 2.3 Gravity
// Galileo's Experiment
// http://natureofcode.com/book/chapter-2-forces/
// ------------------------------------------------- //
// Arguements 'm' passed to class to create custom mover objects
var Mover = function(m) {
  // Characteristics
  this.location = createVector(0,10);
  this.velocity = createVector(0,0);
  this.acceleration = createVector(0,0);
  this.mass = m;
  // Behaviours
  this.display = function() {
    noStroke();
    fill('magenta');
    // N.B size does not equal mass in real world
    ellipse(this.location.x,this.location.y,this.mass*3,this.mass*3);
  }
  this.update = function() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(20);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }
  this.checkEdges = function() {
    if(this.location.x < 0 || this.location.x > width){
      this.velocity.x = this.velocity.x * -1;
    }
    if(this.location.y < 0 || this.location.y > height){
      this.velocity.y = this.velocity.y * -1;
    }
  }
  this.applyForce = function(force) {
    // Remember, we don't want to affect force
    // Create a static variable
    var f = p5.Vector.div(force,this.mass);
    this.acceleration.add(f);
  }
}

// ------------------------------------------------- //

// Declare object
// var mover;
var movers = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  // Initialise objects
  for (var i = 0; i < 20; i++) {
    movers[i] = new Mover(Math.floor(random(5,20)))
  }
  // mover = new Mover(20);
}

// ------------------------------------------------- //

function draw() {
  noStroke();
  fill(0,150);
  rect(0,0,windowWidth,windowHeight);
  for (var i = 0; i < movers.length; i++) {
    // Get the mass of current mover
    var m = movers[i].mass;
    // Multiple forces
    // Scaling gravity by mass to be more accurate
    // Cancelled out when we divide acceleration by mass
    var gravity = createVector(0,0.1*m);
    var wind = createVector(0.1,0);
    // Call behaviours on object
    movers[i].display();
    movers[i].update();
    movers[i].checkEdges();
    movers[i].applyForce(gravity);
    movers[i].applyForce(wind);
  }
}
