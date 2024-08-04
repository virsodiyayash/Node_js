const fs = require('fs');
fs.writeFileSync("abc.txt" , 'Hello world');
// fs.writeFileSync("hello" , 'yash virsodiya');


//It gives the answer with directory only
console.log(__dirname);  //D:\Node js\Online Tutorial


//It gives the answer with directory and file name
console.log(__filename);  //D:\Node js\Online Tutorial\index2.js
