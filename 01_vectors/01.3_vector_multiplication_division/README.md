# Vector Multiplication & Division
When we consider multiplying, or dividing a vector we generally mean _scaling_ a vector.

When scaling in p5.js we introduce what is known as a `scalar`

If we wanted to scale a vector to say, half it's size, we know that we would say in plain English `Multiply the vector by 0.5`, _or_ `Divide the vector by 2`

A _scalar_ refers to a single value, such as an integer or a floating point number like those above.

They are as simple as saying `n = 5`, n is a scalar.

To scale a vector, we multiply/divide each component (x and y) by a scalar.

Note: w→ being the resultant vector.

```
w→ = u→ * n
```

We know vectors have an x and y component.

```
wx = ux * n
wy = uy * n
```

See diagram for written [example](http://natureofcode.com/book/imgs/chapter01/ch01_08.png) from The Nature of Code:

```
u→ =(−3,7)
n = 3
```

```
w→ = u→ * n
```

```
wx = −3 * 3
wy = 7 * 3
w→ = (−9,21)
```

## The Code
Similar to the previous exercise we want to capture the mouse location and draw a line from the centre of the screen that follows it.

However we want to _scale_ the the resultant vector, simply to exercise our knowledge of multiplication/division.

Firstly, we capture the mouse location as a vector and then, create another location vector for the centre of the screen from which to draw our line from.

```
var mouse = createVector(mouseX, mouseY);
var centre = createVector(width/2,height/2);
```

We derive the resultant vector by subtracting both vectors.

See this [diagram](http://natureofcode.com/book/imgs/chapter01/ch01_07.png) for reference.

```
var vectorLine = mouse.sub(centre);
```

Now if we draw a line using the resultant we see the line following the mouse.

```
strokeWeight(5);
stroke(100,0,200);
line(0,0,vectorLine.x,vectorLine.y);
```

However, the line is being drawn from the origin, so we translate everything on the graph.

```
translate(width/2,height/2);
```

Now to the main point of the exercise.

We say we want to half the resultant vector as before in plain English.

So we can either say:

```
vectorLine.mult(0.5);
```

_or_

```
vectorLine.div(2);
```

Either of these two built-in functions called on a vector, with these values passed, will half the length (magnitude) of the resultant vector.
