const express = require("express")();
const http = require("http").createServer(express);
const cors = require("cors");
const { Server } = require("socket.io");

const port = 8080;

const io = new Server(http, {
	cors: { origin: "http://localhost:3000" },
});

function keepRoomOpen(room, time) {
	// interval to join room
	const int = setInterval(() => io.in(room), 5000);

	setTimeout(() => clearInterval(int), time);
}

//might need to do io.on("disconnecting")

io.on("connection", (socket) => {
	console.log(`${socket.id} connected`);
	socket.emit("initial_connection", socket.id);

	socket.on("join_room", async (room) => {
		if (io.sockets.adapter.rooms.get(room) !== undefined) {
			socket.join(room);
			const users = await io.in(room).fetchSockets();
			const userArray = [];
			for (const user of users) {
				userArray.push(user.id);
			}
			socket.emit("send_room", {
				room: room,
				users: userArray,
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
		const temp = {
			message: message.message,
			room: message.room,
			time: new Date().toLocaleTimeString("en-UK", {
				hour: "2-digit",
				minute: "2-digit",
			}),
			creator: socket.id,
			username: message.username,
		};
		console.log(message);
		socket.to(message.room).emit("receive_message", temp);
		socket.emit("sent_message", true);
	});

	socket.on("post_pastMessages", (message) => {
		// if (io.sockets.adapter.rooms.get(room) !== undefined) {
		// }
	});

	socket.on("disconnecting", async () => {
		const rooms = []; //need to get the room the socket was a part of/ is disconnecting from
		// can the client side emit something before disconnecting/on disconnect
		// remove default room
		// rooms.splice(rooms.indexOf(socket.id), 1);

		console.log(rooms); // rooms socket was in

		const users = await io.in(rooms).fetchSockets();

		if (users.length === 0) {
			// keepRoomOpen(rooms, 300000);
		}
	});
});

http.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
