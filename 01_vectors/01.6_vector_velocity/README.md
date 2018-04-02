# Vector Velocity
In earlier exercises we we used a ball bouncing around a screen to understand the _fundamentals of motion_ in p5.js

But this ball was created in the `setup()` and `void()` whereas we want to move towards encapsulating all of the logic we have learned on motion into a `class`

Using a class we can create ball objects as before.

The object on screen has a location (where it is at any given moment) as well as a velocity (instructions for how it should move from one moment to the next).

This creats a foundation for programming moving objects in p5.js

We said that velocity is added to location:

```
location.add(velocity);
```

## The Code
To recap, much like most previous exercises we create a `class`, a `setup()` and a `draw()`
```
function Walker() {
  // Characteristics
  // Behaviours
}

setup() {
  // Define initial environment properties
}

draw() {
  // Execute code every frame
}
```

We then define the classes _characteristics_ or _data._

In this case, our location and velocity as vectors.

```
function Walker() {
  // Characteristics
  this.location = createVector(random(width),random(height));
  this.velocity = createVector(5,2);
  ...
}
```

Then add in it's _behaviours_ or _functionality._

N.B we create an `update()` function that updates the position of the object.

This is the motion in action.

We add the velocity to the object's location each time we call this function.

```
function Walker() {
  this.update = function() {
    this.location.add(this.velocity);
  }
  
  this.display = function() {
    ellipse(this.location.x, this.location.y, 40, 40);
  }
  
  this.boundary = function() {
    // Checks to see if ball off-screen
  }
}
```

From here we declare and intialise our new object, nothing new.

```
var myWalker;

function setup() {
  ...
  // Create new object
  myWalker = new Walker();
}
```

Then call our functionality on the new object.

```
function draw() {
  myWalker.update();
  myWalker.boundary();
  myWalker.display();
}
```

Therfore, every frame, the object's location will be changed, the ball will be re-drawn according to that new location, and it will check to see if it has bounced off any side of the screen.
