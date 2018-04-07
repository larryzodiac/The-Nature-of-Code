// ------------------------------------------------- //
// 07/04/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Oscillation // Oscillation Amplitude and Period
// http://natureofcode.com/book/chapter-3-oscillation/
// ------------------------------------------------- //
// One full cycle of SIN wave
var period = 120;
// Height of the wave
var amplitude = 500;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
}

// ------------------------------------------------- //
function draw() {
  noStroke();
  fill(0,100);
  rect(0,0,windowWidth,windowHeight);
  // frameCount built-in
  // https://p5js.org/reference/#/p5/frameCount
  // 'x' as a function of time
  // cos returns -1 - 1 oscillation
  // multiply by amplitude to get desired result
  // Inside brackets tells us how many cycles we complete
  // It's as function of time
  // Time is frames
  // multiply by TWO_PI (No. of radians for one Cosine)
  var x = amplitude * cos(TWO_PI * frameCount / period);
  stroke(147,85,214);
  fill(147,85,214);
  translate(width/2,height/2);
  line(0,0,x,0);
  ellipse(x,0,50,50);
}
