angular.module('app')
	.controller('AddressCtrl', function ($scope, $location, AddressFactory) {
    const address = this;

    address.list = AddressFactory.all();

    address.delete = (index) => {
      AddressFactory.delete(index);
      address.list = [
        ...address.list.slice(0, index),
        ...address.list.slice(index + 1)
      ]
    }

    address.goTo = function(path) {
      $location.path(path);
    }
  })
