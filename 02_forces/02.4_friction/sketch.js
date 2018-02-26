// ------------------------------------------------- //
// 26/02/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Forces // 2.4 Friction
// Friction is a dissipative force in which the total energy
// of a system decreases when an object is in motion.
// Friction = -1 * u * N * v^
// http://natureofcode.com/book/chapter-2-forces/
// ------------------------------------------------- //
var Mover = function(m) {
  // Characteristics
  this.location = createVector(0,10);
  this.velocity = createVector(5,5);
  this.acceleration = createVector(0,0);
  this.mass = m;
  // Behaviours
  this.display = function() {
    noStroke();
    fill('magenta');
    // N.B size does not equal mass in real world
    ellipse(this.location.x,this.location.y,this.mass,this.mass);
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

// Declare objects
var movers = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  // Initialise objects
  for(var i = 0; i < 20; i++){
      movers[i] = new Mover(Math.floor(random(50)));
  }
}

// ------------------------------------------------- //

function draw() {
  noStroke();
  fill(0,150);
  rect(0,0,windowWidth,windowHeight);
  for(var i = 0; i < movers.length; i++) {
    // Forces
    var wind = createVector(0,0);
    var gravity = createVector(0,0 * movers[i].mass);
    // C is the u part
    // Or greek letter 'Mew', describes coefficient of friction
    // The coefficient of friction establishes the strength of a
    // friction force for a particular surface.
    var c = 0.5;
    // N refers to the normal force, the force perpendicular to the object’s motion along a surface.
    // Think of a vehicle driving along a road.
    // The vehicle pushes down against the road with gravity,
    // and Newton’s third law tells us that the road in turn pushes back
    // against the vehicle. That’s the normal force.
    var normal = 1;
    var frictionMag = c * normal;
    // Friction points in opposite direction of velocity
    // Below is -1 * v^ part of equation
    // Meaning take the velocity vector, normaliseg it, and multiply by -1.
    // Make copt of velocity vector
    var friction = p5.Vector.mult(movers[i].velocity,-1);
    // Normalise so we can easily scale
    friction.normalize();
    friction.mult(frictionMag);
    // Call behaviours
    movers[i].applyForce(friction);
    movers[i].applyForce(wind);
    movers[i].applyForce(gravity);
    movers[i].update();
    movers[i].display();
    movers[i].checkEdges();
  }
}
