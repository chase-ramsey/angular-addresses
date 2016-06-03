angular.module('app', ['ngRoute'])
  .config(($routeProvider) => (
    $routeProvider
      .when('/', {
        controller: 'MainCtrl',
        controllerAs: 'main',
        templateUrl: 'app/partials/main.html',
      })
      .otherwise('/')
  ))
  .controller('MainCtrl', function () {
    this.text = "Hello World"
  })
