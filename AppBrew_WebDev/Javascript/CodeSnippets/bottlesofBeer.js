// Bottles of Beer on the Wall:
// This function will print all of the lyrics
// to the bottles beers on the wall song

function beer(){
  var numberOfBottles = 99;
  while (numberOfBottles >= 0) {
       var bottleWord = "bottle";
       if (numberOfBottles === 1) {
           bottleWord = "bottles";
       }
       console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
       console.log(numberOfBottles + " " + bottleWord + " of beer,");
       console.log("Take one down, pass it around,");
        numberOfBottles--;
       console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
     }
   console.log("No More bottes of Beer on the wall!");
   alert("Getting Drunk with a For Loop is easier");

}
