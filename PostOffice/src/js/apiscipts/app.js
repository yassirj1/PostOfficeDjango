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
	.state('managebranch', {
		url: '/managebranch',
		templateUrl: 'static/views/managebranch.html',
		controller: 'branchTableCtrl'
	})
	.state('manageshipments', {
		url: '/manageshipments',
		templateUrl: 'static/views/manageshipments.html',
		controller: 'shipmentsTableCtrl'
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
	.state('manageaddresses', {
		url: '/addresses',
		templateUrl: 'static/views/manageaddresses.html',
		controller: 'addressesTableCtrl'
	})
	.state('contact', {
		url:'/contact',
		templateUrl: 'static/views/contact.html'
	})
	.state('about', {
		url:'/about',
		templateUrl: 'static/views/about.html'
	});
	$urlRouterProvider.otherwise("")
});