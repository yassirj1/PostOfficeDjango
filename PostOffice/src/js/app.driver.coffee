app = angular.module 'PostOffice.app.driver', ['PostOffice.api']

app.controller 'AppController', ['$scope', 'Driver', ($scope, Driver) ->
	$scope.driver = Driver.query()
]