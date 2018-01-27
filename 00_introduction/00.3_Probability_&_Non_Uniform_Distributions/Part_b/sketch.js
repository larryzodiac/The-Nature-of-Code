// ------------------------------------------------- //
// 21/01/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Introduction // I.3 Probability and Non-Uniform Distributions // Part b.
// http://natureofcode.com/book/introduction/
// ------------------------------------------------- //
function Walker() {
  // Data
  this.x = width/2;
  this.y = height/2;
  // Functionality
  this.display = function() {
    stroke(0);
    point(this.x,this.y);
  }
  this.walk = function() {
    var r = random(1);
    // ~40% chance of moving right
    if (r < 0.4) {
      this.x++;
    }
    // ~20%
    else if (r < 0.6) {
      this.x--;
    }
    else if (r < 0.8) {
      this.y++;
    }
    else {
      this.y--;
    }
    // So point won't go off canvas
    this.x = constrain(this.x,0,width);
    this.y = constrain(this.y,0,height);
  }
}
// Declare object
var myWalker;

function setup() {
  createCanvas(500,500);
  // Initialise class object
  myWalker = new Walker();
}

function draw() {
  // Call functionality on object
  myWalker.display();
  myWalker.walk();
}
