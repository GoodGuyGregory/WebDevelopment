//Creates Object Dynamically
//Create the "Reveal Spoiler" Button
const $button = $('<button>Reveal Spoiler</button>');
//Append to web page
$('.spoiler').append($button);

//Hide the spoiler stylesheet
$('.spoiler span').hide();
//when the button is pressed show the spoiler text
$('.spoiler button').click(function(event){
  //show the spoiler text
  $(this).prev().show();
  //Hide the "Reveal Spoiler" Button
  $(this).hide();
});

// Event Handlings in jquery
// .click()
// .mouseover()
// .keypress()
// .focus()

// .on() allows multiple event Handlings
//Event Delegation: adds events on the parent method and
// not the children methods the process of moving an event from a children
// to a parent element is termed event propagation

//Event Object: Fomat
// element.on('click', functinon(event) {
  //do something with event on click
// });
