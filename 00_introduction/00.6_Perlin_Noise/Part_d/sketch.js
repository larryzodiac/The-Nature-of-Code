// ------------------------------------------------- //
// 05/02/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Introduction // I.6 Perlin Noise // Part d.
// Two dimensional Noise // Pixel Array // Noise
// http://natureofcode.com/book/introduction/
// ------------------------------------------------- //
function setup() {
  // Lags if full window size
  // createCanvas(windowWidth, windowHeight);
  createCanvas(200,200);
  // Allows rendering of all pxels on high-res displays
  pixelDensity(1);
}

function draw() {
  // 'pixels' array predefined array containing values for all pixels in window
  // Before we access it, must call 'loadPixels()'
  // https://processing.org/reference/pixels.html
  loadPixels();
  // Loop through row
  for (var y = 0; y < height; y++) {
    // Loop through columns
    for (var x = 0; x < width; x++) {
      // Setup TV static effect
      var bright = random(255);
      // Calculate index
      var index = (x+y*width)*4;
      // Pass random values to array
      pixels[index + 0] = bright;
      pixels[index + 1] = bright;
      pixels[index + 2] = bright;
      pixels[index + 3] = 255;
    }
  }
  // Updates the display window with the data in 'pixels'array
  // Used in conjunction with 'loadPixels()'
  updatePixels();
}
