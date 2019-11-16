// hecks if the Document is ready to utilize Jquery on the project
// $(document).ready(function () {
//     // using jQuery to Select H1s
//     $("h1").css("color", "blue");
// })


$("h1").addClass("big-title margin-50")

//  you can also use methods such as .hasClass("margin-50") on specific items to determin if the class
// does indeed exist on items

$("button").text("Bye Falisha")

// jQuery can also manipulate attributes of items as well. 

$("img").attr("src");

$("a").attr("href", "https://www.yahoo.com")

//  adds an event listener to all of the h1s and allows for the click function to be called on them

$("h1").click(function () {
    $("h1").css("color", "purple")
})

// Vanilla JS way of adding a click listener to each of the button objects 
/*
for (var i = 0; i < 5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        document.querySelector("h1").style.color = "purple";
    });
}
*/
// Clearly this way above is a waste of time and SUCKS ASS.....

// Much easier way of coding the same damn thing with jQuery is below.....
$("button").click(function () {
    $("h1").css("color", "blue")
});

// simple code that will console log the events of the keyboard into the console
$("input").keypress(function () {
    console.log(event.key);
})

// Challenge time: 
//  Add some jQuery that will change the overall text of the H1 when a user types something on 
// their keyboard

//  This will require two actions an event listener for the Key menthod and 
//  a method that will change the heading of the h1 element upon action

$(document).keypress(function (event) {
    // TESTS THE EVENT LISTENER
    // console.log(event.key);
    $("h1").text(event.key)
})

// Simpler way of adding event listeners with less verbose code
$("h1").on("mouseover", function () {
    $("h1").css("color", "green")
})