var express=require('express');

app=express();


app.get("/",function (req, res) {
    res.send("This is Home Page");
})

app.put("/about",function (req, res) {
    res.send("this is about page");
})

app.post("/contact",function (req, res) {
    res.send("This is contact Page");
})

app.delete("/contact",function (req, res) {
    res.send("This is contact Page");
})


app.listen(5000,function () {

    console.log("Server run success");

})