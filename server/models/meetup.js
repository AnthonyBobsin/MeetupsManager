
var mongoose = require('mongoose')

var meetupSchema = new mongoose.Schema({
	name: String
})

var Meetup = mongoose.model('Meetup', meetupSchema)

Meetup.schema.path('name').validate(function(value) {
	return value !== null
}, 'Meetup name cannot be null.')

module.exports = Meetup