// ------------------------------------------------- //
// 05/02/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Vectors // 1.6 Vector Velocity
// Ellipse in motion using a class
// http://natureofcode.com/book/chapter-1-vectors/
// ------------------------------------------------- //
// We want to encapsulate all of the logic we have learned on motion into a class
var Walker = function() {
  // Characteristics
  // Define our vectors
  this.location = createVector(random(width),random(height));
  this.velocity = createVector(5,2);
  // functionality/behaviours
  // Movement = velocity added to location
  // location changes by velocity
  this.update = function() {
    this.location.add(this.velocity);
  }
  // Simple, draws ellipse
  this.display = function() {
    noStroke();
    fill(255,200,0);
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
