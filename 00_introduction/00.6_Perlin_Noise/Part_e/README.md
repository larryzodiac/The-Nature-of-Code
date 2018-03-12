# Two Dimensional Noise w/ Pixel Array (Clouds)
Using the same approach as before but this time we're implementing two dimensional noise.

## The Code
Note `noiseDetail(10)` in `setup()`

Adjusts the character and level of detail produced by the Perlin noise function.

See [reference](https://p5js.org/reference/#/p5/noiseDetail).

Firstly, we must define our moments in time.

We do so by defining `xOff` and `yOff`

Then, like before, we find each pixel and their corresponding _rgba_ values with nested loops.

We use `noise()` to generate our random values for our given time.

Then map that value to another that suits _rgba_ format (0 to 255).

```
var bright = map(noise(xOff, yOff), 0, 1, 0, 255);
```

Now we can assign the four values these numbers once found.

```
pixels[index + 0] = bright;
pixels[index + 1] = bright;
pixels[index + 2] = bright;
pixels[index + 3] = 255;
```

Then all we do is increment time.

Results in looking like this:

```
for (var y = 0; y < height; y++) {
  for (var x = 0; x < width; x++) {
    var bright = map(noise(xOff,yOff),0,1,0,255);
    var index = (x+y*width)*4;
    pixels[index + 0] = bright;
    pixels[index + 1] = bright;
    pixels[index + 2] = bright;
    pixels[index + 3] = 255;
    xOff += 0.02;
    }
  yOff += 0.02;
}
```
