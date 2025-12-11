import fs from "fs";
// Asynchronously method(need the callback function)
const filepath = "data.json";
fs.readFile(filepath, 'utf8', function (err, data) {
  if (err) return console.log(`The file does not exist: ${err}`);
  const newData = JSON.parse(data);
  console.log(newData);
});




// Synchronously method(no need the callback function)
// const data=fs.readFileSync("notes.txt",'utf8');
// console.log(data);
