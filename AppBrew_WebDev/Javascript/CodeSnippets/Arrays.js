// Arrays
var guestList = ["Greg","Jake","Xiao","Matt","Jordyn", "Jon"];

// Prompts:
alert("Are you on the list?");
var nameSearch = prompt("What is your name?");

// Conditional Logic:
if (guestList.includes(nameSearch) === true){
    alert("Welcome come inside");
} else if (guestList.includes(nameSearch) === false) {
    alert("Sorry you are not on the list");
}

// Typical Array Methods:
// Push() : Pushes to the last position
// Pop(); Pops the first item off the list
