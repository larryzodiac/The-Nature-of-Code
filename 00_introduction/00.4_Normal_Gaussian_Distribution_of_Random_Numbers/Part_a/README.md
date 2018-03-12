# X-Axis Distribution
In this example we distribute ellipses around the mean along the x-axis using Gaussian Distribution.

We will make use of the in-built `randomGaussian()` function.

See [reference](https://p5js.org/reference/#/p5/randomGaussian).

## The Code
No classes are used in this exercise.

We simply want to draw an ellipse every frame, only changing it's x-axis location using Gaussian distribution.

```
function draw() {
  ellipse(xloc, height/2, 20, 20);
  ... 
}
```

If no there are no arguements passed to `randomGaussian()`, returns a mean of 0 and standard deviation of 1.

```
function draw() {
  var xloc = randomGaussian();
  ...
  ellipse(xloc, height/2, 20, 20);
}
```

Now we want to define our mean and standard deviation.

```
function draw() {
  var xloc = randomGaussian();
  var sd = 150;
  var mean = width/2;
  ellipse(xloc, height/2, 20, 20);
}
```

Then we must scale the `randomGaussian()` number by the standard deviation and mean.

```
function draw() {
  var xloc = randomGaussian();
  var sd = 150;
  var mean = width/2;
  xloc = (xloc * sd) + mean;
  ...
  ellipse(xloc, height/2, 20, 20);
}
```

We adjust our parameters (O and 1) by multiplying it by the standard deviation and addign the mean.

Now we can observe Gaussian distribution, the ellipes will be clustered around the centre of the screen.
