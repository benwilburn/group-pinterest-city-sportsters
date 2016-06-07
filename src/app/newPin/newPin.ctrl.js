angular.module("sports")
  .controller("CreateEditCtrl", function($location) {
    const create = this;

    console.log("controller working" );

    create.sendPin = function() {
      console.log("sendPin Function");
      $location.path("#/pins");
    }; //end of sendPin

    create.cancelPin = function() {
      console.log("cancelPin function");
      $location.path("#/pins");
    };//end of cancelPin

  });//end of controller

