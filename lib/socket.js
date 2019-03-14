var config = require("./config");
var server = require("http").createServer();
var socket = require("socket.io")(server);
var db = require("./db");
var url = require("url");

socket.on("connection", (client) => {

	client.on("newHost", (data) => {
		var host = data.hostname;
		if (host) {
			db.hosts.save({
				name: data.name,
				hostname: host
			});
			socket.emit("hostChange", db.hosts.find())
		}
	});

	client.on("deleteHost", (data) => {
		var host = data.id;
		if (host) {
			db.hosts.remove({
				_id: host
			});
			socket.emit("hostChange", db.hosts.find())
		}
	});
	
	client.on("editHost", (data) => {
		var host = db.hosts.find({ _id: data.id })[0];

		console.log(host);
		console.log(data);

		if (host) {
			if (data.hostname) host.hostname = data.hostname;
			if (data.name) host.name = data.name;
			console.log(host);
			db.hosts.update({ _id: host._id }, host);
			socket.emit("hostChange", db.hosts.find())
		}
	});

	client.on("viewHost", (data) => {
		var host = db.hosts.find({ _id: data.id })[0];
		if (host) client.emit("host", host);
	});

})

server.listen(config.socketPort);
console.log("Web socket opened on port " + config.socketPort);

module.exports = socket;
