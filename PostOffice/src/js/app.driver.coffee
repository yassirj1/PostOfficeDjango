app = angular.module 'PostOffice.app.driver', []

app.controller 'AppController', ['$scope', '$http', ($scope, $http) ->
    $scope.drivers = []
    $http.get('/api/drivers/').then (result) ->
        angular.forEach result.data, (item) ->
            $scope.addresses.push item
]