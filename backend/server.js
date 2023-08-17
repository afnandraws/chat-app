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

			socket.emit("send_room", {
				room: room,
				users: "",
			});
		} else {
			console.log(`didn't worked`);
			socket.emit("undefined_room"); //need to make this on the client side
		}
	});

	socket.on("create_room", (room) => {
		if (io.sockets.adapter.rooms.get(room) === undefined) {
			console.log(room);
			socket.join(room);
		}
	});

	socket.on("send_message", (message) => {
		console.log(message);
		socket.to(message.room).emit("receive_message", { message: message });
		socket.emit("sent_message", true);
	});
});

http.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
