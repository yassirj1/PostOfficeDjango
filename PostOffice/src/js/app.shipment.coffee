app = angular.module 'PostOffice.app.Shipment', ['PostOffice.api']

app.controller 'AppController', ['$scope', 'Shipment', ($scipe, Shipment) ->
	$scope.shipment = Shipment.query()
]