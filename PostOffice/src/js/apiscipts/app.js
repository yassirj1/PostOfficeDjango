'use strict';

angular.module('postOfficeApp', [
	'ui.router',
	'ngTable',
	'angularDjangoRegistrationAuthApp'
	]);

angular.module('postOfficeApp')
.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
	$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
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
		templateUrl: 'static/views/managedrivers.html',
		controller: 'driverTableCtrl'
	})
	.state('managedrivers.createdriver', {
		url: '/createdriver',
		templateUrl: 'static/views/createdriver.html'
	})
	.state('managedrivers.viewdriver', {
		url: '/viewdriver',
		templateUrl: 'static/views/viewdriver.html'
	})
	.state('managedrivers.viewroute', {
		url: '/viewroute',
		templateUrl: 'static/views/viewroute.html'
	})
	.state('managedrivers.editdriver', {
		url: '/editdriver',
		templateUrl: 'static/views/editdriver.html'
	})
	.state('managebranch', {
		url: '/managebranch',
		templateUrl: 'static/views/managebranch.html'
	})
	.state('manageshipments', {
		url: '/manageshipments',
		templateUrl: 'static/views/manageshipments.html'
	})
	.state('manageshipments.createcustomer', {
		url: '/createcustomer',
		templateUrl: 'static/views/createcustomer.html'
	})
	.state('mangeshipments.viewcustomer', {
		url: '/viewcustomer',
		templateUrl: 'static/views/viewcustomer'
	})
	.state('mangeshipments.editcustomer', {
		url: '/editcustomer',
		templateUrl: 'static/views/editcustomer'
	})
	.state('manageshipments.createshipment', {
		url: '/createshipment',
		templateUrl: 'static/views/createshipment'
	})
	.state('manageshipments.viewshipment', {
		url: '/viewshipment',
		templateUrl: 'static/views/createshipment'
	})
	.state('managecustomers', {
		url:'/managecustomers',
		templateUrl: 'static/views/managecustomers.html',
		controller: 'customerTableCtrl'
	})
	.state('register', {
		url:'/register',
		templateUrl: 'static/views/register.html'
	})
	.state('reports', {
		url: '/reports',
		templateUrl: 'static/views/reports.html'
	});
	$urlRouterProvider.otherwise("")
});