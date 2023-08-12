const express = require("express")();
const http = require("http").createServer(express);
const cors = require("cors");
const { Server } = require("socket.io");

const port = 8080;

const io = new Server(http, {
	cors: { origin: "http://localhost:3000" },
});

io.on("connection", (socket) => {
	console.log(`${socket.id} connected`);
	socket.emit("hello", socket.id);

	socket.on("join_room", (room) => {
		if (io.sockets.adapter.rooms.get(room) !== undefined) {
			socket.join(room);
			console.log("worked");
		} else {
			console.log(`didn't worked`);
		}

		const data = JSON.stringify(room);
		console.log(data);
	});

	socket.on("create_room", (room) => {
		if (io.sockets.adapter.rooms.get(room) === undefined) {
			socket.join(room);
			console.log(io.sockets.adapter.rooms.get(room));
		}
	});
});

http.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
