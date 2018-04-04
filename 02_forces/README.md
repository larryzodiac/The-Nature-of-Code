# Forces
Understanding how to make objects move around a screen and respond to a variety of environmental forces.

Isaac Newton's laws of motion:

```
A force is a vector that causes an object with mass to accelerate.
```

## Exercises in this folder
1. [Applying/Accumilating Force](02.1_applying_accumalating_force)
2. [Mass](02.2_mass)
3. [Gravity](02.3_gravity)
4. [Friction](02.4_friction)
5. [Liquid](02.5_drag)
6. [Wind Chimes](02.ex_wind_chimes)

## Newton's First Law
```
An object at rest stays at rest and an object in motion stays in motion.
```

However, for the sake of our programming, we can expand this by saying:

```
An object at rest stays at rest and an object in motion stays in motion..

..at a constant speed and direction unless acted upon by an unbalanced force.
```

It is important to note, that in the absence of forces there is no force required to keep an object moving.

An object's velocity will only remain constant in the absence of any force, or, if the forces that act on it [cancel each other out](http://natureofcode.com/book/imgs/chapter02/ch02_01.png), i.e the total force applied adds up to zero.

This is referred to as the _equilibrium_. The faling ball will reach a terminal velocity (that stays constant) once the force, for example, of air resitance equals the force of gravity.

For p5.js Daniel Shiffman then restates Newton's first law as:

```
An object’s PVector velocity will remain constant if it is in a state of equilibrium.
```

## Newton's Third Law
```
For every action there is an equal and opposite reaction.
```

This is not to say that one force causes another.

Say, for example, that you push against a wall. The push includes both forces, that which you exert, and that of the wall.

This is referred to as _action/reaction pair._

```
Forces always occur in pairs. The two forces are of equal strength, but in opposite directions.
```

Note that theses forces do not canel each other out. 

Forces act on different objects, meaning just as two forces are equal, it doesn’t mean that the movements are equal.

The force you exert is equal and opposite to the force exerted on your hands.

```
If we calculate a PVector f that is a force of object A applied on object B, 

we must also apply the force 'PVector.mult(f,-1);' that B exerts on object A.
```

Note we need not always follow the programming rule above as it will depend on what we want to simulate.

For example, if we want to simualte wind, we wouldn't bother to programme the the force that an object exerts back to the air.

## Newton's Second Law
The most important law:

```
Force equals mass times acceleration.
```

**F = M x A**

Why is it so important? An alternative way to think about it:

**A = F / M**

_A = F_: Acceleration is directly porportional to force, and inversely porportional to mass.

Meaning that if you are pushed, and the harder you _are_ pushed, the faster you'll accelerate.

_F / M_ : The bigger you are, then the slower you will move.

Note:

```
- Mass is the measure of the amount of matter of an object.
- Weight is the force of gravity on an objcet (w = m * g).
- Density is defined as the amount of mass per unit of volume.
```

In our programming case, mass is the number of pixels on screen.

How do we apply this to p5.js? 

Advance to [Applying & Accumilating Force.](02.1_applying_accumalating_force)
