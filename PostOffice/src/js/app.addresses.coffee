app = angular.module 'PostOffice.app.addresses', []

app.controller 'AppController', ['$scope', '$http', ($scope, $http) ->
    $scope.addresses = []
    $http.get('/api/addresses/').then (result) ->
        angular.forEach result.data, (item) ->
            $scope.addresses.push item
]