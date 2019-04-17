# jQuery API  

## Methods:  

jQuery GET request:  
--------------------  

Typical GET request:

```JavaScript
var url = '/employees.php';  

// JSON Object  
var data = {
  firstName: "Dave",
  lastName: "Thomas"  
};  
var callback = function (response) {
  // do something with the response
};

$.get(<url>,<data>, <callback>);  
```

Programmers Shorthand Seen in the wild:  

```JavaScript  
var url = '/employees.php';  

// JSON Object  
var data = {
  firstName: "Dave",
  lastName: "Thomas"  
};  


$.get('/employees.php', {
  firstName: "Dave",
  lastName: "Thomas"
}, function (response){
  //Do something with the Data
});  
```
