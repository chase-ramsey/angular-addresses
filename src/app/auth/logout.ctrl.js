angular.module('app')
	.controller('LogoutCtrl', function(AuthFactory, $location) {
		const logout = this;

		AuthFactory.logout()
			.then(() => $location.path('/login'))
			.catch(() => alert('Logout failed'));
	})
