app = angular.module 'PostOffice.app.deliveryroutes', []

app.controller 'AppController', ['$scope', '$http', ($scope, $http) ->
    $scope.deliveryroutes = []
    $http.get('/api/deliveryroutes/').then (result) ->
        angular.forEach result.data, (item) ->
            $scope.addresses.push item
]