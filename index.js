var api = require('./api');

function Aeris(client_id, client_secret) {
	this.client_id = client_id || null;
	this.client_secret = client_secret || null;

	this.url = function(endpoint, options) {
		var url = ['http://api.aerisapi.com/', endpoint, '/?client_id=', this.client_id, '&client_secret=', this.client_secret];
		var location = '&p=';
		switch (options.location.type) {
			case 'city':
				location += options.location.city + ',' + options.location.state
				break;
			case 'zip':
				location += options.location.zip
				break;
			case 'latlong':
				location += options.location.latitude + ',' + options.location.longitude
				break;
			default:
				location = '';
		}
		url.push(location);
		delete options.location;
		for (key in options) {
			url.push('&' + key + '=');
			url.push(options[key]);
		}
		return url.join('');
	}

	this.sunmoon = api.sunmoon;
}
module.exports = Aeris;