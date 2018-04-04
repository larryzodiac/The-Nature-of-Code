// ------------------------------------------------- //
// 04/04/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Forces // 2.5 Drag Forces or Resistance
// http://natureofcode.com/book/chapter-2-forces/
// ------------------------------------------------- //
var Liquid = function(_x,_y,_w,_h) {
  // Characteristics
  this.location = createVector(_x,_y);
  this.width = _w;
  this.height = _h;
  // Behaviours
  this.display = function(){
      noStroke();
      fill(0, 20, 53);
      rect(this.location.x,this.location.y,this.width,this.height);
  }
  this.contains = function(m) {
    return m.location.x > this.location.x && m.location.x < this.location.x + this.width && m.location.y > this.location.y && m.location.y < this.location.y + this.height;
  }
  this.drag = function(m) {
    var c = 1;
    var speed = m.velocity.mag();
    var dragMagnitude = c * speed * speed;
    // var drag = new p5.Vector(m.velocity);
    var drag = m.velocity.copy();
    drag.mult(-1);
    drag.normalize();
    drag.mult(dragMagnitude);
    return drag;
  }
}

// ------------------------------------------------- //
var Mover = function(_x,_y,_vx,_vy,_ax,_ay,_mass) {
  // Characteristics
  this.location = createVector(_x,_y);
  this.velocity = createVector(_vx,_vy);
  this.acceleration = createVector(_ax,_ay);
  this.mass = _mass;
  // Behaviours
  this.display = function() {
    noStroke();
    fill('crimson');
    // N.B size does not equal mass in real world
    ellipse(this.location.x,this.location.y,this.mass,this.mass);
  }
  this.update = function() {
    // V.A, L.V
    this.velocity.add(this.acceleration);
    this.velocity.limit(20);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }
  this.checkEdges = function() {
    if(this.location.x < 0 || this.location.x > width){
      this.velocity.x = this.velocity.x * -1;
    }
    if(this.location.y < 0 || this.location.y > height){
      this.velocity.y = this.velocity.y * -1;
    }
  }
  this.applyForce = function(force) {
    // Remember, we don't want to affect force
    // Create a static variable
    var f = p5.Vector.div(force,this.mass);
    this.acceleration.add(f);
  }
}

// ------------------------------------------------- //

// Declare objects
var movers = [];
var liquid;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  // Initialise objects
  n = 100;
  for(var i = 0; i < 4; i++){
    movers[i] = new Mover(400+n,0,0,random(0.1,1),0,0,random(20,60));
    n = n + 100;
  }
  liquid = new Liquid(0,height/2,width,height/2)
}

// ------------------------------------------------- //

function draw() {
  noStroke();
  fill(0,150);
  rect(0,0,windowWidth,windowHeight);
  // Calls
  liquid.display();
  for(var i = 0; i < movers.length; i++){
    // Check if mover is in liquid
    if(liquid.contains(movers[i])) {
        // console.log('true');
        var drag = liquid.drag(movers[i]);
        movers[i].applyForce(drag);
    }
    var gravity = createVector(0,0.1 * movers[i].mass);
    movers[i].applyForce(gravity);
    movers[i].update();
    movers[i].display();
    movers[i].checkEdges();
  }
}
