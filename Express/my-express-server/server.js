const express = require("express");

const app = express();

app.get("/", function(req, res){
  res.send("<h1>Server Response</h1>");
});

app.get("/contact", function(req,res){
  res.send("Contact me at username@gmail.com");
});

app.get("/about", function(req, res){
  res.send("<p>A little bit about me Certified music scholar. Internet fanatic. Pop culture maven. Infuriatingly humble social media buff. Bacon specialist.</p>");
});

app.listen(3000, function() {
  console.log("Server Started on Port 3000");
});
