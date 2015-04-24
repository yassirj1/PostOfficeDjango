'use strict';
angular.module('postOfficeApp')
.factory('poService', ['$http', function($http) {
	var poService = {};

	poService.getAddresses = function() {
		return $http.get('api/addresses');
	};

	poService.insertAddress = function(data) {
		return $http.post('api/addresses', data);
	};

	poService.updateAddress = function(data) {
		return $http.post('api/addresses'  + '/' + data.address_id, data)
	};

	poService.getShipments = function() {
		return $http.get('api/shipments');
	};

	poService.insertShipments = function(data) {
		return $http.post('api/shipments', data);
	};

	poService.updateShipments = function(data) {
		return $http.post('api/shipments'  + '/' + data.shipment_id, data)
	};

	poService.getDrivers = function() {
		return $http.get('api/drivers');
	};

	poService.insertDrivers = function(data) {
		return $http.post('api/drivers', data);
	};

	poService.updateDrivers = function(data) {
		return $http.post('api/drivers'  + '/' + data.driver_id, data)
	};

	poService.getCustomers = function() {
		return $http.get('api/customers');
	};

	poService.insertCustomers = function(data) {
		return $http.post('api/customers', data);
	};

	poService.updateCustomers = function(data) {
		return $http.post('api/customers'  + '/' + data.customer_id, data)
	};

	poService.getDeliveryRoutes = function() {
		return $http.get('api/deliveryroutes');
	};

	poService.insertDeliveryRoutes = function(data) {
		return $http.post('api/deliveryroutes', data);
	};

	poService.updateDeliveryRoutes = function(data) {
		return $http.post('api/deliveryroutes'  + '/' + data.delivery_route_id, data)
	};

	poService.getIncominingShipments = function() {
		return $http.get('api/incomingshipments');
	};

	poService.insertIncomingShipments = function(data) {
		return $http.post('api/incomingshipments', data);
	};

	poService.updateIncomingShipments = function(data) {
		return $http.post('api/incomingshipments'  + '/' + data.route_id, data)
	};

	return poService;
}]);