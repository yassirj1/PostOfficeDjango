'use strict';

angular.module('postOfficeApp')
.controller('trackingCtrl', [ '$scope', 'poService' , function ($scope,poService) {
		$scope.shipments = [];

		poService.getShipments().success(function (response) {
			$scope.shipments = response;
		});
	}
]);