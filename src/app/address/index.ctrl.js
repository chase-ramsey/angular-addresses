angular.module('app')
	.controller('AddressCtrl', function ($scope, $location, AddressFactory) {
    const address = this;

    AddressFactory.all().then((data) => {
      address.list = data;
    })

    address.delete = (index) => {
      AddressFactory.delete(index);
    }

    address.goTo = function(path) {
      $location.path(path);
    }
  })
