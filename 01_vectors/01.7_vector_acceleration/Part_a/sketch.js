// ------------------------------------------------- //
// 05/02/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Vectors // 1.7 Vector Acceleration Algorithms // Part a.
// Constant & random acceleration
// http://natureofcode.com/book/chapter-1-vectors/
// ------------------------------------------------- //
var Walker = function() {
  // Characteristics
  // Define our vectors
  this.location = createVector(random(width),random(height));
  this.velocity = createVector(0,0);
  // > Constant acceleration
  // this.acceleration = createVector(0.03,0.05);
  // > Random acceleration
  // Return new random 2D vector -> ([x],[y])
  // https://p5js.org/reference/#/p5.Vector
  this.acceleration = p5.Vector.random2D();
  this.acceleration.mult(0.10);
  // functionality/behaviours
  // Movement = velocity added to location
  // location changes by velocity
  // Acceleration = rate of change of velocity
  this.update = function() {
    this.velocity.add(this.acceleration);
    // Limit the magnitude of this vector to the value used for the max parameter.
    // https://p5js.org/reference/#/p5.Vector
    this.velocity.limit(50);
    this.location.add(this.velocity);
  }
  // Simple, draws ellipse
  this.display = function() {
    noStroke();
    fill(200,70,0);
    ellipse(this.location.x, this.location.y, 40, 40);
  }
  // Checks if ellispe goes beyond window boundaries
  this.boundary = function() {
    if(this.location.x > width - 20 || this.location.x < 20) {
      this.velocity.x = this.velocity.x * -1;
    }
    if(this.location.y > height - 20 || this.location.y < 20) {
      this.velocity.y = this.velocity.y * -1;
    }
  }
}

// Declare new object
var myWalker

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  // Create new object
  myWalker = new Walker();
}

function draw() {
  fill(0,15);
  rect(0,0,width,height);
  // Call functionality
  myWalker.update();
  myWalker.boundary();
  myWalker.display();
}
