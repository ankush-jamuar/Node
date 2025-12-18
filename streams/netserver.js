import { createServer } from 'net';
const server = createServer((socket)=>{
    console.log("Client connected");

    socket.on("data", (data)=>{
        console.log("Received message ",data.toString());
        socket.write("Hello from the server");
    })
    socket.on("end", ()=>{
        console.log("client disconnected")
    })
})
server.listen(3000);