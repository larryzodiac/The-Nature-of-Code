// ------------------------------------------------- //
// 20/01/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// P5.js recap exercise, intro to classes + objects
// ------------------------------------------------- //
// Class
function Car() {
  // Data
  this.color = 'blue';
  this.xpos = 10;
  // Behaviours, or, functionality
  this.display = function() {
    rect(this.xpos,50,100,50);
    fill(this.color);
  }
  this.drive = function() {
    this.xpos = this.xpos + 1;
  }
}
// Declare my class object
var myCar;

function setup() {
  createCanvas(500,500)
  // Initialise my class object
  myCar = new Car();
}

function draw() {
  background('black');
  // Call functionality on class object
  myCar.display();
  myCar.drive();
}
