const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname , 'public');

app.get('' , (_ , res) => {
    res.sendFile(`${publicPath}/home.html`);
})

app.get('/about' , (_ , res) => {
    res.sendFile(`${publicPath}/about.html`);
})

app.get('*' , (_ , res) => {
    res.sendFile(`${publicPath}/PageNotFound.html`);
})


app.listen(3000 , () => {
    console.log("Server is started at 3000");
})