// ------------------------------------------------- //
// 16/04/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// P5.js Coding Challenge
// Solar System
// ------------------------------------------------- //
// Class
// Need to keep track of distance
// From sun to planet
// Actually kepping track of an angle
// Polar
function Planet(radius, distance, orbitSpeed) {
  // Characteristics
  // Start angle of rotation
  this.angle = random(TWO_PI);
  this.orbitSpeed = orbitSpeed;
  // Size of planet
  this.radius = radius;
  // Distance of planet from sun
  // Or moon from planet
  // Tree of planets
  this.distance = distance;
  this.orbitingPlanets = [];
  // Behaviour
  this.spawnMoons = function(planets, level) {
    // level keeps track of planets around sun
    // Then moons around planets
    for (var i = 0; i < planets; i++) {
      var r = this.radius/(level*2);
      var d = random((radius + r),(radius + r)*2);
      var o = random(0.01,0.03)
      this.orbitingPlanets[i] = new Planet(r,d,o);
      if (level < 2) {
        var moons = random(0,2);
        this.orbitingPlanets[i].spawnMoons(moons, level+1);
      }
    }
  }
  this.orbit = function(){
    this.angle += this.orbitSpeed;
    for (var i = 0; i < this.orbitingPlanets.length; i++) {
      this.orbitingPlanets[i].orbit();
    }
  }
  this.show = function(){
    push();
    // Rotate before translate
    // Or planets will be in line
    rotate(this.angle);
    translate(this.distance,0);
    fill(200, 100);
    ellipse(0,0,this.radius*2,this.radius*2);
    // If our sun has moons
    // Loop through them and show each
    if(this.orbitingPlanets != null) {
      for (var i = 0; i < this.orbitingPlanets.length; i++) {
        this.orbitingPlanets[i].show();
      }
    }
    pop()
  }
}
// ------------------------------------------------- //
var sun;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  // Radius, distance, orbit speed
  sun = new Planet(20,0,0);
  // Moons, level
  sun.spawnMoons(2,1);
}

// ------------------------------------------------- //
function draw() {
  push();
  noStroke();
  fill(0,150);
  rect(0,0,windowWidth,windowHeight);
  pop();
  translate(width/2,height/2);
  sun.show();
  sun.orbit();
}
