import fs from 'fs';
fs.copyFile("test.txt", "pizza.txt", (err)=>{
    if(err) return console.log("Error in copying the contents");
    console.log("File copied successfully");
})