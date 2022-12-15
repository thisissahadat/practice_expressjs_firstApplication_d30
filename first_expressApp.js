var express=require('express');

app=express();


app.get("/",function (req, res) {
    res.send("Hello ExpressJS");
})

app.listen(8000,function () {

    console.log("Server run success");
    
})