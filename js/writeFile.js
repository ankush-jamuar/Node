import fs from 'fs';
const data = {
    name: "Ankush",
    marks: 99,
    city: "Delhi"
};
const somedata = JSON.stringify(data);
fs.writeFile('write.json', somedata, (err)=>{
    if(err){
        console.log(`Error writing file: ${err}`);
    }
    else{
        console.log('File written successfully');
    }
})