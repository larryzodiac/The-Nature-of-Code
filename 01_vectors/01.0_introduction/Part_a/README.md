# Demonstrating the Need for Vectors
There are two types of vectors that we are going to use.

_Location_ and _velocity_ vectors.

But lets demostrate _why_ we shoud use them.

Notice in this code how we store data in different variables for our locations and the speed of our ball.

```
var x = 100;
var y = 100;
var xspeed = 10;
var yspeed = 2;
```

With this data, in the draw, we add the speeds to the locations in order to move the ball.

Note that speed is now related to location, a velocity is simply the rate at which we change position.

```
function draw() {
  x = x + xspeed;
  y = y + yspeed;
  ellipse(x,y,50,50);
}
```

Then we simply assign the new locations `x` and `y` to the ellipse's attributes.

Note also that we add `if else` statements so that the ball does not go off screen.

```
if ((x > width) || (x < 0)) {
  xspeed = xspeed * -1;
}
if ((y > height) || (y < 0)) {
  yspeed = yspeed * -1;
}
```

So, to re-cap, we set up our `x`and `y` locations and velocities.

We then add the velocities to the corresponding locations in order to change location of the ball.

Then we assign the new location to the ball and iterate.
