var config = require("./config");
var server = require("http").createServer();
var socket = require("socket.io")(server);
var db = require("./db");
var url = require("url");

socket.on("connection", (client) => {
	client.on("newHost", (data) => {
		var host = data.hostname;
		if (host) {
			db.pings.save({
				id: db.pings.count(),
				hostname: host
			});
		}
	});
})

server.listen(config.socketPort);
console.log("Web socket opened on port " + config.socketPort);

module.exports = socket;