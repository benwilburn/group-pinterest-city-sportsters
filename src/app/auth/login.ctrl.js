angular.module('sports')
	.controller('LoginCtrl', function($location, AuthFactory) {
		const auth = this;

		auth.login = function() {
      AuthFactory.verifyLogin(auth.user)
        .then(() => {$location.path('/pins')})
        .catch((error) => alert(error));
		}

    auth.register = function() {
      AuthFactory.registerNew(auth.user)
        .then((res) => (AuthFactory.createUserObject(res, auth.user)))
        .then(() => (AuthFactory.verifyLogin(auth.user)))
        .then(() => {$location.path('/pins')})
        .catch((error) => alert(error));
    }

	})
