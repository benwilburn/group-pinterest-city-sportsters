/* jshint esversion:6 */
angular.module('sports')
  .controller('PinCtrl', function (PinsFactory) {
    let pins = this;

    PinsFactory.getPins()
      .then(response => {
      // .then(response =>
        console.log("response", response);
        pins.pinCards = response.pins;
      });

  });
