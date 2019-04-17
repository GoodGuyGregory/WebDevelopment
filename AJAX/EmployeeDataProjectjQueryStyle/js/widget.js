//create HTTP Request Object Step 1:
var xhr = new XMLHttpRequest();

//Step 2: Add the call back ready state change 
xhr.onreadystatechange = function () {  
  if(xhr.readyState === 4){
    //Parse wont parse text and JSON Data unless it is written in the correct format
   var employees = JSON.parse(xhr.responseText);
   //creates a varaiable which will hold the contents of the page 
   var statusHTML = '<ul class="bulleted">';
   
   //Loops through the array of employees
   for (var i = 0; i < employees.length; i += 1){
      //If the Employee is in the office
     if (employees[i].inoffice === true){
      statusHTML += '<li class="in">'; 
     } else {
      statusHTML += '<li class="out">';
     }
     statusHTML += employees[i].name;
     statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};

// Step 3: Open the Request
xhr.open('GET', 'data/employees.json');
//Step 4: Add the call back
xhr.send();
 

// Challenge 2: 

//Challenge Steps
//Repeat the 4 steps of the Ajax process
//The URL for the JSON data is ../data/rooms.json
//Finished widget HTML looks like this:
//<ul class="rooms">
//<li class="full">101</li>
//<li class="empty">102</li>
//<li class="full">103</li>
//<li class="full">104</li>
//<li class="empty">105</li>
//<li class="empty">106</li>
//</ul>
//4. Complete HTML goes inside a div with the ID of roomList

//Creates request: 
//create HTTP Request Object Step 1:
var roomRequest = new XMLHttpRequest();

//Step 2: Add the call back ready state change 
roomRequest.onreadystatechange = function () {  
  if(roomRequest.readyState === 4){
    //Parse wont parse text and JSON Data unless it is written in the correct format
   var rooms = JSON.parse(roomRequest.responseText);
   //creates a varaiable which will hold the contents of the page 
   var roomsHTML = '<ul class="ConfMeetRooms">';
   
   //Loops through the array of employees
   for (var i = 0; i < rooms.length; i += 1){
      //If the Employee is in the office
     if (rooms[i].empty === true){
      roomsHTML += '<li class="empty">'; 
     } else {
      roomsHTML += '<li class="full">';
     }
     roomsHTML += rooms[i].name;
     roomsHTML += '</li>';
    }
    roomsHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};

// Step 3: Open the Request
roomRequest.open('GET', '../data/rooms.json');
//Step 4: Add the call back
roomRequest.send();