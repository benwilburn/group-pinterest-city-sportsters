/* jshint esversion:6 */
angular.module('sports')
  .controller('PinCtrl', function (PinsFactory, userAuth, $location, $http) {
    let pins = this;

    console.log("userAuth: ", userAuth);

    pins.currentAuth = userAuth;
    console.log("currentAuth: ", pins.currentAuth);

    pins.goToEdit = function(keyPath) {
      $location.path(`/pins/edit/${keyPath}`)
    }

    pins.deletePin = function(itemId) {
      $http.delete(`https://project-907408699296850865.firebaseio.com/pins/${itemId}.json`)
        .then(() => {delete pins.pinCards[itemId]})
        .catch((error) => (console.log(error)))
    }

    PinsFactory.getPins()
      .then(response => {
      // .then(response =>
        console.log("response", response);
        pins.pinCards = response.pins;
      });

  });
