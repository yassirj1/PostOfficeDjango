(function() {
  var app;

  app = angular.module('PostOffice.app.addresses', []);

  app.controller('AppController', [
    '$scope', '$http', function($scope, $http) {
      $scope.addresses = [];
      return $http.get('/api/addresses/').then(function(result) {
        return angular.forEach(result.data, function(item) {
          return $scope.addresses.push(item);
        });
      });
    }
  ]);

}).call(this);

(function() {
  var app;

  app = angular.module('PostOffice.app.customer', []);

  app.controller('AppController', [
    '$scope', '$http', function($scope, $http) {
      $scope.customers = [];
      return $http.get('/api/customers/').then(function(result) {
        return angular.forEach(result.data, function(item) {
          return $scope.addresses.push(item);
        });
      });
    }
  ]);

}).call(this);

(function() {
  var app;

  app = angular.module('PostOffice.app.deliveryroutes', []);

  app.controller('AppController', [
    '$scope', '$http', function($scope, $http) {
      $scope.deliveryroutes = [];
      return $http.get('/api/deliveryroutes/').then(function(result) {
        return angular.forEach(result.data, function(item) {
          return $scope.addresses.push(item);
        });
      });
    }
  ]);

}).call(this);

(function() {
  var app;

  app = angular.module('PostOffice.app.driver', []);

  app.controller('AppController', [
    '$scope', '$http', function($scope, $http) {
      $scope.drivers = [];
      return $http.get('/api/drivers/').then(function(result) {
        return angular.forEach(result.data, function(item) {
          return $scope.addresses.push(item);
        });
      });
    }
  ]);

}).call(this);

(function() {
  var app;

  app = angular.module('PostOffice.app.incomingshipments', []);

  app.controller('AppController', [
    '$scope', '$http', function($scope, $http) {
      $scope.incomingshipment = [];
      return $http.get('/api/incomingshipments/').then(function(result) {
        return angular.forEach(result.data, function(item) {
          return $scope.addresses.push(item);
        });
      });
    }
  ]);

}).call(this);

(function() {
  var app;

  app = angular.module('PostOffice.app.shipments', []);

  app.controller('AppController', [
    '$scope', '$http', function($scope, $http) {
      $scope.shipments = [];
      return $http.get('/api/shipments/').then(function(result) {
        return angular.forEach(result.data, function(item) {
          return $scope.addresses.push(item);
        });
      });
    }
  ]);

}).call(this);

(function() {
  var app;

  app = angular.module('PostOffice.api', ['ngResource']);

  app.factory('Shipments', [
    '$resource', function($resource) {
      return $resource('/api/shipments/:shipment_id', {
        shipment_id: '@shipment_id'
      });
    }
  ]);

  app.factory('Customer', [
    '$resource', function($resource) {
      return $resource('/api/customer/:customer_id', {
        customer_id: '@customer_id'
      });
    }
  ]);

  app.factory('Address', [
    '$resource', function($resource) {
      return $resource('/api/addresses/');
    }
  ]);

}).call(this);

(function() {
  var aapp;

  aapp = angular.module('PostOffice.api.playground', []);

  app.factory('User', [
    '$q', function($q) {
      var MockUser, i, len, ref, storage, user, username;
      storage = {};
      MockUser = (function() {
        function MockUser(params) {
          var key, value;
          for (key in params) {
            value = params[key];
            this[key] = value;
          }
        }

        MockUser.query = function() {
          var dfr, key, val, values;
          dfr = $q.defer();
          values = (function() {
            var results;
            results = [];
            for (key in storage) {
              val = storage[key];
              results.push(val);
            }
            return results;
          })();
          dfr.resolve(values);
          values.$promise = dfr.promise;
          return values;
        };

        MockUser.save = function(params) {
          var user;
          user = new this(params);
          user.$save();
          return user;
        };

        MockUser.prototype.$save = function() {
          var dfr;
          storage[this.username] = this;
          dfr = $q.defer();
          dfr.resolve(this);
          return dfr.promise;
        };

        MockUser.prototype.$delete = function() {
          var dfr;
          delete storage[this.username];
          dfr = $q.defer();
          dfr.resolve();
          return dfr.promise;
        };

        return MockUser;

      })();
      ref = ['bob', 'sally', 'joe', 'rachel'];
      for (i = 0, len = ref.length; i < len; i++) {
        username = ref[i];
        user = new MockUser({
          username: username
        });
        storage[user.username] = user;
      }
      return MockUser;
    }
  ]);

}).call(this);
