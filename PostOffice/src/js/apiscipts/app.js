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
