// ------------------------------------------------- //
// 23/04/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// P5.js Coding Challenge
// Solar System // Saturn
// Needs Server for Assets
// https://www.youtube.com/watch?v=FGAwi7wpU8c&t=3s
// ------------------------------------------------- //
// Class
function Planet(radius, distance, orbitSpeed) {
  // Characteristics
  this.angle = random(TWO_PI);
  this.orbitSpeed = orbitSpeed;
  this.radius = radius;
  this.distance = distance;
  this.orbitingPlanets = [];
  this.v = createVector(0,0.1,1);
  this.v.mult(distance);
  var opt = random(0,1);
  // Behaviour
  this.spawnMoons = function(planets) {
    for (var i = 0; i < planets; i++) {
      var r = this.radius * 0.01;
      var d;
      var o;
      var opt = floor(random(0,2));
      if (opt === 0) {
        var d = random((this.radius + r)*2,(this.radius + r)*3);
        var o = 0.01;
      } else {
        var d = random((this.radius + r)*3.5,(this.radius + r)*4);
        var o = -0.005;
      }
      this.orbitingPlanets[i] = new Planet(r,d,o);
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
    var v2 = new p5.Vector(1,0,1);
    var p = new p5.Vector();
    p = this.v.cross(v2);
    rotate(this.angle,[p.x,p.y,p.z]);
    translate(this.v.x,this.v.y,this.v.z);
    noStroke();
    sphere(this.radius,24,24);
    if(this.orbitingPlanets != null) {
      for (var i = 0; i < this.orbitingPlanets.length; i++) {
        this.orbitingPlanets[i].show();
      }
    }
    pop();
  }
}
// ------------------------------------------------- //
var saturn;
var easycam;
let img;

function preload() {
  img = loadImage('assets/saturn.jpg');
}

function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);
  background(0);
  easycam = createEasyCam({distance:170});
  // Radius, distance, orbit speed
  saturn = new Planet(20,10,0);
  // Moons, level
  saturn.spawnMoons(600,1);
  texture(img);
}

// ------------------------------------------------- //
function draw() {
  background(0);
  easycam.rotateY(0.005)
  easycam.removeMouseListeners();

	push();
  fill(255);
  noStroke();
	translate(-500, -10, 0);
	sphere(150,24,24);
  pointLight(250, 250, 250, -100, -10, 0);
  pop();

  push();
  fill(255);
  pointLight(250, 250, 250, -100, 20, 130);
  pointLight(250, 250, 250, -100, 20, -130);
  saturn.show();
  saturn.orbit();
  pop();
}
