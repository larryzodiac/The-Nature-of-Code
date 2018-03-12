# Vector Addition
From the previous exercise we observed moving the ball around the screen using vectors.

```
position.x = position.x + velocity.x;
position.y = position.y + velocity.y;
```

What we were essentially doing is adding two vectors togethor.

For every frame:

> New location = current location + velocity.

The way we move on a canvas is through the x-axis and y-axis respectively.

We move a certain amount across x and a certain amount down y etc.

So motion in two dimensions is almost akin to Pythagoras' theorem.

In this case the hypotenuse is the length of the new vector.

See this example of [vector addition](http://natureofcode.com/book/imgs/chapter01/ch01_06.png).

Let’s say we have the following two vectors: u(5,2) and v(3,4)

In maths notation:

```
w→ = u→ + v→
```

So we say:

```
wx = ux + vx
wy = uy + vy
```

Which we evaluate:

```
wx = 5 + 3
wy = 2 + 4
```

```
wx = 8
wy = 6
```

This is how we add vectors togethor, the new vector is thus:

```
w→ = (8, 6)
```

## The Code
With this understanding we can change the way we add two vectors using `add()`

This:

```
location.x = location.x + velocity.x;
location.y = location.y + velocity.y;
```

Turns into this:

```
location.add(velocity);
```
