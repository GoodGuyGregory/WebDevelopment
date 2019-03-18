function getMilk(money) {
  var amountOfMilk = Math.floor(money / 1.5);
  var changeLeft = money % 1.5;
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("The Robot Bought" + amountOfMilk + "bottles of milk");
  console.log("Here is the change" + "$" + changeLeft);
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

  return changeLeft;
}

// Test Functions
getMilk(12);

// Tests new Features
var change = getMilk(14);
