app = angular.module 'PostOffice.app.Customer', ['PostOffice.api']

app.controller 'AppController', ['$scope', 'Customer', ($scope, Customer) ->
    $scope.customers = Customer.query()
]