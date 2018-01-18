let db = require("diskdb");

db.connect("./storage");
db.loadCollections(["pings"]);

module.exports = db;