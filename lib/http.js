var http = require("http");
var fs = require("fs");
var config = require("./config");

http.createServer((req, res) => {
	switch (req.url) {
		case "/":
		case "/index.html":
			var file = fs.readFileSync("index.html", "utf-8").replace("{{SOCKET_PORT}}", config.socketPort);
		break;
		case "/admin.html":
			var file = fs.readFileSync("admin.html", "utf-8").replace("{{SOCKET_PORT}}", config.socketPort);
		break;
		case "/css/icons.css":
			res.writeHead(200, { 'Content-Type': 'text/css' });
			var file = fs.readFileSync("./node_modules/font-awesome/css/font-awesome.css");
		break;
		case "/fonts/fontawesome-webfont.eot":
			res.writeHead(200, { 'Content-Type': "application/octet-stream" });
			var file = fs.readFileSync("./node_modules/font-awesome/fonts/fontawesome-webfont.eot");
		break;
		case "/fonts/fontawesome-webfont.ttf":
			res.writeHead(200, { 'Content-Type': "application/octet-stream" });
			var file = fs.readFileSync("./node_modules/font-awesome/fonts/fontawesome-webfont.ttf");
		break;
		case "/fonts/fontawesome-webfont.svg":
			res.writeHead(200, { 'Content-Type': "application/octet-stream" });
			var file = fs.readFileSync("./node_modules/font-awesome/fonts/fontawesome-webfont.svg");
		break;
		case "/fonts/fontawesome-webfont.woff?v=4.7.0":
			res.writeHead(200, { 'Content-Type': "application/octet-stream" });
			var file = fs.readFileSync("./node_modules/font-awesome/fonts/fontawesome-webfont.woff");
		break;
		case "/fonts/fontawesome-webfont.woff2":
			res.writeHead(200, { 'Content-Type': "application/octet-stream" });
			var file = fs.readFileSync("./node_modules/font-awesome/fonts/fontawesome-webfont.woff2");
		break;
		case "/style.css":
			res.writeHead(200, { 'Content-Type': 'text/css' });
			var file = fs.readFileSync("./node_modules/bulma/css/bulma.css");
		break;
		case "/jquery.js":
			var file = fs.readFileSync("./node_modules/jquery/dist/jquery.min.js");
		break;
		case "/moment.js":
			var file = fs.readFileSync("./node_modules/moment/min/moment.min.js", "utf-8");
		break;
		case "/socket.io.js":
			var file = fs.readFileSync("./node_modules/socket.io-client/dist/socket.io.js");
		break;
	}
	res.end(file);
}).listen(config.serverPort);

console.log("Server started on port " + config.serverPort);
