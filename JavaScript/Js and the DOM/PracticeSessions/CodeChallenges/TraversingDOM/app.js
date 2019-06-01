var removeMe = document.querySelector('.remove_me');

//sets the parent element of removeMe to the Parent Node
var parent = removeMe.parentNode;
// Removes the parentNode of the removeMe element
parent.removeChild(removeMe);
