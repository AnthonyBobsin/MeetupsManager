
var mongoose = require('mongoose')

var meetupSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		validate: function(n) {
			return n !== ''
		}
	}
})

var Meetup = mongoose.model('Meetup', meetupSchema)

module.exports = Meetup