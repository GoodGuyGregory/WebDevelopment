// const box = document.querySelector('.box');
// box.style.display = 'none';

// Jquery call allows for the css class of box to be added
// this class allows Jquery functions to be used on the element

//jQuery('.box').hide();

// shorthand:
$('.box').hide();
$('.box').show();

// oldschool selection methods include DOM calls such as
// document.getElementById('.box'); etc

// Oldschool Humorous (longwinded way
// of calling the event listener)

// const box = document.querySelector('.box');
//
// box.addEventListener('click', function(){
//   alert('You Clicked me!');
// });
//

//jQUERY:

$('.box').click(function(){
  alert('You clicked me with Jquery!');
});
