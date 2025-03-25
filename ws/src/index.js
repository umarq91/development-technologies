"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ws_1 = require("ws");
var http_1 = require("http");
var server = http_1.default.createServer(function (req, res) {
    res.end("Hi there");
});
var wss = new ws_1.WebSocketServer({ server: server });
wss.on("connection", function (ws) {
    ws.on('error', console.error);
    ws.on('message', function (message, isBinary) {
        console.log('received message', message);
    });
    ws.send('welcome to the server');
});
server.listen(3000, function () {
    console.log("server is running on port 3000");
});
