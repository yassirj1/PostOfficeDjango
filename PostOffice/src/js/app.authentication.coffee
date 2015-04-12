angular.module('PostOffice', [ 'ngResource' ]).config([
  '$httpProvider'
  ($httpProvider) ->
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken'
    $httpProvider.defaults.xsrfCookieName = 'csrftoken'
    return
]).service('authState', ->
  { user: undefined }
).factory('api', ($resource) ->

  add_auth_header = (data, headersGetter) ->
    headers = headersGetter()
    headers['Authorization'] = 'Basic ' + btoa(data.username + ':' + data.password)
    return

  {
    auth: $resource('/api/auth\\/', {},
      login:
        method: 'POST'
        transformRequest: add_auth_header
      logout: method: 'DELETE')
    users: $resource('/api/users\\/', {}, create: method: 'POST')
  }
).controller('authController', ($scope, api, authState) ->
  $('#id_auth_form input').checkAndTriggerAutoFillEvent()
  $scope.authState = authState

  $scope.getCredentials = ->
    {
      username: $scope.username
      password: $scope.password
    }

  $scope.login = ->
    api.auth.login($scope.getCredentials()).$promise.then((data) ->
      authState.user = data.username
      return
    ).catch (data) ->
      alert data.data.detail
      return
    return

  $scope.logout = ->
    api.auth.logout ->
      authState.user = undefined
      return
    return

  $scope.register = ($event) ->
    $event.preventDefault()
    api.users.create($scope.getCredentials()).$promise.then($scope.login).catch (data) ->
      alert data.data.username
      return
    return

  return
)