# Chance Based Probability (Class Behaviours)
We can also ask for a random number regularly, but alter the chance of events using certain ranges.

We take the `random()` function and pass it 1.

This will return floating points between 1 and 0.

```
var r = random(1);
```

## The Code
This code contains no new alterations, only we are editing the `this.walk` function.

We can treat these numbers as percentages almost; _0.1_ equals a ten percent chance.

```
this.walk = function() {
  
  var r = random(1);
  
  if (r < 0.4) {
    this.x++;
  
  }
  
  else if (...) {...}
  ...
}
```

Here, if we recieve a value between _0.00 and 0.40,_ we increment the `x`

We say that the chance to move right across the screen is _40%_

In this exercise, we code the walker to be more likely to move to the right.
