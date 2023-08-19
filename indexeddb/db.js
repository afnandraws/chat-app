import Dexie from "dexie";

const db = new Dexie("myDatabase");

db.version(1).stores({
	messages: "++id, room, socketID, message, time, username", // Primary key and indexed props
});

// Dexie.getDatabaseNames(function (names, cb) {
// 	console.log("database names: ", names);
// 	names.forEach(function (name) {
// 		var db = new Dexie(name);
// 		db.delete()
// 			.then(function () {
// 				console.log("Database successfully deleted: ", name);
// 			})
// 			.catch(function (err) {
// 				console.error("Could not delete database: ", name, err);
// 			})
// 			.finally(function () {
// 				console.log("Done. Now executing callback if passed.");
// 				if (typeof cb === "function") {
// 					cb();
// 				}
// 			});
// 	});
// });

export default db;
