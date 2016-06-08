angular.module("sports")
  .controller("EditCtrl", function(newPinFactory, $scope, $location, $routeParams) {
    $scope.title="Edit Your Pin";
    const create = this;
    const id= $routeParams.id;

    create.pin = newPinFactory.getPinToEdit(id);
    console.log("pin", create.pin);

    create.sendPin =  function () {
      console.log("edit pin function", create.pin);

    };

    create.cancelPin = function() {
      console.log("cancelPin function");
      $location.path("#/pins");
    };//end of cancelPin

  });
