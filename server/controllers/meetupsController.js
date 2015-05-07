
var Meetup = require('../models/meetup')

module.exports.create = function(req, res) {
	var meetup = new Meetup(req.body)
	meetup.save()
}