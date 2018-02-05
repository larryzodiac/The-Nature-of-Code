// ------------------------------------------------- //
// 05/02/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Introduction // I.6 Perlin Noise // Part e.
// Two dimensional Noise // Pixel Array // Implementing 2D Noise
// http://natureofcode.com/book/introduction/
// ------------------------------------------------- //
var yOff = 1000.0;

function setup() {
  frameRate(60);
  // createCanvas(windowWidth, windowHeight);
  createCanvas(200,200);
  // Allows rendering of all pxels on high-res displays
  pixelDensity(1);
  // Adjusts Perlin noise detail
  // https://processing.org/reference/noiseDetail_.html
  noiseDetail(10);
}

function draw() {
  // 'pixels' array predefined array containing values for all pixels in window
  // Before we access it, must call 'loadPixels()'
  // https://processing.org/reference/pixels.html
  loadPixels();
  // Our moment in time
  var xOff = 100.0;
  // Loop through row
  for (var y = 0; y < height; y++) {
    // Loop through columns
    for (var x = 0; x < width; x++) {
      // Setup TV static effect
      // Map our 'time' to a new value
      var bright = map(noise(xOff,yOff),0,1,0,255);
      // Calculate index
      var index = (x+y*width)*4;
      // Pass new value to array
      pixels[index + 0] = bright;
      pixels[index + 1] = bright;
      pixels[index + 2] = bright;
      pixels[index + 3] = 255;
      // Smaller incrementation =  smoother/smaller jumps in 'time'
      xOff += 0.02;
    }
    yOff += 0.02;
  }
  // Updates the display window with the data in 'pixels'array
  // Used in conjunction with 'loadPixels()'
  updatePixels();
}
