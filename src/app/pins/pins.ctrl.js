/* jshint esversion:6 */
angular.module('sports')
  .controller('PinCtrl', function (PinsFactory, userAuth, $location) {
    let pins = this;

    console.log("userAuth: ", userAuth);

    pins.currentAuth = userAuth;
    console.log("currentAuth: ", pins.currentAuth);

    pins.goToEdit = function(keyPath) {
      $location.path(`/pins/edit/${keyPath}`)
    }

    PinsFactory.getPins()
      .then(response => {
      // .then(response =>
        console.log("response", response);
        pins.pinCards = response.pins;
      });

  });
