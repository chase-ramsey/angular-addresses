angular.module('app')
  .controller('NewAddressCtrl', function($scope, $location, AddressFactory) {
    const address = this;
    address.new = () => {
      AddressFactory.create(address.person);
      $location.path('/addresses');
    }
  })
