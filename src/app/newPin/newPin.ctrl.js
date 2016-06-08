angular.module("sports")
  .controller("CreateEditCtrl", function(newPinFactory, $location) {
    const create = this;
    const title = "Create A New Pin";

    // setTimeout(function() {
    //   $("select").material_select();
    // }, 100);


    create.boards = [ //boardFactory.getBoardArray();
      "sports", "animals", "fruit"
    ];

    //sample object being created from the form.
    create.pin = {
      user: "-KJgEf10nvtn1qpxghVE", //authFactory.getUser(token)
      name: "",
      url: "",
      desc: "",
      board: "" //newBoardFactory.giveMegantheBoard
    };

    create.sendPin = function() {
      console.log("sendPin Function", create.pin);

      newPinFactory.postNewPin(create.pin)
        .then(() => {$location.path("#/pins");});
    }; //end of sendPin

    create.cancelPin = function() {
      console.log("cancelPin function");
      $location.path("#/pins");
    };//end of cancelPin

  });//end of controller

