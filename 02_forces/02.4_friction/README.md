# Friction
Some simple things to note on looking at equations: 
```
- Evalute the right side, assign to the left side.
- Are we talking about a vector or a scalar?
- When variables/letters are placed beside one another, it means multiply.
- Always pay attention to symbols above variables (vector notation? magnitude notation?).
```

Friction is a _dissipative_ force.

This means that the total energy of a system decreases when an object is in motion.

In this exercise we will only look at kinetics.

```
Friction = -1 * μ * N * v
```

See [figure](http://natureofcode.com/book/imgs/chapter02/ch02_03.png) from The Nature of Code by Daniel Shiffman.

## The Code

Now we must figure out how to divide up the equation and evaluate it all.

If we take a look at velocity, we notice that friction acts in the **opposite** direction, i.e slowing it down.

This is the first part of the function we take a look at 

```
-1 * v
```

We say -1 times the velocity _unit_ vector (Remember normalisation).

We take a reference to the velocity of the mover object using _p5.Vector,_ and multiply it by -1, giving us the friction.

Then normalise the result as the magnitude of friction is not associated with how fast it moves, and we want to easily scale friction.

```
var friction = p5.Vector.mult(mover.velocity,-1);
friction.normalize();
```

Going back to the equation we look at 

```
μ * N
```

This describes _magnitude_ in the formula.

Note that `μ` is actually the Greek letter _mu._

`μ` is used to describe the **coefficient of friction**.

The coefficient of friction establishes the strength of a friction force for a particular surface. The higher it is, the stronger the friction; the lower, the weaker. 

In our code we abbitrarily set the coefficient based on what we want to simulate.

```
var c = 0.5;
```

`N` refers to the **normal force**.

This describes the force perpendicular to the object’s motion along a surface.

Think back to Newton's third law:

```
For every action there is an equal and opposite reaction.
```

For example, a truck driving along a road is pushing down against the road _with_ gravity.

And Newton's third law tells us that the road pushes back.

This _pushing back_ is the normal force.

The greater the gravitational force, the greater the normal force.

Therefore we now have:

```
var c = 0.5;
var normal = 1;
var frictionMag = c * normal;
```

We then take the unit vector (friction) and multiply it by magnitude, giving us our resulting force vector:

```
var friction = p5.Vector.mult(movers[i].velocity,-1);
friction.normalize();
friction.mult(frictionMag);
```

We can now apply the force:

```
movers[i].applyForce(friction);
```
