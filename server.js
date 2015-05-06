
var express = require('express'),
		app = express(),
		bodyParser = require('body-parser'),
		meetupsController = require('./server/controllers/meetupsController')

app.use(bodyParser())

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/client/views/index.html')
})

app.post('/api/meetups', meetupsController.create)

app.use('/js', express.static(__dirname + '/client/js'))

app.listen(3000, function() {
	console.log('I\'m Listening...')
})