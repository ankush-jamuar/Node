import fs, { WriteStream } from 'fs';
const writeStream = fs.createWriteStream("wstream.txt", "utf8");
writeStream.write("This is the data inserted uisng creatWriteSteam");
writeStream.end();
writeStream.on("finish",()=>{
    console.log("No data left to be written");
})
writeStream.on("error",(err)=>{
    if(err) return console.log(`Error writing into the file: ${err}`);
})