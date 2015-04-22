'use strict';

angular.module('postOfficeApp', [
	'ui.router',
	'angularDjangoRegistrationAuthApp'
	]);

angular.module('postOfficeApp')
.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url:'/',
			templateUrl: 'static/views/partial-home.html'
		})
		.state('home.tracking', {
			url: 'tracking',
			templateUrl: 'static/views/tracking.html'
			//controller: 'trackingCtrl'
		});
});