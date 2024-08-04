const { CONNREFUSED } = require("dns");
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname , 'crud');
// const filePath = dirPath+'/car.txt'
const filePath = `${dirPath}/car.txt`


// fs.writeFileSync(filePath , 'My favourite car name is BMW M5 competition');


// For read file Both methods given below are valid for read file in string if you dont write utf8 in first 
// method or you cant write item.toString() method then it will give you buffer with hexadecimal codes

// fs.readFile(filePath , 'utf8' , (err , item) => {
//     console.log(item);
// })

// fs.readFile(filePath , (err , item) => {
//     console.log(item.toString());
// })


// fs.appendFile(filePath , ' , and i also love BMW for its drifting' , (err) => {
//     if(!err){
//         console.log("File is updated successfully");
//     }
//     else{
//         console.log("There is an error in file updation");
//     }
// });


// fs.rename(filePath , `${dirPath}/BMW.txt` , (err) => {
//     if(!err){
//         console.log("File is successfully renamed");
//     }

//     else{
//         console.log("There is an error in file for rename");
//     }
// });


fs.unlinkSync(`${dirPath}/BMW.txt`);