## Basics of Making sites interactive  

  * Selecting elements on the page  
  * Manipulating elements  
  * Listening for user actions  

## Events  

Basic events check [MDN](https://developer.mozilla.org/en-US/docs/Web/Events)

event handlers and listeners can peculate up the DOM back to the document this is called ***bubbling*** and allows us to manipulate ancestor elements.This ***bubbling*** technique will allow users to keep a DRY programming and coding style to allow less handlers on child Elements.

**Laptop/Desktops**  

  * click
  * dblclick  
  * mousedown  
  * mouseup  
  * mousemove  
  * mouseover  
  * mouseout  

**SmartPhones/Tablets**  

  * touchstart
  * touchmove  
  * touchend  

## DOM Traversal Concepts  

Referencing elements near each other on the DOM tree.  

the code snippet below will remove a paragraph element from the DOM's parent element of that paragraph.  

the problem here is that it would be easier to target the specific parent by using the `parent.removeChild(paragraph);`

**Basics**  

```JavaScript
  let paragraph = document.getElementById('myParagraph');
  //removes the child element from the Parent
  parent.removeChild(paragraph);

```  
**parentNode**  

```JavaScript
  let paragraph = document.getElementById('myParagraph');
  //lets a variable hold the unknown parent value
  let parent = paragraph.parentNode;

  //removes the child element from the known/unknown parent element
  parent.removeChild(paragraph);

```
