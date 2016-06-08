angular.module('sports')

	.controller('LoginCtrl', function($location, AuthFactory) {
		const auth = this;

		auth.login = function() {
      AuthFactory.verifyLogin(auth.user.email, auth.user.password)
        .then((r) => {console.log(r); $location.path('/pins')})
        .catch((error) => alert(error));
		}
	})

