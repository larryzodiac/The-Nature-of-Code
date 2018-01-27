// ------------------------------------------------- //
// 27/01/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Introduction // I.6 Perlin Noise // Part b.
// One dimensional Noise
// http://natureofcode.com/book/introduction/
// ------------------------------------------------- //
function Walker() {
  // Data
  // 'Vectors' entities that have magnitude & direction
  // Class stores datatypes 'x' & 'y' for 2D
  this.position = createVector(width/2,height/2);
  // noff represents time -> linear scale
  this.noff = createVector(random(1000),random(1000));
  // Functionality
  this.display = function() {
    noStroke();
    fill(255,45,30,50);
    // Pass 'ellipse' x & y pos of position vector, will change with Noise
    // Notice we pass the same size parametres -> 'noise(this.noff.x),0,1,20,200'
    // And on screen, ellipse's retunr same radii
    // This is because the noise function is 'deterministic'
    // It gives you the same result for a specific time t each and every time
    ellipse(this.position.x,this.position.y,map(noise(this.noff.x),0,1,20,200),map(noise(this.noff.x),0,1,20,200));
  }
  this.walk = function() {
    // 'new value(value,current min,current max,new min,new max)'
    this.position.x = map(noise(this.noff.x),0,1,0-200,width+200);
    this.position.y = map(noise(this.noff.y),0,1,0-200,height+200);
    // Change in 'time'
    this.noff.add(0.005,0.005);
  }
}

var myWalkers;
var numWalkers;

function setup() {
  // All below nothing new
  numWalkers = 10;
  myWalkers = []
  createCanvas(windowWidth, windowHeight);
    for (var i = 0; i < numWalkers; i++) {
    myWalkers[i] = new Walker();
  }
  background('black');
}

function draw() {
    fill(0,15);
    rect(0,0,width,height);
    for (var i = 0; i < numWalkers; i++) {
      myWalkers[i].display();
      myWalkers[i].walk();
    }
}
