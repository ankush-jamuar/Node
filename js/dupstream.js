import fs, { WriteStream } from 'fs';
const writeStream = fs.createWriteStream("wstream.txt", "utf8");
writeStream.write("This is the data inserted uisng creatWriteSteam");
writeStream.end();
writeStream.on("finish",()=>{
    console.log("No data left to be written");
    const readStream = fs.createReadStream("wstream.txt", "utf8");
    readStream.on("data", (chunk)=>{
        console.log(chunk);
    })
    readStream.on("end", ()=>{
        console.log("All data is read. Nothing left to be read");
    })
    readStream.on("error", (err)=>{
        if(err) return console.log("Error in reading from the file");
    })
})
writeStream.on("error",(err)=>{
    if(err) return console.log(`Error writing into the file: ${err}`);
})