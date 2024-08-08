const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname , 'public');

app.set('view engine' , 'ejs');

app.get('/' , (_ , res) => {
    res.sendFile(`${publicPath}/home.html`);
})

app.get('/profile' , (_ , res) => {
    const user = {
        name : 'yash virsodiya',
        email : 'yash@patel.com',
        city : 'jamnagar',
        skills : ['php', 'js' , 'java' , 'css' , 'node' , 'react']
    }
    res.render('profile' , {user});
})

app.get('/login' , (_ , res) => {
    res.render('login');
})

app.get('*' , (_ , res) => {
    res.sendFile(`${publicPath}/PageNotFound.html`);
})

app.listen(3000 , () => {
    console.log("Server is started at 3000");
})
