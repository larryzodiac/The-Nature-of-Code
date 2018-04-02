# Vector Magnitude
In the previous exercises we saw how to manipulate the length of vectors.

These lengths are known as a vector's `magnitude`

Vector magnitudes are written as `||v→||`

But how do we find the exact measurement in pixels of our vector's magnitude?

On screen, we can only move in the x and y directions, working like graphs.

To remind ourselves, vectors have x and y components, but the vectors themselves are the _distance_ from where they start at the origin, to point at which they end, the components.

Vectors are drawn as right angled triangles, with _[this distance](http://natureofcode.com/book/imgs/chapter01/ch01_10.png)_ referencing the `hypotenuse`

So, when we were moving our objects in the previous chapters, they would follow the path of the hypotenuse.

[Pythagoras' Theorem](http://natureofcode.com/book/imgs/chapter01/ch01_11.png) is used to describe the relationship between the sides and hypotenuse of a right triangle.

## The Code
In this exercise we want to create a rectangle measurement bar that will dymnaically keep track of the magnitude of our resultant vector.

This vector is the same vector from the previous exercise, found by subtracting a given location from the mouse location.

Then we display the resultant as a line, following the mouse, same as before.

```
var vectorLine = mouse.sub(centre);
```

However we want to capture the resultant vector's magnitude and keep track of it.

We use the built-in function `.mag()` to access the magnitude.

```
var m = vectorLine.mag();
```

Then we draw a rectangle and use the magnitude as it's width.

```
rect(0,0,m,10);
```

This rectangle's width will change according to how the vector follows the mouse.
