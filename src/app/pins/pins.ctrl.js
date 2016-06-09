/* jshint esversion:6 */
angular.module('sports')
  .controller('PinCtrl', function (PinsFactory, userAuth) {
    let pins = this;

    let currentAuth = userAuth;
    console.log("currentAuth: ", currentAuth);

    PinsFactory.getPins()
      .then(response => {
      // .then(response =>
        console.log("response", response);
        pins.pinCards = response.pins;
      });

  });
