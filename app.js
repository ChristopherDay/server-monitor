var db = require("./lib/db");
var ping = require("ping");
var config = require("./lib/config");
var server = require("./lib/http");
var socket = require("./lib/socket");

setInterval(() => {
	let pings = db.pings.find().forEach((host) => {
		let pingTime = new Date().valueOf();
		ping.sys.probe(host.hostname, (isAlive) => {
			let options = { online: isAlive, lastCheck: new Date().valueOf() };
			if (isAlive) {
				options.lastOnline = new Date().valueOf();
				options.pingTime = options.lastOnline - pingTime;
			}
			db.pings.update({
				id: host.id
			}, options);
		});
	});
	socket.emit("pings", db.pings.find().filter((r)=> { 
		delete r._id; return r; 
	}));
}, config.pingInterval);