# Dealing With Mass

In this exercise we clook to complete Newton's second law by adding in Mass.

```
Force equals mass times acceleration.
```

## The Code
Simply we add an instance variable to the mover class, passing it an arguement so as to be able to create custom objects with specified masses.

```
var Mover = function(m) {
  ...
  this.mass = m;
  ...
}
```

Mass in our example is a _scalar_ and not a vector, just a number to describe the amount of matter.

So we say pixels is mass, or in our case, the radius of our circle.

```
ellipse(this.location.x,this.location.y,this.mass,this.mass);
```

Now we can apply Newton's full second law when applying our forces

```
this.applyForce = function(force) {
  var f = p5.Vector.div(force,this.mass);
  this.acceleration.add(f);
}
```

Note that we use the `p5.Vector` function, this is because we want to refrain from altering the value of the passed force, we use a created reference to that force, `f`

This ensures that when another object seeks to apply a force they are not permenantly changeding _that_ force.

So, we when divide the force by the mass `A = F / M`, we don't permanently change the force, then we accumulate the result to the acceleration.

This is how we deal with mass in Newton's second law
