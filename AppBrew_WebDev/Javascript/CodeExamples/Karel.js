// KAREL Challenge 1:
// moves bot in a diagonal pattern with beeperSweeper
function main(){
   //your code here
   putBeeper();
   beeperSweeper();
   beeperSweeper();
   beeperSweeper();
   beeperSweeper();
}

function beeperSweeper() {
      move();
      turnLeft();
      move();
      putBeeper();
      turnRight();
   }

// KAREL Challenge 2:
// Moves the Bot across the board dropping beeper
// dropping them in a checkerboard pattern

function main(){
   beepersRight();
   goUpTurnLeft();
   beepersLeft();
   goUpTurnRight();
      beepersRight();
   goUpTurnLeft();
   beepersLeft();
   goUpTurnRight();
      beepersRight();
}

function goUpTurnRight() {
   turnRight();
   move();
   turnRight();
}

function goUpTurnLeft() {
   turnLeft();
   move();
   turnLeft();
}

// Lets The Robot Complete a right cycle
function beepersRight() {
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
}

// Lets the robot complete a left cycle.
function beepersLeft() {
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
}
