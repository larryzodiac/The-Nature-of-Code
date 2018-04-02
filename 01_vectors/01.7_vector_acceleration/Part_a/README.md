# Random Acceleration
In this exercise we want to implement the extra layer to motion using acceleration.

This requires the use of `V.A,L.V`

## The Code
We setup our basic class as per usual and our working environments.

However, we add an acceleration vector to the class characteristics.

This time, we want to get a random acceleration, introducing the `p5.Vector` class.

See [reference](https://p5js.org/reference/#/p5.Vector).

We use this class to create a _'once off'_ vector, and use many of it's built-in functions.

Side note, we use this class if we don't want to permenantly change the values of other vectors.

```
this.acceleration = p5.Vector.random2D();
```

The `.random2D()` function will create a new 2D unit vector from a random angle.

So, alongside our other vectors:

```
var Walker = function() {
  // Characteristics
  this.location = createVector(random(width),random(height));
  this.velocity = createVector(0,0);
  this.acceleration = p5.Vector.random2D();
}
```

If we wanted a constant acceleration, we could simply declare and intitalise acceleration in the same way as the other vectors.

We then cut the acceleration down using multiplication or division, so that the object doesn't shoot off-screen.

```
this.acceleration.mult(0.10);
```

Then the only other thing we need to change is the `update()` function, where our principles of motion are implemented.

Here we remember `V.A,L.V`

```
this.update = function() {
  this.velocity.add(this.acceleration);
  this.location.add(this.velocity);
}
```

However, because the speed of the object will continue to increase, it will end up moving far to fast.

So, we can limit the speed at which it can reach using the `.limit()` function.

```
this.update = function() {
  this.velocity.add(this.acceleration);
  this.velocity.limit(50);
  this.location.add(this.velocity);
}
```

Then we declare and intialise our objects as per usual and call their functionalities.
