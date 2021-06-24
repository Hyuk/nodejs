//jshing esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(req, res){
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);
    var bmiResult = (weight / (height / 100)) / (height / 100);
    res.send("Your BMI is " + bmiResult);
});

app.listen(3000, function(){
    console.log("I love you 3000");
});