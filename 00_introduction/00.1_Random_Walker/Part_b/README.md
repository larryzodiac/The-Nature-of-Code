# Eight Outcomes
In this exercise we implement what we have learned about p5.js and object orientated programming.

Creating a point which will move randomly in _eight_ possible directions.

## The Code
We follow the same procedure as in Part_a with regards to setup and implementation.

However, we want to edit our walker class' walk behaviour so that we may have eight outcomes altogethor.

We simply say we pick, from random, three possible steps along the x-axis (-1, 0, or 1) and three along the y-axis.

When the new x and y values are obtained, we then assign them as the mover object's new location.

```
this.walk = function() {
  // 3 outcomes: -1,0 & 1
  xWalk = floor(random(-1,2));
  yWalk = floor(random(-1,2));
  // Combined we get 8 outcomes
  // +1 xPos & +1 yPos produces diagonal
  this.x = this.x + xWalk;
  this.y = this.y + yWalk;
}
```

Not forgetting we add constraints to the function to the x and y values so that the mover will not go off-screen.

```
this.x = constrain(this.x,0,width);
this.y = constrain(this.y,0,height);
```
