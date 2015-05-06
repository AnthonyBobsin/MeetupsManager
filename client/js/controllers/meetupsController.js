
app.controller('meetupsController', ['$scope', '$resource', function($scope, $resource) {

	var Meetup = $resource('/api/meetups')

	$scope.meetups = [
		{ name: "MEAN SF Developers" },
		{ name: "MEAN TO Developers" },
		{ name: "MEAN NY Developers" },
		{ name: "MEAN VA Developers" },
		{ name: "MEAN LO Developers" }
	]

	$scope.meetupsCount = $scope.meetups.length

	$scope.createMeetup = function() {
		var meetup = new Meetup()
		meetup.name = $scope.meetupName
		meetup.$save()
		// $scope.meetups.push({
		// 	meetup
		// })
		$scope.meetupName = null
	}

}])
