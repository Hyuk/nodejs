//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(request, response){
    response.send("<h1>I am Iron Man</h1>");
});

app.listen(3000, function(){
    console.log("I love you 3000");
});
