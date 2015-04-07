app = angular.module 'PostOffice.app.customer', []

app.controller 'AppController', ['$scope', '$http', ($scope, $http) ->
    $scope.customers = []
    $http.get('/api/customers/').then (result) ->
        angular.forEach result.data, (item) ->
            $scope.addresses.push item
]