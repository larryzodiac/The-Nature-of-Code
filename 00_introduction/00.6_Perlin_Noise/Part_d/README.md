# Two Dimensional Noise w/ Pixel Array (Static)
In this exercise we create a static TV screen effect.

We use the same approach as the previous exercise

## The Code
The only difference we not in this file is that we set up a random variable.

It will return rgba values of between 0 and 255.

```
var bright = random(255);
```

Now all we do is pass these radom values to the rgba values of each pixel in the `pixel array`

```
for (var y = 0; y < height; y++) {
  for (var x = 0; x < width; x++) {
    var bright = random(255);
    var index = (x+y*width)*4;
    pixels[index + 0] = bright;
    pixels[index + 1] = bright;
    pixels[index + 2] = bright;
    pixels[index + 3] = 255;
  }
}
```

No mad changes here.
