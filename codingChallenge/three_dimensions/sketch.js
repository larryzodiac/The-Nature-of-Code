// ------------------------------------------------- //
// 21/04/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// P5.js Coding Challenge
// Solar System // Three Dimensions
// https://www.youtube.com/watch?v=dncudkelNxw
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
  // Arbitrary vector to rotate around
  // Unit Vector
  this.v = p5.Vector.random3D();
  this.v.mult(distance);
  // Behaviour
  this.spawnMoons = function(planets, level) {
    // level keeps track of planets around sun
    // Then moons around planets
    for (var i = 0; i < planets; i++) {
      var r = this.radius/(level*2);
      var d = random((this.radius + r)*2,(this.radius + r)*3);
      // var d = (this.radius + r)*2;
      var o = random(0.01,0.03);
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
    // Perpendicular
    // Arbitrary vector
    // Just for giggles
    var v2 = new p5.Vector(1,0,1);
    // Cross product
    var p = new p5.Vector();
    p = this.v.cross(v2);
    console.log(p);
    // rotate(angle,[axis]);
    rotate(this.angle,[p.x,p.y,p.z]);
    // rotate(this.angle,[30,30,30]);
    // rotateX(p.x);
    // rotateY(p.y);
    // rotateZ(p.z);
    // Rotate before translate
    // Or planets will be in line
    // rotate(this.angle);
    stroke(255);
    // Perpendicular Vector
    // Axis around which the sphere rotates
    // line(0,0,0,p.x*5,p.y*5,p.z*5);
    // Vector that contolls planet pos
    // Rotates perpendicular to p
    // line(0,0,0,this.v.x*10,this.v.y*10,this.v.z*10);
    // translate(this.distance,0);
    translate(this.v.x,this.v.y,this.v.z);
    noStroke();
    sphere(this.radius,24,24);
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
var easycam;

function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);
  background(0);
  easycam = createEasyCam({distance:300});
  // Radius, distance, orbit speed
  sun = new Planet(20,10,0);
  // Moons, level
  sun.spawnMoons(2,1);
}

// ------------------------------------------------- //
function draw() {
  background(0);
  // In 3D seems to not draw at top left
  // translate(width/2,height/2);
  // MAKE SUN OPAC
  pointLight(250, 250, 250, 0, 0, 0);
  ambientLight(255,40,20,200);
  // ambientMaterial(255,0,0);
  sun.show();
  sun.orbit();
}
