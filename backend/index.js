const express = require("express")
const cors = require('cors')
const mongoose = require('mongoose')
const model = require("./model/user")
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

mongoose.connect("mongodb+srv://gkutsavpalaceoffical:aDnJL5N8umDqeZYy@cluster0.omk9zpt.mongodb.net/?retryWrites=true&w=majority")

var app = express()
app.use(express.json())
app.use(cors())

app.get("/register/:user/:email/:password",function(req,res){
    const {email,user,password} = req.params
    model.create({user,email,password})
    let jwtSecretKey = "hello";
    let data = {
        user,
        email
    }
 
    const token = jwt.sign(data, jwtSecretKey);
 
    res.json(token);
})
app.listen(3001)