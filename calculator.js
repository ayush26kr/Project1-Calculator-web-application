//jshint esversion:6
const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended: true})); //body parser works with express
//create a root route get method with app.get()
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html"); //__dirname will provide the path
});
app.post("/",function(req,res){
  var num1=Number(req.body.num1);
  var num2=Number(req.body.num2);

  var result=num1+num2;

  res.send("The result of calculation is " + result);
});

app.listen(3000,function(){
  console.log("Server is running on port 3000");
});
