const toggleList = document.getElementById('toggleList');

// Main Parent element for all of our previously coded event handlers
const listDiv = document.querySelector('.list');
const descriptioninput = document.querySelector('input.description');
const descriptionp = document.querySelector('p.description');
const descriptionButton = document.querySelector('descriptionButton');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('input.addItemButton');
const removeItemButton = document.querySelector('input.removeItemButton');
const listItems = document.getElementsByTagName('li');

event.target.tagName

// ListDiv is the highest Ancestor Element on this Page
  // adds an Event Listener on the listitems on the page for mouseover event
  listDiv.addEventListener('click', (event) => {
// tageName returns an element's tag in all caps
    if (event.target.tagName === 'BUTTON') {
      // sets the target to a variable
      let li = event.target.parentNode;
      // moves up a tag element and gets the parent name/attributes for
      // Targeting that specific node on the DOM
      let ul = li.parentNode;
      // Removes that child based on the specific parent node
      ul.removeChild(li);
    }
  });
  // adds an Event Listener for when the mouse leaves
  // listDiv.addEventListener('mouseout', (event) => {
  //   if (event.target.tagName === 'LI') {
  //   event.target.textContent = event.target.textContent.toUpperCase();
  //   }
  // });



//console logs events that are clicked
// document.addEventListener('click', (event) => {
//   console.log(event.target);
// });

// adds addEventListener
toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';
    listDiv.style.display = 'block';
  }
  listDiv.style.display = 'none';
});

descriptionbutton.addEventListener('click', () => {
  descriptionp.innerHTML = descriptioninput.value + ':';
  descriptionp.value = '';
});

//appendChild method
// Node.addChild(<ChildElement)
addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  //appends child li
  ul.appendChild(li);
  addItemInput.value = '';
});

// Remove Child Selector
removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  li.removeChild('li');
});
