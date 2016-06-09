/* jshint esversion:6 */
angular.module('sports')
  .controller('PinCtrl', function (PinsFactory, $scope) {
    let pins = this;
    pins.pinCardsArray = [];

    PinsFactory.getPins()
      .then(response => {
      // .then(response =>
        // console.log("response", response);
        pins.pinCards = response.pins;
        for(var items in response.pins){
          response.pins[items].key = items;
          pins.pinCardsArray.push(response.pins[items]);

          // pins.pinCardsArray.push();
        }
        $scope.cardArray = pins.pinCardsArray;
        console.log("$scope.cardArray", $scope.cardArray)


      });

  });
