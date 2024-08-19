const http = require('http');
const { Server } = require('socket.io');
require('dotenv').config();

const PORT = process.env.PORT || 12000;
const server = http.createServer();
const io = new Server(server, {
	cors: {
		origin: '*',
		credentials: true,
	},
});

io.on('connection', (socket) => {});

io.on('disconnect', (socket) => {});

server.listen(PORT, (req, res) => console.log('server stated at port ' + PORT));
