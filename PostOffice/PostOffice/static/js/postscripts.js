'use strict';

var postOfficeApp = angular.module('postOfficeApp', [
	'ngRoute',
	'postOfficeControllers',
	'postOfficeFilters',
	'postOfficeServices'
	]);

postOfficeApp.config(['routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/tracking', {
			templateUrl: 'static/views/tracking.html',
			controller: 'trackingCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
	}]);

'use strict';

var postOfficeControllers = angular.module('postOfficeControllers', [] );

postOfficeControllers.controller('trackingCtrl', ['$scope', 'Shipments' , 
	function ($scope,Shipments) {
		$scope.shipments = Shipments;
	}
])
// 'use strict';

// /* Filters */

// angular.module('postOfficeFilters', []).filter('checkmark', function() {
//   return function(input) {
//     return input ? '\u2713' : '\u2718';
//   };
// });
// var app = angular.module('PostOffice.app.addresses', []);

// app.controller('AppController', [
//   '$scope', '$http', function($scope, $http) {
//     $scope.addresses = [];
//     return $http.get('/api/addresses/').then(function(result) {
//       return angular.forEach(result.data, function(item) {
//         return $scope.addresses.push(item);
//       });
//     });
//   }
// ]);

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