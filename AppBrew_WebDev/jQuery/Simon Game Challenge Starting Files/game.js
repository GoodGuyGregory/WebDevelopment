// Test Connection to the site
// alert("Game Connected ");
// Array
let buttonColors = ["red", "blue", "green", "yellow"];

// Game Pattern Array
let gamePattern = []


// Sequence Function 
function nextSequence() {
    // creates random number from 0-3
    randomNumber = Math.ceil(Math.random() * 4)

    // adds that random number to the button colors array 
    let randomChosenColor = buttonColors[randomNumber];

    // adds a flash animation when the id is selected
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio('../sounds/' + randomChosenColor + '.mp3');
    audio.play();

    //adds the random color options to the game array
    gamePattern.push(randomChosenColor)

}