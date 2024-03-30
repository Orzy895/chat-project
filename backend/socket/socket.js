import { Server } from 'socket.io';
import http from 'http'
import express from 'express'

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"]
    }
})

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

const userSocketMap = {}; //{userID = socketID}

io.on('connection', (socket) => {
    console.log("user login", socket.id);
    const userID = socket.handshake.query.userID;
    if (userID != "undefined") userSocketMap[userID] = socket.id;
    //io.emit is used to send a message to all connected clients or users
    io.emit("getOnlineUsers", Object.keys(userSocketMap))
    //socket.on is used to listen to event, use for client and server side
    socket.on("disconnect", () => {
        console.log("user logout", socket.id);
        delete userSocketMap[userID];
        io.emit("getOnlineUsers", Object.keys(userSocketMap))
    })
})

export { app, io, server }