# Applying and Accumulating Force
To re-cap, Newton's second Law:

```
Force equals mass times acceleration.
```

We looked at an alternative way to look at his equation:

```
A = F / M
```

_A = F_: Acceleration is directly porportional to force, and inversely porportional to mass.

Meaning that if you are pushed, and the harder you _are_ pushed, the faster you'll accelerate.

_F / M_ : The bigger you are, then the slower you will move.

We noted that in our programming case, mass is the number of pixels on screen.

_How do we apply this to p5.js?_

We say that on-screen, all our objects have a mass equal to 1.

```
F / 1 = F
```

And So:

```
A = F
```

So as we look back to how we control movement of objects we note that acceleration was key to that movement.

Thinking back to vectors, **V**elocity is adjusted by **A**cceleration _and_ **L**ocation by **V**elocity.

or `V.A,L.V` as we remember.

Therefore, as acceleration was where it all began, now we see forces as the true begining of motion.

## The Code

So our goal is to add forces to an object

```
mover.applyForce(wind)
```

In this function we pass the force to be assigned to acceleration, this is the literal translation of force equals acceleration from Newton (Just no mass, we'll do that later).

```
this.applyForce = function(force) {
  this.acceleration.add(force);
}
```

Thus, we call our functions on the mover object in the draw method , **Applying our forces**.

However, note that we say `this.acceleration.add(force);` instead of `this.acceleration = force`

This is because we don't want multiple forces overriding each other, instead as multiple forces may act upon an object we simply add them all togethor before applying them:

```
Net Force equals mass times acceleration
```

This is **force accumulation.**

And one more thing:

As we know, we are accumulating force, however, wind for example may change force at any given moment.

So, when we accumulate forces, we don't want, for example, a northernly wind applied then a westerly on top of that at the same moment in time.

Acceleration in our code is simply calculated based on the environmental forces present at a moment in time, or, every frame.

We need to reset our acceleration every time we aaccumulate a force and apply it.

```
this.acceleration.mult(0);
```

In the _update()_ function we use the _.mult()_ to reset acceleration to zero after we implement _V.A,L.V_


