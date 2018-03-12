# Two Dimensional Noise
We use the same approach as our one dimensional noise exercise, but with added functionality.

We will add multiple objects using arrays and loops as before.

We will be using simple vectors to store locations.

Also we will be changing the size of the ellipses moving on the x-axis and y-axis based on their noise values.

## The Code
So as stated we will be adding multipe objects, this is the same as before, done in the setup and draw.

```
var myWalkers;
var numWalkers;

function setup() {
  numWalkers = 10;
  myWalkers = []
  for (var i = 0; i < numWalkers; i++) {
    myWalkers[i] = new Walker();
  }
}

function draw() {
  for (var i = 0; i < numWalkers; i++) {
    myWalkers[i].display();
    myWalkers[i].walk();
  }
}
```

Now, in our class we create the time we pass to the noise and our starting location as a vector.

These values are for both x-axis and y-axis.

```
function Walker() {
  this.position = createVector(width/2,height/2);
  this.noff = createVector(random(1000),random(1000));
  
  this.display = function() {
    ...
  }
  this.walk = function() {
    ...
  }
}
```

Then we need to pass our linear time scale to `noise()` and map it.

Ellipse size:

```
  this.display = function() {
    ellipse(
      this.position.x,
      this.position.y,
      map(noise(this.noff.x), 0, 1, 20, 200),
      map(noise(this.noff.x), 0, 1, 20, 200)
    );
  }
```

Motion and the increment of time.

```
  this.walk = function() {
    this.position.x = map(noise(this.noff.x), 0, 1, 0-200, width+200);
    this.position.y = map(noise(this.noff.y), 0, 1, 0-200, height+200);
    this.noff.add(0.005,0.005);
  }
```

Storing the location in a vector and incrementing it like this `this.noff.add(0.005,0.005);` is much easier.

Instead of having to chaneg them individually like this:

```
this.xOff += 0.01;
this.yOff += 0.01;
```

> In truth, there is no actual concept of time at play here. It’s a useful metaphor to help us understand how the noise function works, but really what we have is space, rather than time. 
