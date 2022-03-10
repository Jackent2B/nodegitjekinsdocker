const express = require("express")
const app = express()

app.get('/',(req,res)=>{
    res.send("This is home page")
})

app.get('/details',(req,res)=>{
    res.send("This is details page")
})

app.listen(3000,(req,res)=>{
    console.log("Server has started")
})