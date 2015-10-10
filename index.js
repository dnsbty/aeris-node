var api = require('./api');

function Aeris(client_id, client_secret, city, state) {
	this.client_id = client_id || null;
	this.client_secret = client_secret || null;
	this.city = city || null;
	this.state = state || null;

	this.url = function(endpoint, opts) {
		var city = this.city;
		var state = this.state;
		var client_id = this.client_id;
		var client_secret = this.client_secret;
		var url = ['http://api.aerisapi.com/', endpoint, '/', city, ',', state, '?client_id=', client_id, '&client_secret=', client_secret];
		for (key in opts) {
			url.push('&' + key + '=');
			url.push(opts[key]);
		}
		return url.join('');
	}

	this.sunmoon = api.sunmoon;
}
module.exports = Aeris;