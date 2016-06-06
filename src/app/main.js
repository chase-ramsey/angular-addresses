angular.module('app', ['ngRoute', 'ui.bootstrap'])
  .config(($routeProvider) => (
    $routeProvider
      .when('/', {
        controller: 'MainCtrl',
        controllerAs: 'main',
        templateUrl: 'app/partials/main.html',
      })
      .when('/addresses', {
        controller: 'AddressCtrl',
        controllerAs: 'address',
        templateUrl: 'app/partials/addresses.html',
      })
      .otherwise('/')
  ))
  .controller('MainCtrl', function () {
    const main = this
  })
  .controller('AddressCtrl', function ($scope, dummyData) {
    const address = this

    dummyData.getDummy(function(res) {
      $scope.list = res.data.data;
    })
  })
  .service('dummyData', function($http) {
      this.getDummy = function(callback) {
        $http
          .get('data/dummy.json')
          .then(callback);
    }
  })
