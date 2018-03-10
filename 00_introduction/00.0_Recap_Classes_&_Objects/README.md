# A Re-Cap of Classes and Objects in p5.js
In p5.js things are a great deal similar to Processing 3.

However, this is a JavaScript library and ther are subtle differences

Two things are required to start using p5.js, a setup function and a draw function.

```
function setup() {
  //
}

function draw() {
  //
}
```

The _setup()_ function is called once when the program starts. 

It's used to define initial environment properties such as screen size and to load media such as images as the program starts. 

Called directly after setup(), the _draw()_ function continuously executes the lines of code contained inside its block until the program is stopped.

It runs every frame.

## The Code

To create a class in JavaScript you write the following:

```
function Name() {
  //
}
```

Following convention, all class names require a capitalised first letter.

In a class we define our data or characteristics, and our functionality or behaviours.

```
function Car() {

  // Characteristics
  this.xPos - 10;
  this.yPos = 10;
  this.colour = yellow;
  
  // Behaviours
  this.display = function() {
    fill(this.colour);
    rect(this.xPos,this.yPos,100,50);
  }
  
}
```

Note that our instance variables are denoted by _this._

Our behaviours are defined as functions as we will want to call them on class objects in our draw.

To create a new object we declare a global variable.

```
var mover;
```

Then we instantiate the object as an instance of the class.

Also applying it's behaviours.

```
function setup() {
  mover = new Mover();
}

function draw() {
  mover.display();
}
```
