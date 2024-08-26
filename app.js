const http = require("http");
const { Server } = require("socket.io");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const validationRouter = require("./routes/chat/validation");
require("./db/config");

const app = express();
const PORT = process.env.PORT || 12000;

// server initialization
const server = http.createServer(app);
const io = new Server(server, {
    // cors configuration
    cors: {
        origin: "*",
        credentials: true,
    },
});

// middlewares
app.use(cors({ origin: "*", credentials: true }));
app.use("/chat/validataion", validationRouter);
app.use(express.json());

// api routes
app.get("/", (req, res) => {
    res.send("Welcome to our backend at port " + PORT);
});

// socket connectin handeling
io.on("connection", (socket) => {
    console.log("A user connected: " + socket.id);

    socket.on("chat message", (mes) => {
        console.log(socket.id + ": " + mes);
    });

    // handling the disconnect event on the socket
    socket.on("disconnect", () => {
        console.log("User disconnected: " + socket.id);
    });
});

server.listen(PORT, () => console.log("Server started at port " + PORT));
