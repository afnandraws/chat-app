const express = require("express")();
const http = require("http").createServer(express);
const cors = require("cors");
const { Server } = require("socket.io");

const port = 8080;

const io = new Server(http, {
	cors: {
		origin: `https://chat-app-coral-omega.vercel.app`,
		// origin: `http://localhost:3000`,
		methods: ["GET", "POST"],
	},
});

const users = {};

function keepRoomOpen(room, time) {
	// interval to join room
	const int = setInterval(() => io.in(room), 5000);

	setTimeout(() => clearInterval(int), time);
}

io.on("connection", (socket) => {
	console.log(`${socket.id} connected`);
	socket.emit("initial_connection", socket.id);

	socket.on("join_room", (room) => {
		if (io.sockets.adapter.rooms.get(room.room) !== undefined) {
			socket.join(room.room);

			users[socket.id] = { username: room.username, room: room.room };

			// Object.values(users).filter((user) => user.room === room.room)

			io.in(room.room).emit("new_join", Object.values(users));

			socket.emit("send_room", {
				room: room.room,
			});
		} else {
			console.log(`didn't worked`);
			socket.emit("undefined_room"); //need to make this on the client side
		}
	});

	socket.on("disconnect", () => {
		// i want to emit to the
		console.log(socket.id);
		// console.log(users.hasOwnProperty(socket.id));
		// console.log(Object.values(users));
		// console.log(users[socket.id].room);

		// const room = users[socket.id];

		delete users[socket.id];

		// const temp = Object.values(users).filter((user) => room === user.room);

		io.emit("new_join", Object.values(users));
	});

	socket.on("create_room", (room) => {
		if (io.sockets.adapter.rooms.get(room) === undefined) {
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
