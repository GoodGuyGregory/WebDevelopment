var lover1 = prompt("Enter Your Names for Love: ");
var lover2 = prompt("Enter Your Names for Love: ");

var loveScore = Math.random();
// Makes the score 1-100:
loveScore *= 100;
loveScore = Math.floor(loveScore) + 1;
alert("Your Love Score is : " + loveScore + "%");

// Conditionals based on Love Score Values:
// Conditionals in JavaScript
//  === is Equal, == excludes data types
// !== not Equal
// > greater than, >= greater than equal to
// < less than, <= less than equal to

// Combining Comparators
//  && AND, || OR, !

if (loveScore > 70 ) {
  alert("Your Love Score is : " + loveScore + "%" + "You love eachother like Kanye Loves Kanye");
}
if (loveScore > 30 && loveScore <= 70) {
  alert("Your Love Score is : " + loveScore + "%");
}
if(loveScore <= 30){
  alert("Your Love Score is: " + loveScore + "%" + "You two go together like Oil and Water")
}
