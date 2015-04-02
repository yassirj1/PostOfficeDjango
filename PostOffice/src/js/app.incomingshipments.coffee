app = angular.module 'PostOffice.app.incomingshipments', ['PostOffice.api']

app.controller 'AppController', ['$scope', 'Incoming_Shipments', ($scope, Shipments) ->
	$scope.incoming_shipments = Incoming_Shipments.query()