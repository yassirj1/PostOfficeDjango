app = angular.module 'PostOffice.app.customer', ['PostOffice.api']

app.controller 'AppController', ['$scope', 'Customer', ($scope, Customer) ->
    $scope.customers = Customer.query()
]