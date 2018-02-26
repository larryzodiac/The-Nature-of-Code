// ------------------------------------------------- //
// 26/02/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Forces // 2.2 Adding Mass
// Force = mass * acceleration
// http://natureofcode.com/book/chapter-2-forces/
// ------------------------------------------------- //
// Arguements 'm' passed to class to create custom mover objects
var Mover = function(m) {
    // Characteristics
    this.location = createVector(random(width),random(height));
    this.velocity = createVector(3,2);
    this.acceleration = createVector(0,0);
    this.mass = m;
    // Behaviours
    this.display = function() {
      noStroke();
      fill('cyan');
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

// Declare object
var mover;

function setup() {
    createCanvas(windowWidth,windowHeight);
    background(0);
    // Initialise objects
    // Pass pararmetres for custom objects
    mover = new Mover(20);
}

// ------------------------------------------------- //

function draw() {
    noStroke();
    fill(0,150);
    rect(0,0,windowWidth,windowHeight);
    // Multiple forces
    var gravity = createVector(-0.1,0.2);
    var wind = createVector(0.1,-0.2);
    // Call behaviours on object
    mover.display();
    mover.update();
    mover.checkEdges();
    mover.applyForce(gravity);
    mover.applyForce(wind);
}
