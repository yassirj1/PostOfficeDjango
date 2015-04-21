'use strict';

var postOfficeServices = angular.module('postOfficeServices', ['ngResource']);

postOfficeServices.factory('poService', ['http', function($http) {
	var urlBase = '/api/shipments';
	var dataFactory = {}

	dataFactory.getShipments = function() {
		return $http.get(urlBase);
	};

	return dataFactory;
}]);

// // app.factory('Shipments', [
// //   '$resource', function($resource) {
// //     return $resource('/api/shipments/:shipment_id', {
// //       shipment_id: '@shipment_id'
// //     });
// //   }
// // ]);

// // app.factory('Customer', [
// //   '$resource', function($resource) {
// //     return $resource('/api/customer/:customer_id', {
// //       customer_id: '@customer_id'
// //     });
// //   }
// // ]);

// // app.factory('Address', [
// //   '$resource', function($resource) {
// //     return $resource('/api/addresses/');
// //   }
// // ]);