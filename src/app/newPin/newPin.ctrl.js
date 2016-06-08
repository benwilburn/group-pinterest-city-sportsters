angular.module("sports")
  .controller("CreateEditCtrl", function($location) {
    const create = this;

    setTimeout(function() {
      $("select").material_select();
    }, 100);


    create.boards = [
      "sports", "animals", "fruit"
    ];

    // create.pin = {
    //   name: "", 
    //   url: "", 
    //   desc: "", 
    //   board: ""
    // };

    console.log("controller working" );

    create.sendPin = function(pinToAdd) {
      console.log("sendPin Function", create.pin);
      // $location.path("#/pins");
    }; //end of sendPin

    create.cancelPin = function() {
      console.log("cancelPin function");
      $location.path("#/pins");
    };//end of cancelPin

  });//end of controller

