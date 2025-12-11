import fs from 'fs';
const readStream = fs.createReadStream("rstream.txt", {encoding:"utf8", start:0, end:6});
readStream.on("data", (chunk)=>{
    console.log(chunk);
})
readStream.on("end", ()=>{
    console.log("All ddata is read. Nothing left to be read.");
})
readStream.on("error", (err)=>{
    if(err) return console.log("Error in reading from the file.")
})