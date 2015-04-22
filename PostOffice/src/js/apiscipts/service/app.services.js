'use strict';
angular.module('postOfficeApp')
.factory('poService', ['$http', function($http) {
	var poService = {};

	poService.getShipments = function() {
		return $http.get('api/shipments');
	};

	return poService;
}]);