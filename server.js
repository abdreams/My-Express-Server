const express = require("express");
const app = express();


app.get("/",function(req,res){
    res.send("hello");
});

app.get("/contact",function(req,res){
    res.send("contact");
});

app.get("/about",function(req,res){
    res.send("i m vaibhu daddy");
});

app.get("/aboutt",function(req,res){
    res.send("i m vaibhu daddy 2");
});

app.listen(3000, function(){
    console.log("Server started on port 3000!")
});
