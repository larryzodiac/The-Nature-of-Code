# Acceleration Towards Mouse (Array of objects)
This exercise's class is identical to the previous exercise.

All we wish to do here is create numerous objects using an _array of objects._

## The Code
As mentioned, the only differences here lie within the `setup()` and `draw()`

Instead of declaring a single object variable, we do so as an array.

```
var myWalkers = []
```

From here, we initalise the objects the same way but we use a loop in order to populate the array.

```
function setup() {
  for (var i = 0; i < 20; i++) {
    myWalkers[i] = new Walker();
  }
}
```

Then, in the draw we need to call functionality on each and every object in the array.

We do this using a loop again.

```
function draw() {
  for (var i = 0; i < myWalkers.length; i++) {
    myWalkers[i].update();
    myWalkers[i].boundary();
    myWalkers[i].display();
  }
}
```

Now we have twenty ball objects drawn on-screen folowing the mouse!
