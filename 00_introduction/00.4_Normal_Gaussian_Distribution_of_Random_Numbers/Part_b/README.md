# X-Axis + Y-Axis Distribution
In this example we distribute ellipses around the mean along the x-axis and y-axis using Gaussian Distribution.

We will make use of the in-built randomGaussian() function.

See reference.

## The Code
We are using still, the same methodolgy from _Part_a,_ X-axis distribution.

We define our random Gaussian numbers.

```
function draw() {
  var xloc = randomGaussian();
  var yloc = randomGaussian();
  ...
}
```

We define our mean and standard deviation.

```
function draw() {
  var xloc = randomGaussian();
  var yloc = randomGaussian();
  
  var xsd = 100;
  var ysd = 90;
  
  var xMean = windowWidth/2;
  var yMean = windowHeight/2;
  ...
}
```

We scale the randomGaussian() number by the standard deviation and mean.

```
function draw() {
  var xloc = randomGaussian();
  var yloc = randomGaussian();
  
  var xsd = 100;
  var ysd = 90;
  
  var xMean = windowWidth/2;
  var yMean = windowHeight/2;
  
  xloc = (xloc * xsd) + xMean;
  yloc = (yloc * ysd) + yMean;
  
  ...
  
  ellipse(xloc,yloc,5,5);
}
```

We adjust our parameters (O and 1) by multiplying them by the standard deviation and addign the mean.

Then we draw our ellipses every frame.
