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
			poService.updateCustomers($scope.formData).success(function (response) {
				console.log("Ok",response)
			});
		};

		// $scope.postData = function(customer) {
		// 	$scope.formData = angular.copy(customer)
		// 	poService.insertCustomers($scope.formData).success(function (response) {
		// 		console.log("Ok",response)
		// 	});
		// };


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
'use strict';
angular.module('postOfficeApp')
.factory('poService', ['$http', function($http) {
	var poService = {};

	poService.getAddresses = function() {
		return $http.get('api/addresses');
	};

	poService.insertAddress = function(data) {
		return $http.post('api/addresses', data);
	};

	poService.updateAddress = function(data) {
		return $http.put('api/addresses'  + '/' + data.address_id, data)
	};

	poService.getShipments = function() {
		return $http.get('api/shipments');
	};

	poService.insertShipments = function(data) {
		return $http.post('api/shipments', data);
	};

	poService.updateShipments = function(data) {
		return $http.put('api/shipments'  + '/' + data.shipment_id, data)
	};

	poService.getDrivers = function() {
		return $http.get('api/drivers');
	};

	poService.insertDrivers = function(data) {
		return $http.post('api/drivers', data);
	};

	poService.updateDrivers = function(data) {
		return $http.put('api/drivers'  + '/' + data.driver_id, data)
	};

	poService.getCustomers = function() {
		return $http.get('api/customers');
	};

	poService.insertCustomers = function(data) {
		return $http.post('api/customers', data);
	};

	poService.updateCustomers = function(data) {
		return $http.put('api/customers'  + '/' + data.customer_id, data)
	};

	poService.getDeliveryRoutes = function() {
		return $http.get('api/deliveryroutes');
	};

	poService.insertDeliveryRoutes = function(data) {
		return $http.post('api/deliveryroutes', data);
	};

	poService.updateDeliveryRoutes = function(data) {
		return $http.put('api/deliveryroutes'  + '/' + data.delivery_route_id, data)
	};

	poService.getIncominingShipments = function() {
		return $http.get('api/incomingshipments');
	};

	poService.insertIncomingShipments = function(data) {
		return $http.post('api/incomingshipments', data);
	};

	poService.updateIncomingShipments = function(data) {
		return $http.put('api/incomingshipments'  + '/' + data.route_id, data)
	};

	return poService;
}]);
'use strict';

angular.module('angularDjangoRegistrationAuthApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'static/views/main.html',
        controller: 'MainCtrl',
        resolve: {
          authenticated: ['djangoAuth', function(djangoAuth){
            return djangoAuth.authenticationStatus();
          }],
        }
      })
      .when('/register', {
        templateUrl: 'static/views/register.html',
        resolve: {
          authenticated: ['djangoAuth', function(djangoAuth){
            return djangoAuth.authenticationStatus();
          }],
        }
      })
      .when('/passwordReset', {
        templateUrl: 'static/views/passwordreset.html',
        resolve: {
          authenticated: ['djangoAuth', function(djangoAuth){
            return djangoAuth.authenticationStatus();
          }],
        }
      })
      .when('/passwordResetConfirm/:firstToken/:passwordResetToken', {
        templateUrl: 'static/views/passwordresetconfirm.html',
        resolve: {
          authenticated: ['djangoAuth', function(djangoAuth){
            return djangoAuth.authenticationStatus();
          }],
        }
      })
      .when('/login', {
        templateUrl: 'static/views/login.html',
        resolve: {
          authenticated: ['djangoAuth', function(djangoAuth){
            return djangoAuth.authenticationStatus();
          }],
        }
      })
      .when('/verifyEmail/:emailVerificationToken', {
        templateUrl: 'static/views/verifyemail.html',
        resolve: {
          authenticated: ['djangoAuth', function(djangoAuth){
            return djangoAuth.authenticationStatus();
          }],
        }
      })
      .when('/logout', {
        templateUrl: 'static/views/logout.html',
        resolve: {
          authenticated: ['djangoAuth', function(djangoAuth){
            return djangoAuth.authenticationStatus();
          }],
        }
      })
      .when('/userProfile', {
        templateUrl: 'static/views/userprofile.html',
        resolve: {
          authenticated: ['djangoAuth', function(djangoAuth){
            return djangoAuth.authenticationStatus();
          }],
        }
      })
      .when('/passwordChange', {
        templateUrl: 'static/views/passwordchange.html',
        resolve: {
          authenticated: ['djangoAuth', function(djangoAuth){
            return djangoAuth.authenticationStatus();
          }],
        }
      })
      .when('/restricted', {
        templateUrl: 'static/views/restricted.html',
        controller: 'RestrictedCtrl',
        resolve: {
          authenticated: ['djangoAuth', function(djangoAuth){
            return djangoAuth.authenticationStatus();
          }],
        }
      })
      .when('/authRequired', {
        templateUrl: 'static/views/authrequired.html',
        controller: 'AuthrequiredCtrl',
        resolve: {
          authenticated: ['djangoAuth', function(djangoAuth){
            return djangoAuth.authenticationStatus(true);
          }],
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function(djangoAuth){
    djangoAuth.initialize('//127.0.0.1:8000/rest-auth', false);
  });

'use strict';

/**
 * @ngdoc function
 * @name angularDjangoRegistrationAuthApp.controller:AuthrequiredCtrl
 * @description
 * # AuthrequiredCtrl
 * Controller of the angularDjangoRegistrationAuthApp
 */
angular.module('angularDjangoRegistrationAuthApp')
  .controller('AuthrequiredCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

angular.module('angularDjangoRegistrationAuthApp')
  .controller('LoginCtrl', function ($scope, $location, djangoAuth, Validate) {
    $scope.model = {'username':'','password':''};
  	$scope.complete = false;
    $scope.login = function(formData){
      $scope.errors = [];
      Validate.form_validation(formData,$scope.errors);
      if(!formData.$invalid){
        djangoAuth.login($scope.model.username, $scope.model.password)
        .then(function(data){
        	// success case
        	$location.path("/");
        },function(data){
        	// error case
        	$scope.errors = data;
        });
      }
    }
  });

'use strict';

angular.module('angularDjangoRegistrationAuthApp')
  .controller('LogoutCtrl', function ($scope, $location, djangoAuth) {
    djangoAuth.logout();
  });

'use strict';

angular.module('angularDjangoRegistrationAuthApp')
  .controller('MainCtrl', function ($scope, $cookies, $location, djangoAuth) {
    
    $scope.login = function(){
      djangoAuth.login(prompt('Username'),prompt('password'))
      .then(function(data){
        handleSuccess(data);
      },handleError);
    }
    
    $scope.logout = function(){
      djangoAuth.logout()
      .then(handleSuccess,handleError);
    }
    
    $scope.resetPassword = function(){
      djangoAuth.resetPassword(prompt('Email'))
      .then(handleSuccess,handleError);
    }
    
    $scope.register = function(){
      djangoAuth.register(prompt('Username'),prompt('Password'),prompt('Email'))
      .then(handleSuccess,handleError);
    }
    
    $scope.verify = function(){
      djangoAuth.verify(prompt("Please enter verification code"))
      .then(handleSuccess,handleError);
    }
    
    $scope.goVerify = function(){
      $location.path("/verifyEmail/"+prompt("Please enter verification code"));
    }
    
    $scope.changePassword = function(){
      djangoAuth.changePassword(prompt("Password"), prompt("Repeat Password"))
      .then(handleSuccess,handleError);
    }
    
    $scope.profile = function(){
      djangoAuth.profile()
      .then(handleSuccess,handleError);
    }
    
    $scope.updateProfile = function(){
      djangoAuth.updateProfile({'first_name': prompt("First Name"), 'last_name': prompt("Last Name"), 'email': prompt("Email")})
      .then(handleSuccess,handleError);
    }
    
    $scope.confirmReset = function(){
      djangoAuth.confirmReset(prompt("Code 1"), prompt("Code 2"), prompt("Password"), prompt("Repeat Password"))
      .then(handleSuccess,handleError);
    }

    $scope.goConfirmReset = function(){
      $location.path("/passwordResetConfirm/"+prompt("Code 1")+"/"+prompt("Code 2"))
    }
    
    var handleSuccess = function(data){
      $scope.response = data;
    }
    
    var handleError = function(data){
      $scope.response = data;
    }

    $scope.show_login = true;
    $scope.$on("djangoAuth.logged_in", function(data){
      $scope.show_login = false;
    });
    $scope.$on("djangoAuth.logged_out", function(data){
      $scope.show_login = true;
    });

  });

'use strict';

angular.module('angularDjangoRegistrationAuthApp')
  .controller('MasterCtrl', function ($scope, $location, djangoAuth) {
    // Assume user is not logged in until we hear otherwise
    $scope.authenticated = false;
    // Wait for the status of authentication, set scope var to true if it resolves
    djangoAuth.authenticationStatus(true).then(function(){
        $scope.authenticated = true;
    });
    // Wait and respond to the logout event.
    $scope.$on('djangoAuth.logged_out', function() {
      $scope.authenticated = false;
    });
    // Wait and respond to the log in event.
    $scope.$on('djangoAuth.logged_in', function() {
      $scope.authenticated = true;
    });
    // If the user attempts to access a restricted page, redirect them back to the main page.
    $scope.$on('$routeChangeError', function(ev, current, previous, rejection){
      console.error("Unable to change routes.  Error: ", rejection)
      $location.path('/restricted').replace();
    });
  });

'use strict';

angular.module('angularDjangoRegistrationAuthApp')
  .controller('PasswordchangeCtrl', function ($scope, djangoAuth, Validate) {
    $scope.model = {'new_password1':'','new_password2':''};
  	$scope.complete = false;
    $scope.changePassword = function(formData){
      $scope.errors = [];
      Validate.form_validation(formData,$scope.errors);
      if(!formData.$invalid){
        djangoAuth.changePassword($scope.model.new_password1, $scope.model.new_password2)
        .then(function(data){
        	// success case
        	$scope.complete = true;
        },function(data){
        	// error case
        	$scope.errors = data;
        });
      }
    }
  });

'use strict';

angular.module('angularDjangoRegistrationAuthApp')
  .controller('PasswordresetCtrl', function ($scope, djangoAuth, Validate) {
    $scope.model = {'email':''};
  	$scope.complete = false;
    $scope.resetPassword = function(formData){
      $scope.errors = [];
      Validate.form_validation(formData,$scope.errors);
      if(!formData.$invalid){
        djangoAuth.resetPassword($scope.model.email)
        .then(function(data){
        	// success case
        	$scope.complete = true;
        },function(data){
        	// error case
        	$scope.errors = data;
        });
      }
    }
  });

'use strict';

angular.module('angularDjangoRegistrationAuthApp')
  .controller('PasswordresetconfirmCtrl', function ($scope, $routeParams, djangoAuth, Validate) {
    $scope.model = {'new_password1':'','new_password2':''};
  	$scope.complete = false;
    $scope.confirmReset = function(formData){
      $scope.errors = [];
      Validate.form_validation(formData,$scope.errors);
      if(!formData.$invalid){
        djangoAuth.confirmReset($routeParams['firstToken'], $routeParams['passwordResetToken'], $scope.model.new_password1, $scope.model.new_password2)
        .then(function(data){
        	// success case
        	$scope.complete = true;
        },function(data){
        	// error case
        	$scope.errors = data;
        });
      }
    }
  });

'use strict';

angular.module('angularDjangoRegistrationAuthApp')
  .controller('RegisterCtrl', function ($scope, djangoAuth, Validate) {
  	$scope.model = {'username':'','password':'','email':''};
  	$scope.complete = false;
    $scope.register = function(formData){
      $scope.errors = [];
      Validate.form_validation(formData,$scope.errors);
      if(!formData.$invalid){
        djangoAuth.register($scope.model.username,$scope.model.password1,$scope.model.password2,$scope.model.email)
        .then(function(data){
        	// success case
        	$scope.complete = true;
        },function(data){
        	// error case
        	$scope.errors = data;
        });
      }
    }
  });

'use strict';

/**
 * @ngdoc function
 * @name angularDjangoRegistrationAuthApp.controller:RestrictedCtrl
 * @description
 * # RestrictedCtrl
 * Controller of the angularDjangoRegistrationAuthApp
 */
angular.module('angularDjangoRegistrationAuthApp')
  .controller('RestrictedCtrl', function ($scope, $location) {
    $scope.$on('djangoAuth.logged_in', function() {
      $location.path('/');
    });
  });

'use strict';

angular.module('angularDjangoRegistrationAuthApp')
  .controller('UserprofileCtrl', function ($scope, djangoAuth, Validate) {
    $scope.model = {'first_name':'','last_name':'','email':''};
  	$scope.complete = false;
  	djangoAuth.profile().then(function(data){
  		$scope.model = data;
  	});
    $scope.updateProfile = function(formData, model){
      $scope.errors = [];
      Validate.form_validation(formData,$scope.errors);
      if(!formData.$invalid){
        djangoAuth.updateProfile(model)
        .then(function(data){
        	// success case
        	$scope.complete = true;
        },function(data){
        	// error case
        	$scope.error = data;
        });
      }
    }
  });

'use strict';

angular.module('angularDjangoRegistrationAuthApp')
  .controller('VerifyemailCtrl', function ($scope, $routeParams, djangoAuth) {
    djangoAuth.verify($routeParams["emailVerificationToken"]).then(function(data){
    	$scope.success = true;
    },function(data){
    	$scope.failure = false;
    });
  });

'use strict';

angular.module('angularDjangoRegistrationAuthApp')
  .service('djangoAuth', function djangoAuth($q, $http, $cookies, $rootScope) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var service = {
        /* START CUSTOMIZATION HERE */
        // Change this to point to your Django REST Auth API
        // e.g. /api/rest-auth  (DO NOT INCLUDE ENDING SLASH)
        'API_URL': '',
        // Set use_session to true to use Django sessions to store security token.
        // Set use_session to false to store the security token locally and transmit it as a custom header.
        'use_session': true,
        /* END OF CUSTOMIZATION */
        'authenticated': null,
        'authPromise': null,
        'request': function(args) {
            // Let's retrieve the token from the cookie, if available
            if($cookies.token){
                $http.defaults.headers.common.Authorization = 'Token ' + $cookies.token;
            }
            // Continue
            params = args.params || {}
            args = args || {};
            var deferred = $q.defer(),
                url = this.API_URL + args.url,
                method = args.method || "GET",
                params = params,
                data = args.data || {};
            // Fire the request, as configured.
            $http({
                url: url,
                withCredentials: this.use_session,
                method: method.toUpperCase(),
                headers: {'X-CSRFToken': $cookies['csrftoken']},
                params: params,
                data: data
            })
            .success(angular.bind(this,function(data, status, headers, config) {
                deferred.resolve(data, status);
            }))
            .error(angular.bind(this,function(data, status, headers, config) {
                console.log("error syncing with: " + url);
                // Set request status
                if(data){
                    data.status = status;
                }
                if(status == 0){
                    if(data == ""){
                        data = {};
                        data['status'] = 0;
                        data['non_field_errors'] = ["Could not connect. Please try again."];
                    }
                    // or if the data is null, then there was a timeout.
                    if(data == null){
                        // Inject a non field error alerting the user
                        // that there's been a timeout error.
                        data = {};
                        data['status'] = 0;
                        data['non_field_errors'] = ["Server timed out. Please try again."];
                    }
                }
                deferred.reject(data, status, headers, config);
            }));
            return deferred.promise;
        },
        'register': function(username,password1,password2,email,more){
            var data = {
                'username':username,
                'password1':password1,
                'password2':password2,
                'email':email
            }
            data = angular.extend(data,more);
            return this.request({
                'method': "POST",
                'url': "/registration/",
                'data' :data
            });
        },
        'login': function(username,password){
            var djangoAuth = this;
            return this.request({
                'method': "POST",
                'url': "/login/",
                'data':{
                    'username':username,
                    'password':password
                }
            }).then(function(data){
                if(!djangoAuth.use_session){
                    $http.defaults.headers.common.Authorization = 'Token ' + data.key;
                    $cookies.token = data.key;
                }
                djangoAuth.authenticated = true;
                $rootScope.$broadcast("djangoAuth.logged_in", data);
            });
        },
        'logout': function(){
            var djangoAuth = this;
            return this.request({
                'method': "POST",
                'url': "/logout/"
            }).then(function(data){
                delete $http.defaults.headers.common.Authorization;
                delete $cookies.token;
                djangoAuth.authenticated = false;
                $rootScope.$broadcast("djangoAuth.logged_out");
            });
        },
        'changePassword': function(password1,password2){
            return this.request({
                'method': "POST",
                'url': "/password/change/",
                'data':{
                    'new_password1':password1,
                    'new_password2':password2
                }
            });
        },
        'resetPassword': function(email){
            return this.request({
                'method': "POST",
                'url': "/password/reset/",
                'data':{
                    'email':email
                }
            });
        },
        'profile': function(){
            return this.request({
                'method': "GET",
                'url': "/user/"
            }); 
        },
        'updateProfile': function(data){
            return this.request({
                'method': "PATCH",
                'url': "/user/",
                'data':data
            }); 
        },
        'verify': function(key){
            return this.request({
                'method': "POST",
                'url': "/registration/verify-email/",
                'data': {'key': key} 
            });            
        },
        'confirmReset': function(uid,token,password1,password2){
            return this.request({
                'method': "POST",
                'url': "/password/reset/confirm/",
                'data':{
                    'uid': uid,
                    'token': token,
                    'new_password1':password1,
                    'new_password2':password2
                }
            });
        },
        'authenticationStatus': function(restrict, force){
            // Set restrict to true to reject the promise if not logged in
            // Set to false or omit to resolve when status is known
            // Set force to true to ignore stored value and query API
            restrict = restrict || false;
            force = force || false;
            if(this.authPromise == null || force){
                this.authPromise = this.request({
                    'method': "GET",
                    'url': "/user/"
                })
            }
            var da = this;
            var getAuthStatus = $q.defer();
            if(this.authenticated != null && !force){
                // We have a stored value which means we can pass it back right away.
                if(this.authenticated == false && restrict){
                    getAuthStatus.reject("User is not logged in.");
                }else{
                    getAuthStatus.resolve();
                }
            }else{
                // There isn't a stored value, or we're forcing a request back to
                // the API to get the authentication status.
                this.authPromise.then(function(){
                    da.authenticated = true;
                    getAuthStatus.resolve();
                },function(){
                    da.authenticated = false;
                    if(restrict){
                        getAuthStatus.reject("User is not logged in.");
                    }else{
                        getAuthStatus.resolve();
                    }
                });
            }
            return getAuthStatus.promise;
        },
        'initialize': function(url, sessions){
            this.API_URL = url;
            this.use_session = sessions;
            return this.authenticationStatus();
        }

    }
    return service;
  });

'use strict';

angular.module('angularDjangoRegistrationAuthApp')
  .service('Validate', function Validate() {
    return {
        'message': {
            'minlength': 'This value is not long enough.',
            'maxlength': 'This value is too long.',
            'email': 'A properly formatted email address is required.',
            'required': 'This field is required.'
        },
        'more_messages': {
            'demo': {
                'required': 'Here is a sample alternative required message.'
            }
        },
        'check_more_messages': function(name,error){
            return (this.more_messages[name] || [])[error] || null;
        },
        validation_messages: function(field,form,error_bin){
            var messages = [];
            for(var e in form[field].$error){
                if(form[field].$error[e]){
                    var special_message = this.check_more_messages(field,e);
                    if(special_message){
                        messages.push(special_message);
                    }else if(this.message[e]){
                        messages.push(this.message[e]);
                    }else{
                        messages.push("Error: " + e)
                    }
                }
            }
            var deduped_messages = [];
            angular.forEach(messages, function(el, i){
                if(deduped_messages.indexOf(el) === -1) deduped_messages.push(el);
            });
            if(error_bin){
                error_bin[field] = deduped_messages;
            }
        },
        'form_validation': function(form,error_bin){
            for(var field in form){
                if(field.substr(0,1) != "$"){
                    this.validation_messages(field,form,error_bin);
                }
            }
        }
    }
});