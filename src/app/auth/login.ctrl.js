angular.module('app')
	.controller('LoginCtrl', function(AuthFactory, $location) {
		const auth = this;

		auth.login = function () {
			AuthFactory.login(auth.user.email, auth.user.password)
				.then(() => $location.path('/addresses'))
				.catch(() => alert('Login failed'))
		}
	})
