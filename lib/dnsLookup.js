var ReDNS = require('redns');

var r = new ReDNS({
	preferV4: true,
	retries: 8,
	timeout: 100,
	incrementalTimeout: true,
	maxTTL: Infinity
});


module.exports = (hostname, callback) => {
	r.lookup(hostname, (err, result, family) => {
		callback(result);
	});
} 
