angular.module('app', ['ngRoute', 'ui.bootstrap'])
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
    const main = this

    main.alerts = [
      {
        type: 'danger',
        msg: 'Oh snap!'
      },
      {
        type: 'success',
        msg: 'Hello World!'
      }
    ]

    main.closeAlert = (index) => main.alerts.splice(index, 1)

  })
