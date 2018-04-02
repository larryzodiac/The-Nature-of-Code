# Normalising Vectors
Since finding the magnitude of a vector, we can now expose ourselves to many other operations.

The first of which we will look at is `Normalisation`

Refering to the process of making something _standard_ or _normal._

In p5.js we say that every vector has a standard length of 1.

N.B we don't alter it's direction, but only it's length.

This turns our vector into what is known as a `Unit Vector`

For any given vector `u→`, it's _unit vector_ `u^` is calculated as follows:

```
u^ = u→ / ||u→||
```

To normalise a vector we divide it by it's magnitude.

Therefore, if the hypotenuse would be [divided](http://natureofcode.com/book/imgs/chapter01/ch01_13.png) by itself, resulting in one, the standard length.

## The Code
This exercise finds the resultant of two vectors by subtracting them, then displays the line following the mouse, nothing new.

```
var vectorLine = mouse.sub(centre);
```

However, this time we want to normailse the vector, making it's length one pixel.

You probably wouldn't be able to see it.

```
vectorLine.normalize();
```

Then we multiply the vector by fifty to make it visible on-screen.

```
vectorLine.mult(50);
```

No matter how far away, or close, the mouse moves from the centre, the magnitude of the vector will stay at fifty.
