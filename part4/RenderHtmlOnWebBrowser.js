const express = require("express");
const app = express();

app.get('' , (req , res) => {
    res.send(`
        <h1>Welcome, to home page</h1>
        <a href = "/about">Go to about page</a>
        `);
});

app.get('/about' , (req , res) => {
    res.send(`
        <input type="text" placeholder="User Name" value="${req.query.name}" />
        <button>click me!</button>
         <a href = "/">Go to Home page</a>
        `)
})

app.get('/help' , (req , res) => {
    res.send([
        {
            name : 'yash',
            email : 'yash@test.com'
        },
        {
            name : 'meet',
            email : 'meet@test.com'
        },
        {
            name : 'mann',
            email : 'mann@test.com'
        },
        {
            name : 'tirth',
            email : 'tirth@test.com'
        }
    ])
})

app.listen(3000 , () => {
    console.log("server is startes at 3000");
})