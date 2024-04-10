var express=require("express")
var bodyparser=require("bodyparser")
var mongoose=require("mongoose")

const app=express()

app.get("/",(req,res)=>{
    res.send("successfully connected to 5000")
}).listen(5000)

console.log("listening on port 5000")

