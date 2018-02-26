// ------------------------------------------------- //
// 26/02/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Forces // 2.1 Applying/Accumalating Force an an object
// Force = mass * acceleration
// http://natureofcode.com/book/chapter-2-forces/
// ------------------------------------------------- //
var Mover = function() {
    // Characteristics
    this.location = createVector(30,30);
    this.velocity = createVector(3,3);
    this.acceleration = createVector(0,0);
    // Behaviours
    this.display = function() {
      noStroke();
      fill('violet');
      ellipse(this.location.x,this.location.y,30,30);
    }
    this.update = function() {
      this.velocity.add(this.acceleration);
      this.velocity.limit(10);
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
    // Every time 'applyForce()' called, overrides previous call
    // use '.add()' function
    // Also, see 'this.acceleration.mult(0)' in 'update()' above
    // On every frame, resets acceleration to 0
    this.applyForce = function(force) {
      // this.acceleration = force;
      this.acceleration.add(force);
    }
}

// ------------------------------------------------- //

// Declare object
var mover;

function setup() {
    createCanvas(windowWidth,windowHeight);
    background(0);
    // Initialise objects
    mover = new Mover();
}

// ------------------------------------------------- //

function draw() {
    noStroke();
    fill(0,150);
    rect(0,0,windowWidth,windowHeight);
    // Multiple forces
    var gravity = createVector(0,0.2);
    var wind = createVector(0.1,-0.2);
    // Call behaviours on object
    mover.display();
    mover.update();
    mover.checkEdges();
    mover.applyForce(gravity);
    mover.applyForce(wind);
}
