app = angular.module 'PostOffice.app.shipment', ['PostOffice.api']

app.controller 'AppController', ['$scope', 'Shipment', ($scipe, Shipment) ->
	$scope.shipment = Shipment.query()
]