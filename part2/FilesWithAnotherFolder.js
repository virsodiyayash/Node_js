const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname , 'files');

for(i = 0 ; i < 5 ; i++){
    fs.writeFileSync(dirPath+"/hello"+i+".txt" , "I am a future billionaire");
}

fs.readdir(dirPath , (err , files) => {
    // This statement prints all files in an array
    // console.log(files);   


    // If we want to print files without array so we have to write for each loop 

    files.forEach((items) => {
        console.log(items);
    })
})