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

				orderedData = params.filter() ? $filter('filter')(data, params.filter()) : data;

				params.total(orderedData.length);

				$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));

			}
		});
		
		$scope.formData = {};
		$scope.sendData = function(customer) {
			$scope.formData = angular.copy(customer)
			poService.updateCustomers($scope.formData).success(function (response) {
				console.log("Ok",response)
			});
		};

		$scope.postForm = {};
		$scope.postData = function(customer) {
			$scope.postForm = angular.copy(customer)
			poService.insertCustomers($scope.postForm).success(function (response) {
				console.log("Ok",response)
			});
		};


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

				orderedData = params.filter() ? $filter('filter')(data, params.filter()) : data;

				params.total(orderedData.length);

				$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));

			}
		});
		
		$scope.formData = {};
		$scope.sendData = function(driver) {
			$scope.formData = angular.copy(driver)
			poService.updateDrivers($scope.formData).success(function (response) {
				console.log("Ok",response)
			});
		};

		$scope.postForm = {};
		$scope.postData = function(driver) {
			$scope.postForm = angular.copy(driver)
			poService.insertDrivers($scope.postForm).success(function (response) {
				console.log("Ok",response)
			});
		};


}]);

angular.module('postOfficeApp')
.controller('shipmentsTableCtrl', [ '$scope', '$filter', 'ngTableParams', 'poService',  
	function ($scope, $filter, ngTableParams, poService) {
		var data = [];

		poService.getShipments().success( function (response) {
			data = response;
		});


		$scope.selectCustomer = [];

		poService.getCustomers().success( function (response) {
			$scope.selectCustomer = response;
		});

		$scope.selectAddress = [];

		poService.getAddresses().success( function (response) {
			$scope.selectAddress = response;
		});


		$scope.tableParams = new ngTableParams({
			page: 1,
			count: 10
		},{
			total: data.length,
			getData: function($defer, params) {
				var orderedData = params.sorting()?$filter('orderBy')(data, params.orderBy()):data;

				orderedData = params.filter() ? $filter('filter')(data, params.filter()) : data;

				params.total(orderedData.length);

				$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));

			}
		});
		
		$scope.formData = {};
		$scope.sendData = function(customer) {
			$scope.formData = angular.copy(customer)
			poService.updateShipments($scope.formData).success(function (response) {
				console.log("Ok",response)
			});
		};

		$scope.postForm = {};
		$scope.postData = function(customer) {
			$scope.postForm = angular.copy(customer)
			poService.insertShipments($scope.postForm).success(function (response) {
				console.log("Ok",response)
			});
		};


}]);