import fs from 'fs';
fs.rename("appendNew.txt", "appendNew.js",(err)=>{
    if(err) return console.log(err);
    console.log("File has been changed");
})