// ------------------------------------------------- //
// 20/01/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Introduction // I.1-2 Random Walker // Part a.
// http://natureofcode.com/book/introduction/
// ------------------------------------------------- //
// Class
function walker() {
  // Data
  this.x = width/2;
  this.y = height/2;
  // Functionality
  this.display = function() {
    stroke(0);
    point(this.x,this.y);
  }
  this.walk = function() {
    // Number between 0 & 4 (max 3.999)
    // 'floor' knocks off decimals
    // Four outcomes:
    // 0, 1, 2, or 3
    // https://p5js.org/reference/#/p5/floor
    var direction = floor(random(4));
    if(direction === 0) {
      this.x++;
    }
    else if (direction === 1) {
      this.x--;
    }
    else if (direction === 2) {
      this.y++;
    }
    else {
      this.y--;
    }
    // p5 function 'constrain'
    // Limit x position
    // So it won't go off screen
    // https://p5js.org/reference/#/p5/constrain
    this.x = constrain(this.x,0,width);
    this.y = constrain(this.y,0,height);
  }
}
// Declare class object
var myWalker;

function setup() {
  createCanvas(500,500);
  //Initialise new class object
  myWalker = new walker();
}
// Call functionality on object
function draw() {
  myWalker.display();
  myWalker.walk();
}
