app = angular.module 'PostOffice.app.shipments', []

app.controller 'AppController', ['$scope', '$http', ($scope, $http) ->
    $scope.shipments = []
    $http.get('/api/shipments/').then (result) ->
        angular.forEach result.data, (item) ->
            $scope.addresses.push item
]