var express = require ("express");

var PORT = process.env.PORT || 8080;
var app = express ();

app.get("/:operation/:firstNum/:secondNum", function(req, res){

    var operation = req.params.operation;
    var firstNum = parseInt(req.params.firstNum);
    var secondNum = parseInt(req.params.secondNum);
    var result;

    switch (operation) {
        case "addition":
            result = firstNum + secondNum;
            break;
        case "subtraction":
            result = firstNum - secondNum;
            break;
        case "multiplication":
            result = firstNum * secondNum;
            break;
        case "division":
            result = firstNum / secondNum;
            break;
        default:
            result =  "sorry! limited operation choices are available at this moment!";
    }

    res.send(result.toString());
});

app.listen(PORT, function(){
    console.log("the app is connected on "+ PORT);
});