/*
  The <ul> stored in the variable list has a click event listener
  that targets each <button> in the list.
  Complete the code to add a class of highlight to
   a <p> element that's an immediate previous sibling
   of the button being clicked./
*/

var list = document.getElementsByTagName('ul')[0];

list.addEventListener('click', function(e) {
  if (e.target.tagName == 'BUTTON') {
    let li = e.target.previousSibling;
    li.className = "highlight";
  }
});
