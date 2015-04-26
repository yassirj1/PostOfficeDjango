'use strict';

angular.module('postOfficeApp')
.controller('trackingCtrl', [ '$scope', 'poService' , function ($scope,poService) {
	$scope.shipments = [];

	poService.getShipments().success(function (response) {
		$scope.shipments = response;
	});
}]);

angular.module('postOfficeApp')
.controller('customerTableCtrl', [ '$scope', '$filter', 'ngTableParams', 'poService',  
	function ($scope, $filter, ngTableParams, poService) {
		var data = [];

		poService.getCustomers().success( function (response) {
			data = response;
		});


		$scope.tableParams = new ngTableParams({
			page: 1,
			count: 10
		},{
			total: data.length,
			getData: function($defer, params) {
				var orderedData = params.sorting()?$filter('orderBy')(data, params.orderBy()):data;
				$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
			}
		});
		
		$scope.formData = {};
		$scope.sendData = function(customer) {
			$scope.formData = angular.copy(customer)
			poService.updateCustomers($scope.formData).success(function(formData) {
				console.log("Ok",formData)
			});
		}


}]);

angular.module('postOfficeApp')
.controller('driverTableCtrl', [ '$scope', '$filter', 'ngTableParams', 'poService',  
	function ($scope, $filter, ngTableParams, poService) {
		var data = [];

		poService.getDrivers().success( function (response) {
			data = response;
		});


		$scope.tableParams = new ngTableParams({
			page: 1,
			count: 10
		},{
			total: data.length,
			getData: function($defer, params) {
				var orderedData = params.sorting()?$filter('orderBy')(data, params.orderBy()):data;
				$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
			}
		});

		$scope.sendData = function(putForm) {
			console.log($scope.driver);
			console.log($scope.putForm);
		}


}]);