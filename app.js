var db = require("./lib/db");
var ping = require("ping");
var config = require("./lib/config");
var server = require("./lib/http");
var socket = require("./lib/socket");
var dns = require("./lib/dnsLookup");

var pingHosts = (updateDNS) => {	
	db.hosts.find().forEach((host) => {
		let pingTime = new Date().valueOf();
		ping.sys.probe(host.hostname, (isAlive) => {
			let options = { online: isAlive, lastCheck: new Date().valueOf() };
			if (isAlive) {
				options.lastOnline = new Date().valueOf();
				options.pingTime = options.lastOnline - pingTime;
			}

			if (updateDNS) {
				console.log("updateDNS", updateDNS);
				dns(host.hostname, (ip) => {
					if (ip) options.ip = ip;
					db.hosts.update({
						_id: host._id
					}, options);
				});
			} else {
				db.hosts.update({
					_id: host._id
				}, options);
			}

		});
	});
	socket.emit("hostChange", db.hosts.find());
}

setInterval(() => {
	pingHosts();	
}, config.pingInterval);

setInterval(() => { 
	pingHosts(true); 
}, config.updateDNS);

socket.on("connection", (client) => {
	client.emit("hostChange", db.hosts.find());
	client.on("updateIPs", ()=> {
		pingHosts(true);
	});
});

pingHosts(true);