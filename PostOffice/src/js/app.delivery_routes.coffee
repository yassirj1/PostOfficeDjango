app = angular.module 'PostOffice.app.Delivery_Routes', ['PostOffice.api']

app.controller 'AppController', ['$scope', 'Delivery_Routes', ($scope, Delivery_Routes) ->
	$scope.delivery_routes = Delivery_Routes.query()
]