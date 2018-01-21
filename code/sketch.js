// ------------------------------------------------- //
// 20/01/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Introduction // I.1-2 Random Walker // Part b.
// http://natureofcode.com/book/introduction/
// ------------------------------------------------- //
// Class
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
    // 3 outcomes: -1,0 & 1
    xWalk = floor(random(-1,2));
    yWalk = floor(random(-1,2));
    // Combined we get 9 outcomes
    // +1 xPos & +1 yPos produces diagonal
    this.x = this.x + xWalk;
    this.y = this.y + yWalk;
    // Doesn't continue off screen
    this.x = constrain(this.x,0,width);
    this.y = constrain(this.y,0,height);
  }
}
// Declare object
var myWalker;

function setup() {
  createCanvas(500,500);
  background('lime');
  // Initialise class objcet
  myWalker = new Walker();
}
// Call functionality on object
function draw() {
  myWalker.display();
  myWalker.walk();
}
