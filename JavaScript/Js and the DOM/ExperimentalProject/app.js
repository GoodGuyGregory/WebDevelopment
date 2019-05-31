const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptioninput = document.querySelector('input.description');
const descriptionp = document.querySelector('p.description');
const descriptionButton = document.querySelector('descriptionButton');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('input.addItemButton');
const removeItemButton = document.querySelector('input.removeItemButton');
const listItems = document.getElementsByTagName('li');

for (let i = 0; i < listItems.length; i += 1) {
    // adds an Event Listener on the listitems on the page for mouseover event
  listItems[i].addEventListener('mouseover', () => {
    listItems[i].textContent = listItems[i].textContent.toUpperCase();
  });
  // adds an Event Listener for when the mouse leaves
  listItems[0].addEventListener('mouseout', () => {
    listItems[0].textContent = listItems[0].textContent.toUpperCase();
    });
}

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
