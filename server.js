
var express = require('express'),
		app = express(),
		bodyParser = require('body-parser'),
		mongoose = require('mongoose'),
		meetupsController = require('./server/controllers/meetupsController')

//mongoose.connect('mongodb://localhost:27017/mean-demo')

app.use(bodyParser())

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/client/views/index.html')
})

app.post('/api/meetups', meetupsController.create)

app.use('/js', express.static(__dirname + '/client/js'))

app.listen(3000, function() {
	console.log('I\'m Listening...')
})