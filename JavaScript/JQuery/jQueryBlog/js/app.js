// jQuery Allows for Manipulating elements in the Dom
// Visibility:
  // fadein()/fadeout()
  // slideDown()/slideUp()
  // delay()
// Content
// Attributes
//  Styles

// ===========================================
//creating a single line of calls is called chaining

// $('#flashMessage').hide().slideDown(1000).delay(3000).slideUp();

// $('#flashMessage')
//   .hide()
//   .slideDown(1000)
//   .delay(3000)
//   .slideUp();

// // jQuery can insert/change text with getter and setters
// const title = "My First Blog Post";
// const content = "<br>This is my <strong>first</strong> post!";
//
// // Writes these variables to the page.
// $('#blogTitlePreview').text(title);
// $('#blogContentPreview').html(content);

// Hides the Message until the previewButton is clicked.

$('#flashMessage').hide();
// When Preview is clicked add the preview effects
$('#previewButton').click(function(){
  const title = $('#blogTitleInput').val();
  const content = $('#blogContentInput').val();

  $('#blogTitlePreview').text(title);
  $('#blogContentPreview').text(content);

  $('#flashMessage')
    .hide()
    .slideDown(1000)
    .delay(3000)
    .slideUp();

});
