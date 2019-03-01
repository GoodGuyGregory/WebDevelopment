// utilizes the odd selector class
const $odd = $('a:odd');
// $odd.hide();

const $secureLinks = $('a[href^="http://"]');
// $securelinks.hide();

const $pdfs = $('a[href$=".pdf"]');

const $pdfCheckbox = $('<label><input type="checkbox"> Allow PDF downloads</label>');

$pdfs.attr('download', true);

// css method is a getter and setter method
// CamelCase
$odd.css('backgroundColor', 'lightgrey');

// add class //remove classes
$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

// Logic downloads preventer with the prevent default

$pdfs.on('click', function(event){

  //check if checkbox has been checked
  if ($(':checked').length === 0){
      // prevent download of Documentation
        event.preventDefault();
      //alert the user
      alert('Please Check the box to allow PDF downloads')
  }
  //else: allow the download
});

// makes the item unobtrusive and
// appends the item to the bottom of the ul

$('#links').append($pdfCheckbox);

// For loops are used with the each method. instead of iterations

$('a').each(function(){
  // console.log(index, $(element).attr('href'));
  const url = $(this).attr('href');
  $(this).parent().append(`(${url})`);
});
