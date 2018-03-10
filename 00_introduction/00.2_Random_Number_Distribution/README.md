# Random Number Distribution
This exercises the effect of how the random function works.

JavaScripts random number function produces what is known as a _uniform distribution of numbers._

In the Nature of Code, Daniel Shiffman says:

> All of these variations on the “traditional” random walk have one thing in common: at any moment in time, the probability that the Walker will take a step in a given direction is equal to the probability that the Walker will take a step in any direction.

## The Code
What we begin by doing is declaring an array an populating it with a loop a certain number of times in the setup.

```
var myArray = [];
var itemsInArray = 10;

function setup() {
  for(var x = 0; x < itemsInArray; x++) {
    myArray[x] = 0;
  }
}
```

Then we simulate the random distribution visually, we create a number of rectangles from the array and increase their height depending on which rectangle is chosen.

```
function draw() {
  var index = floor(random(itemsInArray));
  myArray[index]++;
  
  for(var x = 0; x < myArray.length; x++) {
    rect(x*w,height-myArray[x],w-1,myArray[x]);
  }
}
```

What we observe in this exercise is what is known as _psuedo-random numbers._

> The random numbers we get from the random() function are not truly random; therefore they are known as “pseudo-random.” They are the result of a mathematical function that simulates randomness. This function would yield a pattern over time, but that time period is so long that for us, it’s just as good as pure randomness!
