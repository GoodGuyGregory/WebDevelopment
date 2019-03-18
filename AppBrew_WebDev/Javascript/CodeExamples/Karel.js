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
