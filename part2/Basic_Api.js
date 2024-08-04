const http = require('http');
const data = require('./Basic_Api_OTher');

http.createServer((req , res) => {
    res.writeHead(200 , {'Content-type':'application\json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(3000);