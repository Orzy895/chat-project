import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import { app, server } from './socket/socket.js'
import connectToDB from "./db/connectToDB.js"

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config();

const setCustomHeaders = (res, filePath) => {
    console.log('Setting custom headers for:', filePath);
    const ext = path.extname(filePath);
    if (ext.toLowerCase() === '.jpg' || ext.toLowerCase() === '.jpeg') {
        res.setHeader('Content-Type', 'image/jpeg');
    }
};

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "frontend", "dist"), {
    setHeaders: setCustomHeaders
}));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})

server.listen(PORT, () => {
    connectToDB();
    console.log(`Server running on PORT ${PORT}`)
});