# Vector Subtraction
Quite literaly the exact same as the previous exercise, except in this case we wish to subtract two vectors, using `.sub()`

The opposite of the previous rule applies.

```
w→ = u→ − v→
```

## The Code
In this example we want to draw a line that follows the mouse location, captured as a vector.

We create our vectors.

```
var mouse = createVector(mouseX, mouseY);
var centre = createVector(width/2,height/2);
```

We then create a new variable to store the _resultant vector._

```
vectorLine = mouse.sub(centre);
```

So we take the difference between two points, the mouse location and the center of the window and assign them as attributes of a line.
