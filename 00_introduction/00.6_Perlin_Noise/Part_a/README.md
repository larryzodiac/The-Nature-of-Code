# One Dimensional Noise
In this exercise we want to draw an ellispe that moves (re-draws) itself along the x-axis at different points, however, we want it to be smoother, i.e. doesn't jump randomly around the screen.

We will be looking at one dimensional noise.

We approach this much like that of the Gaussian distribution exercises, updating the x-axis location.

```
ellipse(this.x, height/2, 50, 50);
```

So by our understanding so far, we know to replace `random()` with `noise()`

But Perlin noise works differently, which we'll see later.

Because we want to draw muliple ellispses, we will be moving into using classes again.

We have a familiar setup we've seen before.

```
function Walker() {

  this.x = width/2;
  
  this.display = function() {
    ...
  }
  this.walk = function() {
    ...
  }
}
```

A class, a `setup()` and `draw()`

```
myWalker;

function setup() {
  myWalker = new Walker();
}

function draw() {
  myWalker.display();
  myWalker.walk();
}
```

With instantiated objects and behavioural calls on them.

Nothing new.

As before all our work will be done in the `this.walk` function.

## The Code

As we spoke about before, `noise()` works differently.

We know that random will output a range between a given value.

Instead, the output range of `noise()` is fixed; it always returns a value between 0 and 1.

We can think of this as one-dimensional Perlin noise as a [linear](http://natureofcode.com/book/imgs/intro/intro_07.png) sequence of values over time.

Time | Noise Value
-------- | --------
0 | 0.365 |
1 | 0.363 |
2 | 0.363 |
3 | 0.364 |
4 | 0.366 |

In order to access a particular noise value, we have to pass a specific moment in time to the `noise()` function.

So we would pass a moment in time, `xOff` to `noise()` however, we need to continuously increment `xOff` to observe the effect of the passage of time.

The value passed to _random()_ doesn't really matter, it could be 100 etc.

```
function Walker() {

  this.xOff = random(1000);

  this.walk = function() {
    this.x = map(noise(this.xOff),0,1,0,width);
    this.xOff += 0.0020;
  }
}
```

However, note `map()`

Remeber how `noise()` only returns values between 1 and 0?

Well these values are useless to us if we want to use them on a canvas.

So we use the `map()` function, it re-maps a number from one range to another:

```
new value = map(value, current min, curent max, new min, new max);
```

See [reference](https://p5js.org/reference/#/p5/map).

In this case, we know that noise has a range between 0 and 1, but we’d like to draw our circle with a range between 0 and the window’s width.

As seen in the above code.
