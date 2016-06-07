angular.module('app')
  .factory('AddressFactory', function() {

      let list = [
        {
          "name": "Chase Ramsey",
          "phone": "4232843278",
          "email": "ramsey.chase@gmail.com",
          "twitter": "not_chase"
        },
        {
          "name": "Zak Spence",
          "phone": "7575763400",
          "email": "zakspence@gmail.com",
          "twitter": "its_ok_trust_me"
        }
      ];

      return {
        all: function() {
          return list;
        },

        get: function(id) {
          return list[id];
        },

        create: function(person) {
          list.push(person);
        },

        update: function(index, person) {
          list = [
            ...list.slice(0, index),
            person,
            ...list.slice(+index + 1)
          ]
        },

        delete: function(i) {
          list.splice(i, 1);
        }
      }
    })
