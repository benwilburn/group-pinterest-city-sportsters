/* jshint esversion:6 */
angular.module('sports')
  .controller('PinCtrl', function (PinsFactory, $scope, userAuth, $location, $http) {
    let pins = this;
    pins.pinCardsArray = [];

    console.log("userAuth: ", userAuth);

    pins.currentAuth = userAuth;
    console.log("currentAuth: ", pins.currentAuth);

    pins.goToEdit = function(keyPath) {
      $location.path(`/pins/edit/${keyPath}`)
    }

    pins.deletePin = function(itemId, index) {
      $http.delete(`https://project-907408699296850865.firebaseio.com/pins/${itemId}.json`)
        .then(() => {$scope.cardArray.splice(index, 1)})
        .catch((error) => (console.log(error)))
    }

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
