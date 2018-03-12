# Creating Initial Vectors
In the last exercise we created variables for our locations and our velocities.

Now we will introduce vectors into the equation.

Vectors are, at their simplest, convenient ways to store values.

So this:

```
var x = 100;
var y = 100;
var xspeed = 5;
var yspeed = 5;
```

Becomes this:

```
var position = createVector(100,100);
var velocity = createVector(5,5);
```

So our algorithm for motion becomes this:

```
position.x = position.x + velocity.x;
position.y = position.y + velocity.y;
```

Then we can assign the new position to the ball:

```
ellipse(position.x, position.y, 50, 50);
```
