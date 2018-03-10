# Four Outcomes

In this exercise we implement what we have learned about p5.js and object orientated programming.

Creating a point which will move randomly in four possible directions.

## The Code

As before we create a class, a setup, and a draw.

```
function Walker() {
  // Characteristics
  // Behaviours
}

setup() {
  // Define initial environment properties
}

draw() {
  // Execute code every frame
}
```

Once we define all the neccesities in the setup, like a canvas, we can start giving our class it's propreties.

```
function Walker() {
  // Characteristics
  this.x = width/2;
  this.y = height/2;
  
  // Behaviours
  this.walk = function() {...}
  ...
}
```

When we have our basic class and setup done we can move on to testing it.

Again, we go and declare our object, then we instantiate it.

```
var walker

setup() {
  walker = new Walker();
}
```

Once this is done we can test it in the console of our browser, simply type `mover` and see what happens.

Now that we have everything set up, we can start to implement our random walker.

In our class behaviours we create a walk function:

```
this.walk = function() {}
```

Then we get our four random outcomes using a variable `direction`

Using the built-in JavaScript `random()` function we can pass it a number and get back and interger between the number and zero.

But we want the random numbers to be whole numbers: 0, 1, 2, and 3.

So we use the `floor()` function to calculate the closest integer value that is less than or equal to the value of the parameter. 

```
this.walk = function() {
  var direction = floor(random(4));
  if(direction === 0) {
    this.x++;
  }
  else if (direction === 1) {
    this.x--;
  }
  else if (direction === 2) {
    this.y++;
  }
  else {
    this.y--;
  }
}
```

Then we simply use a series of `if` `else` statements to check the outcome and move our walker object's position accordingly.
