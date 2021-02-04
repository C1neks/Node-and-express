var express = require('express');
var app = express();
require('dotenv').config()






app.get("/", function(req,res){
    res.sendFile(__dirname + "/views/index.html");
});


app.use(express.static(__dirname+"/public"));


// app.get("/json",function(req,res){
//     res.json({"message": "Hello json"})
// });


app.get("/json",function(req,res){
    if(process.env.MESSAGE_STYLE === "uppercase"){
        res.json({"message":"HELLO JSON"}
        )
    }
    else {
        res.json({"message": "Hello json"})
    }
});



























 module.exports = app;
