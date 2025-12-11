import fs from "fs";
const data = "This is some data.";
fs.appendFile("append.txt", data, (err) => {
  if (err) return console.log("Some error ", err);
  console.log("data hass been appended successfully");
  const readData = fs.readFileSync("append.txt", "utf8");
  console.log(readData);
});
