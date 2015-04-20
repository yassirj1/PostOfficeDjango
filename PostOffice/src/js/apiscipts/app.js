'use strict';

var postOfficeApp = angular.module('postOfficeApp', [
	'ngRoute',
	'postOfficeAnimations',
	'postOfficeControllers',
	'postOfficeFilters',
	'postOfficeServices'
	]);

postOfficeApp.config(['routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/tracking', {
			templateUrl: 'static/views/tracking.html',
			controller: 'TrackingSearchCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
	}]);