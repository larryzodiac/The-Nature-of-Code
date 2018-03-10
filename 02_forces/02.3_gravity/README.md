# Gravity
In Newton's second law we observed that the samller, the object the faster it moves.

This is not the case for gravity. 

With all objects, they will fall at the same acceleration, as observed by Galileo.

So, we must calculate gravity with respect to an object's mass.

If a force is scaled by mass alone, it is canceled out when acceleration is divided by mass.

We implement this by multiplying our gravity by mass.

```
var gravity = createVector(0,0.1*m);
```

## The Code

This skecth exercise is the same as it's predecessors with minor changes.

We observed the above application of gravity to forces.

We also multiply the mass of our ellipses by three to emphasise mass and differenciation on-screen.

```
ellipse(this.location.x,this.location.y,this.mass*3,this.mass*3);
```

What is new is the additon of muliple objects. We create an arrry and populate it with new mover objects using loops in setup.

Then we apply their behavaiours through loops in the draw.

```
for (var i = 0; i < 20; i++) {
  movers[i] = new Mover(Math.floor(random(5,20)))
}
```

Simple changes.
