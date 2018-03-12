# Two Dimensional Noise w/ Pixel Array (Gradient)
In this exercise we scrap the class in order to understand the pixel array.

Now we can talk about two dimensional noise.

In the previous exercises we spoke of noise with a linear graph.

With one dimensional noise, we have a sequence of values in which any given value is similar to its neighbor.

As the value is in one dimension, it only has two neighbors: a value that comes before it (to the left on the graph) and one that comes after it (to the right).

Two-dimensional noise works exactly the same way conceptually.

The difference is that we aren’t looking at values along a linear path, but values that are sitting on a grid. 

[One dimension](http://natureofcode.com/book/imgs/intro/intro_10.png) and [two dimensions](http://natureofcode.com/book/imgs/intro/intro_11.png).

If we think about this with noise, a given value will be similar to all of its neighbors.

Above, below, left, right, and any diagonals.

## The Code
Firstly we notice `pixelDensity(1)` in the setup.

This is used for adapting to different resolution screens.

It sets the pixel scaling for high pixel density displays.

See [reference](https://p5js.org/reference/#/p5/pixelDensity).

Before we add noise we must understand the `pixel array`, a pre-dedfined array containig avlues for all pixels in a window.

To access the pixelsin a window we must use nested loops.

We loop through each row, then loop through that row's collumns.

Before we loop we must call a built-in function `loadPixels()` which we use to access the pixel array.

Then loop through the rows and columns to go through each pixel.

```
function draw() {
  loadPixels();
  
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      ...
    }
  }
  
  updatePixels();
  }
```

Note `updatePixels()` this is used in conjuction with `loadPixels()`

However, don't pixels have four values? 

Red, green, blue and opacity (rgba).

So in the pixel arrar, pixels are stored like this:

```
{ R(0), G(0), B(0), A(0), R(1), G(1), B(1), A(1), ...}
```

To locate the values in a pixel in the pixel array we must multiply the `y` value by the `width` and add `x`, then multiply by 4.

We say:

```
var index = (x+y*width)*4;
```

Then we may edit the _rgba_ values:

```
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var index = (x+y*width)*4;
      pixels[index + 0] = 255;
      pixels[index + 1] = x;
      pixels[index + 2] = y;
      pixels[index + 3] = 255;
    }
  }
```

These particular values will create a gradient effect on the pixel array.
