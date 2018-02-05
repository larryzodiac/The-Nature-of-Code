// ------------------------------------------------- //
// 05/02/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Vectors // 1.7 Vector Acceleration Algorithms // Part c.
// Acceleration towards the mouse w/ multiple objects
// http://natureofcode.com/book/chapter-1-vectors/
// ------------------------------------------------- //
var Walker = function() {
  // Characteristics
  // Define our vectors
  this.location = createVector(random(width),random(height));
  this.velocity = createVector(3,3);
  this.acceleration = createVector();
  // functionality/behaviours
  this.update = function() {
    // Capture mouse
    var mouse = createVector(mouseX,mouseY);
    // Set resultant as acceleration
    this.acceleration = p5.Vector.sub(mouse, this.location);
    // https://p5js.org/reference/#/p5.Vector/setMag
    // 'setMag(len)' -> The new length for this vector
    this.acceleration.setMag(0.2);
    // As before
    this.velocity.add(this.acceleration);
    this.velocity.limit(10);
    this.location.add(this.velocity);
  }
  // Simple, draws ellipse
  this.display = function() {
    noStroke();
    fill(153,102,255);
    ellipse(this.location.x, this.location.y, 20, 20);
  }
  // Checks if ellispe goes beyond window boundaries
  this.boundary = function() {
    if(this.location.x > width - 10 || this.location.x < 10) {
      this.velocity.x = this.velocity.x * -1;
    }
    if(this.location.y > height - 10 || this.location.y < 10) {
      this.velocity.y = this.velocity.y * -1;
    }
  }
}

// Declare new object
var myWalkers = []

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  // Create new objects
  for (var i = 0; i < 20; i++) {
    myWalkers[i] = new Walker();
  }
}

function draw() {
  fill(0,15);
  rect(0,0,width,height);
  // Call functionality
  for (var i = 0; i < myWalkers.length; i++) {
    myWalkers[i].update();
    myWalkers[i].boundary();
    myWalkers[i].display();
  }
}
