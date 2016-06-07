angular.module('app')
	.controller('AddressCtrl', function ($scope, $location, AddressFactory) {
    const address = this;

    address.list = AddressFactory.all();

    address.delete = (index) => {
      AddressFactory.delete(index);
    }

    address.goTo = function(path) {
      $location.path(path);
    }
  })
