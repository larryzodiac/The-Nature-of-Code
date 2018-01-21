// ------------------------------------------------- //
// 21/01/2018
// Evan MacHale - N00150552
// Interactive Graphics Module Year 3
// The Nature of Code by Daniel Shiffman
// Introduction // I.2 Random Number Distribution
// http://natureofcode.com/book/introduction/
// ------------------------------------------------- //
// Declare Array
var myArray = [];
// Decalre number of items to be in array
var itemsInArray = 10;

function setup() {
  createCanvas(500,500);
  // Populate the array with number of items
  // All w/ values of 0
  for(var x = 0; x < itemsInArray; x++) {
    myArray[x] = 0;
  }
}

function draw() {
  background('black');
  // Random index position from array
  var index = floor(random(itemsInArray));
  // Value of item in array @ position 'index' incremented
  myArray[index]++;
  // Draw rectangles
  stroke(0);
  strokeWeight(2);
  fill('lime');
  // used to calculate xPos of rects as they iterate
  var w = width/myArray.length;
  // Loop through array + draw rectangles for each index
  for(var x = 0; x < myArray.length; x++) {
    rect(x*w,height-myArray[x],w-1,myArray[x]);
  }
}
