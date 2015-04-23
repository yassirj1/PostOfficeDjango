'use strict';

angular.module('postOfficeApp', [
	'ui.router',
	'angularDjangoRegistrationAuthApp'
	]);

angular.module('postOfficeApp')
.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url:'',
			templateUrl: 'static/views/partial-home.html'
		})
		.state('home.tracking', {
			url: '/tracking',
			templateUrl: 'static/views/tracker.html',
			controller: 'trackingCtrl'
		})
		.state('managedrivers', {
			url: '/managedrivers',
			templateUrl: 'static/views/managedrivers.html'
		})
		.state('managebranch', {
			url: '/managebranch',
			templateUrl: 'static/views/managebranch.html'
		})
		.state('manageshipments', {
			url: '/manageshipments',
			templateUrl: 'static/views/manageshipments.html'
		})
		.state('managecustomers', {
			url:'/managecustomers',
			templateUrl: 'static/views/managecustomers.html'
		})
		.state('reports', {
			url: '/reports',
			templateUrl: 'static/views/reports.html'
		});
		$urlRouterProvider.otherwise("")
});