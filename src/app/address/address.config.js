angular.module('app')
	.config(($routeProvider) => (
		$routeProvider
			.when('/addresses', {
        controller: 'AddressCtrl',
        controllerAs: 'address',
        templateUrl: 'app/partials/addresses.html',
      })
      .when('/addresses/new', {
        controller: 'NewAddressCtrl',
        controllerAs: 'address',
        templateUrl: 'app/partials/newAddress.html'
      })
      .when('/addresses/:id/edit', {
        controller: 'EditAddressCtrl',
        controllerAs: 'address',
        templateUrl: 'app/partials/newAddress.html'
      })
	)
)
