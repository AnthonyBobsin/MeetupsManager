
var Meetup = require('../models/meetup')

module.exports.create = function (err, req, res, next) {
  var meetup = new Meetup(req.body)
  debugger
	meetup.save(function(result) {
		if (err) {
			return next(err)
		}
		res.json(result)
	})
}

module.exports.list = function(req, res) {
	Meetup.find({}, function(err, results) {
		res.json(results)
	})
}