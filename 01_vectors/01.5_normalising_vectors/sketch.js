// ------------------------------------------------- //
// 05/02/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Vectors // 1.5 Vector Normalisation
// Setting up unit vectors
// http://natureofcode.com/book/chapter-1-vectors/
// ------------------------------------------------- //
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
}

function draw() {
  noStroke();
  fill(0,15);
  rect(0,0,width,height);
  // Capture mouse co-ordinates + centre of window as vectors
  var mouse = createVector(mouseX, mouseY);
  var centre = createVector(width/2,height/2);
  // 'vectorLine' is our resultant
  var vectorLine = mouse.sub(centre);
  // The reason we normalise, is so to have what is called a 'unit vector' handy
  // A unit vector describes a vector's direction without regards to it's magnitude
  // Firstly, we say that a standard vector has a value of x, in our case 1
  // To normalise, we take a vector of any length, keeping it's direction
  // This is thus known as a 'unit vector'
  // Unit vector = vector/magnitude
  // u/\ = u-> / ||u->||
  // Think with regards to Pythagoras -> we divide all side of the triangle by the hypotenuse (magnitude)
  vectorLine.normalize();
  // We multiply by 50 so we can see it on screen
  vectorLine.mult(50);
  // Translate window as before
  translate(width/2,height/2);
  strokeWeight(5);
  stroke(50,255,100);
  line(0,0,vectorLine.x,vectorLine.y);
}
