// ------------------------------------------------- //
// 21/01/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Introduction // I.3 Probability and Non-Uniform Distributions // Part a.
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
    // Manually set probability
    var probArray = [];
    probArray[0] = 1;
    probArray[1] = 1;
    probArray[2] = 2;
    probArray[3] = 3;
    probArray[4] = 3;
    // 40% chance r = 1 or 3
    // 20% chance r = 2
    var index = floor(random(probArray.length));
    var r = probArray[index];
    // More likely to be x++ & y++
    // i.e, diagonal bottom-right
    if (r === 1) {
      this.x++;
    }
    else if (r === 2) {
      this.x--;
    }
    else if (r === 3) {
      this.y++;
    }
    else {
      this.y--;
    }

    // for(var x = 0; x < probArray.length; x++) {
    //     console.log(r);
    // }

    this.x = constrain(this.x,0,width);
    this.y = constrain(this.y,0,height);
  }
}

var myWalker;

function setup() {
  createCanvas(500,500);
  myWalker = new Walker();
}

function draw() {
  myWalker.display();
  myWalker.walk();
}
