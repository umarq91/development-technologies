import WebSocket, { WebSocketServer } from "ws";
import http from "http";

const server = http.createServer((req:any,res:any)=>{
    res.end("Hi there")
})

const wss = new WebSocketServer({server})

wss.on("connection",(ws)=>{
    ws.on('error',console.error);

    ws.on('message',(message,isBinary)=>{
        console.log('received message',message)
    })
    ws.send('welcome to the server')
})



server.listen(3000,()=>{
    console.log("server is running on port 3000");
})