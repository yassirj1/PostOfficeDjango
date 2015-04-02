app = angular.module 'PostOffice.app.Driver', ['PostOffice.api']

app.controller 'AppController', ['$scope', 'Driver', ($scope, Driver) ->
	$scope.driver = Driver.query()
]