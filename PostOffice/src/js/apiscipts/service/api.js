var app = angular.module('PostOffice.api', ['ngResource']);

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