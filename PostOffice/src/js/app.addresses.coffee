app = angular.module 'PostOffice.app.addresses', ['PostOffice.api']

app.controller 'AppController', ['$scope', 'AllAddress', ($scope, AllAddress) ->
	$scope.customers = Address.query()
]
