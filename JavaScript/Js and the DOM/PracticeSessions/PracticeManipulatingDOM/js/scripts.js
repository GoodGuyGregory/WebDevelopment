// 1: Set the text of the <h1> element
// In order to select this element we must querySelector the element
//Sets a variable with the name title to contain the h1 elements
const title = document.querySelector('h1');

//this variable's content is then changed with the textContent attribute/property
// to be the new string which will read "My Activities"
title.textContent = "My Activities List";

// 2: Set the color of the <h1> to a different color

title.style.color = 'dodgerblue';


// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
//  selected the class .desc using the querySelector attribute
const desc = document.querySelector('.desc');
// innerHTML will allow you to manipulate the HTML
desc.innerHTML = " A list of <em>fun</em> things I want to do today";


// 4: Set the class of the <ul> to 'list'
const list = document.querySelector('ul');

//using the className attribute should allow the class name to be changed
list.className = 'list';

// 5: Create a new list item and add it to the <ul>

//creates a new element with the createElement property
const item = document.createElement('li');

// adds the content for the new elementfor the ul
item.innerHTML = "<input> Eat ice cream";

// adds the new element by using the appendChild method
// this adds the li item to the ul as an additional child element
list.appendChild(item);


// 6: Change all <input> elements from text fields to checkboxes
//Gets elements by the tage type of input
const input = document.getElementsByTagName('input');
//iterates through the loop and changes the input types to checkboxes
for (let i = 0; i < input.length; i++) {
//above the input.length basically counts the amount of input items on the page
  input[i].type = 'checkbox';
}

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>

//creates the button object
const deleteButton = document.createElement('button');

//creates a button with text "Delete"
deleteButton.textContent = 'Delete';

//Selected the div with the querySelector
const extra = document.querySelector('.extra');

//appends the button element inside the extra div
extra.appendChild(deleteButton);


// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button

//creates a container object to help with the selection process
const container = document.querySelector('.container');

//adds an addEventListener when the button is clicked
deleteButton.addEventListener('click', ()=> {
  //container will remove upon clicking the delete object
  container.removeChild(extra);
})
