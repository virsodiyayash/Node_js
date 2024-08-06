const express = require("express");
const app = express();

app.get("" , (req , res) => {
    console.log("data sent by browser",req.query);
    console.log("data sent by browser",req.query.name);
    res.send("Welcome",req.query.name);
})

app.listen(3000 , () => {
    console.log("Server is started at 3000");
})