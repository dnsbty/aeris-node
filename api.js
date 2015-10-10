var helpers = require('./helpers');

/**
 * Provides sunrise/set, twilight, moon rise/set and moon phase information 
 * @param {Object} opts - optional object to provide filters and other data
 * @param  {Function} callback - returns err, data
 */
exports.sunmoon = function(opts, callback) {
	helpers.get(this.url('sunmoon', opts), function(err, data) {
		if (err) return callback(err);
		return callback(null, data);
	});
}