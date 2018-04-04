// ------------------------------------------------- //
// 04/04/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Forces // Wind Chimes Class Exercise
// http://natureofcode.com/book/chapter-2-forces/
// ------------------------------------------------- //
var Mover = function (x, y, vx, vy, ax, ay, m) {
  // Data
  this.location = createVector(x, y);
  this.velocity = createVector(vx, vy);
  this.acceleration = createVector(ax, ay);
  this.mass = m;
  // Behaviours
  this.update = function () {
  this.velocity.add(this.acceleration);
  this.velocity.limit(4);
  this.location.add(this.velocity);
  this.acceleration.mult(0);
  }
  this.display = function () {
    //pick a brush
    noStroke();
    strokeWeight(2);
    fill(255, 0, 0, 50);
    //And draw an ellipse at the new location vector points
    ellipse(this.location.x, this.location.y, 3 * this.mass, 3 * this.mass);
  }
  this.checkEdges = function () {
    if (this.location.x > width) {
      this.location.x = 0;
    }
    if (this.location.x < 0) {
      this.location.x = width;
    }
    if (this.location.y > height) {
      this.location.y = 0;
    }
    if (this.location.y < 0) {
      this.location.y = height;
    }
  }
  this.applyForce = function (force) {
    var f = p5.Vector.div(force, this.mass)
    this.acceleration.add(f);
  }
}

// ------------------------------------------------- //

function WindChime(_xpos,_ypos,_windMag,_startAngle,_endAngle){
  // Characteristics
  this.xpos = _xpos;
  this.ypos = _ypos;
  this.windMag = _windMag;
  this.startAngle = _startAngle;
  this.endAngle = _endAngle
  this.windVector = createVector();
  this.time = 1000;
  // Behaviours
  this.update = function() {
    this.windDirection = map(noise(this.time),0,1,this.startAngle,this.endAngle)
    this.windVector = p5.Vector.fromAngle(radians(this.windDirection));
    this.windVector.mult(this.windMag);
    this.time += 0.01;
  }
  this.display = function() {
    push();
    translate(this.xpos,this.ypos);
    scale(0.5,0.5);
    fill(0);
    textSize(20);
    textAlign(CENTER);
    noStroke();
    text('Magnitude: ' + this.windMag,0,120);
    this.string = str(this.windVector.heading()* 180/PI);
    text('Wind Direction: ' + this.string.substr(0,6),0,145);
    stroke(0);
    strokeWeight(4);
    fill(255,0);
    ellipse(0,0,150,150);
    // rotate(radians(45));
    rotate(this.windVector.heading());
    line(-60,0,60,0);
    fill(0);
    triangle(40,-10,60,0,40,10);
    pop();
    // rect(0,0,100,100);
  }
}

// ------------------------------------------------- //
var movers = [];
var windChimes = [];

function setup() {
    createCanvas(640, 640);
    // x, y, vx, vy, ax, ay, m
    for(var i = 0; i < 100; i++) {
        movers[i] = new Mover(random(0,640),random(0,640),0,0,0,0,random(10));
    }
    // _xpos,_ypos,_windMag,_startAngle,_endAngle
    windChimes[0] = new WindChime(50,50,0.5,0,90);
    windChimes[1] = new WindChime(500,500,1,180,270);
    windChimes[2] = new WindChime(50,500,2,270,360);
    windChimes[3] = new WindChime(500,50,2,90,180);
}

// ------------------------------------------------- //

function draw() {
    background(255);
    for(var j = 0; j < movers.length; j++) {
        for(var i = 0; i < windChimes.length; i++) {
            movers[j].applyForce(windChimes[i].windVector);
        }
        movers[j].display();
        movers[j].update();
        movers[j].checkEdges();
    }
    for(var i = 0; i < windChimes.length; i++) {
        windChimes[i].update();
        windChimes[i].display();
    }
}

// ------------------------------------------------- //
