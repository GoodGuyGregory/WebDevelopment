//Step 1: create XHLHTTPrequest Object
var xhr = new XMLHttpRequest();

// Step 2: create callback function
xhr.onreadystatechange = function () {
// determines the status of 4 meaning the server is ready to
// return out request making sure we have recieved everything
// from the server
    if(xhr.readyState === 4){
    // xhr.responseText is data from the JSON objects
    // displays the object with DOM manipulation
      console.log(xhr.responseText);
    }
};
// Step 3: Opening the server XMLHttpRequest
// sidenote: in the real world this will make a call to the
// server for the actual JSON files with a prewritten script

xhr.open('GET', 'data/employees.json');

// Step 4:Send the request
xhr.send();
