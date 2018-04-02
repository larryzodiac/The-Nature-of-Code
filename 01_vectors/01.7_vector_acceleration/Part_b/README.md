# Acceleration Towards a Mouse
In The Nature of Code, Daniel Shiffman states: anytime we want to calculate a vector based on a rule or a formula, we need to compute two things: _magnitude_ and _direction._

In this example we want to set the acceleration vector pointing towards the mouse location from the object.

We find this in the resultant vector of subtracting the location vector from the mouse vector, like before.

Then, we assign this new resultant to the acceleration vetor and then set it's magnitude.

Once we apply this new acceleration to a velocity, it will accelerate towards the mouse.

## The Code
We create an empty vector for acceleration in the class' characteristics

```
this.acceleration = createVector();
```

Then in the `update()` function we capture the mouse location as a vector.

```
var mouse = createVector(mouseX,mouseY);
```

We assign the resultant vector (our 'line' between the object's location and the mouse location) to the acceleration.

Using p5.Vector will not alter any of our vectors.

This means that there will be a new acceleration vector every frame, altering the course of the object to follow the mouse.

It is known as a _static function._

```
this.update = function() {
  var mouse = createVector(mouseX,mouseY);
  this.acceleration = p5.Vector.sub(mouse, this.location);
}
```

Then we set the magnitude of the acceleration vector using the `.setMag()` built-in function.

We do this in order to set the distance the object will move each frame in addition to the velocity.

```
this.update = function() {
  var mouse = createVector(mouseX,mouseY);
  this.acceleration = p5.Vector.sub(mouse, this.location);
  this.acceleration.setMag(0.2);
}
```

After this, all we do is implement `V.A,L.V` and limit the maximum velocity.

```
this.update = function() {
  var mouse = createVector(mouseX,mouseY);
  this.acceleration = p5.Vector.sub(mouse, this.location);
  this.acceleration.setMag(0.2);
  //
  this.velocity.add(this.acceleration);
  this.velocity.limit(10);
  this.location.add(this.velocity);
}
```

Then we declare and intialise our objects as per usual and call their functionalities.
