import http from 'http'
import fs from 'fs'
const server = http.createServer((req, res) => {
    res.writeHead(200,{'content-type':'text/html'})
    res.write("<h1 style=color:purple>Core Module</h1>")
    res.write(`<h2>HTTP SERVER</h2><p style=color:green>Working with http server<p>`)
    fs.readFile("text.txt","utf8",(err, data)=>{
        if(err) return console.log("Error")
        res.write(`<h3 style=color:red>${data}</h3>`)
        res.end()
        console.log("The user visited the page.")
    })
})
server.listen(3000, ()=>{
    console.log("The server is listening on port 3000");
})