app = angular.module 'PostOffice.static', []

app.controller 'AppController', ['$scope', '$http', ($scope, $http) ->
    $scope.addresses = [ 
      streetline1: '1'
      streetline2: '2'
      streetline3: '3'
]
]
