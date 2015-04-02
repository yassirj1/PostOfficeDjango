app = angular.module 'PostOffice.app.deliveryroutes', ['PostOffice.api']

app.controller 'AppController', ['$scope', 'Delivery_Routes', ($scope, Delivery_Routes) ->
	$scope.delivery_routes = Delivery_Routes.query()
]