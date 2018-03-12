# Manually Set Probability (Array)
One technique is to fill an array with a selection of numbers, some of which are repeated.

Then choose random numbers from that array and generate events based on those choices.

## The Code

This code contains no new alterations, only we are editing the `this.walk` function.

Taking the above approach we define an array in the class _walk_ behaviour 

Then use a block of `if else` statements to act upon an evaluation of the array values chosen at random.

Below we see that 1 is stored in the array twice, making it more likely to be picked.

```
this.walk = function() {
  var probArray = [];
  probArray[0] = 1;
  probArray[1] = 1;
  probArray[2] = 2;
  probArray[3] = 3;
  probArray[4] = 3;
  ...
}
```

So, by the above logic, we will observe that there is a 40% chance of getting 1, a 20% chance of getting 2, and a 40% chance of getting 3.

```
  ...
  var index = floor(random(probArray.length));
  ...
```

Here we observe a _non-uniform distribution._
