app = angular.module 'PostOffice.app.incomingshipments', []

app.controller 'AppController', ['$scope', '$http', ($scope, $http) ->
    $scope.incomingshipment = []
    $http.get('/api/incomingshipments/').then (result) ->
        angular.forEach result.data, (item) ->
            $scope.addresses.push item
]