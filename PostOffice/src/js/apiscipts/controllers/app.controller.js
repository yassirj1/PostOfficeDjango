'use strict';

var postOfficeControllers = angular.module('postOfficeControllers', [] );

postOfficeControllers.controller('trackingCtrl', ['$scope', 'Shipments' , 
	function ($scope,Shipments) {
		$scope.shipments = Shipments;
	}
])