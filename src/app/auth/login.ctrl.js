angular.module('sports')
	.controller('LoginCtrl', function($location) {
		const auth = this;

		auth.login = function() {
			$location.path('/pins');
		}
	})
