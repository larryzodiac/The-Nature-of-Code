// ------------------------------------------------- //
// 22/01/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Introduction // I.6 Perlin Noise // Part a.
// One dimensional Noise
// http://natureofcode.com/book/introduction/
// ------------------------------------------------- //
// Class
function Walker() {
  // Data
  this.x = width/2;
  this.xOff = random(1000);
  // Functionality
  this.display = function() {
    noStroke();
    fill(255,50,50,50);
    ellipse(this.x,height/2,50,50);
  }
  this.walk = function() {
    // 'noise' function always returns between 1 and 0
    // Think of one-dimensional Perlin noise as a linear sequence of values over time
    // In this case 'xOff' is our time
    // 'map' used to get our current value (xOff) within a range (1,0)
    // Then return a new value from a new given range
    // 'new value = map(value, current min, current max, new min, new max)'
    this.x = map(noise(this.xOff),0,1,0,width);
    // console.log(this.x);
    // 'xOff' moves us forward in time
    // 'a=a+b' === 'a+=b'
    this.xOff += 0.0020;
  }
}
// Declare object
var myWalker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Initialise class object
  myWalker = new Walker();
}

function draw() {
  // New 'rect' drawn every frame with a slight opacity
  // Creates trailing effect when ellipse moves
  fill(0,15);
  rect(0,0,width,height);
  myWalker.display();
  myWalker.walk();
}
