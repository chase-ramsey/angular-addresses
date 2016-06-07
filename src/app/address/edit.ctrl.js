angular.module('app')
  .controller('EditAddressCtrl', function (AddressFactory, $location, $routeParams) {
    const address = this;
    const id = $routeParams.id;

    address.person = AddressFactory.get(id)

    address.submit = () => {
      AddressFactory.update(id, address.person)
      $location.path('/addresses')

    }
  })
