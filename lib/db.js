let db = require("diskdb");

db.connect("./storage");
db.loadCollections(["hosts"]);

module.exports = db;