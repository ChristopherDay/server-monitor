var http = require("http");
var fs = require("fs");
var config = require("./config");

http.createServer((req, res) => {
	switch (req.url) {
		case "/":
		case "/index.html":
			var file = fs.readFileSync("index.html");
		break;
		case "/style.css":
			var file = fs.readFileSync("./node_modules/bulma/css/bulma.css");
		break;
		case "/jquery.js":
			var file = fs.readFileSync("./node_modules/jquery/dist/jquery.min.js");
		break;
		case "/socket.io.js":
			var file = fs.readFileSync("./node_modules/socket.io-client/dist/socket.io.js");
		break;
	}
	res.end(file);
}).listen(config.serverPort);

console.log("Server started on port " + config.serverPort);