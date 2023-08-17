import Dexie from "dexie";

const db = new Dexie("myDatabase");
db.version(1).stores({
	messages: "++id, room, userID, message, time", // Primary key and indexed props
});

export default db;
