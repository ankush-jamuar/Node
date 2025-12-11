import http from 'http';
import fs from 'fs';
const server = http.createServer((req, res)=>{
    if(req.url=='/login'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write("<h2>Welcome to login Page</h2>")
        const logmsg=`User logged in at ${new Date().toLocaleString()}\n`
        fs.appendFile('log.txt',logmsg,(err)=>{
            if(err) return console.log(err)
                console.log(logmsg);
        })
        res.end();
    }
    else if(req.url=='/home'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write("<h2>Welcome to home Page</h2>")
        res.end();
    }
    else if(req.url=='/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write("<h2>Welcome to about Page</h2>")
        res.end();
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write("<p stylee=color:red>The page you are looking for is not found</p>")
        res.end()
    }
    
});
server.listen(5000, ()=>{
    console.log("The server is listening on port 5000");
})