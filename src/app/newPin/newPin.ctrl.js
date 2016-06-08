angular.module("sports")
  .controller("CreateEditCtrl", function(newPinFactory, AuthFactory, $scope, $location) {
    const create = this;
    $scope.title = "Create A New Pin";


    //$scope.title = "create a new board"
    //
    //in html: $scope.title
    

    const currentUser = AuthFactory.getUser("uid");
    console.log("current", currentUser);


    create.boards = [ //boardFactory.getBoardArray();
      "sports", "animals", "fruit"
    ];

    //sample object being created from the form. 
    create.pin = {
      // user: currentUser.uid,
      name: "", 
      imageUrl: "", 
      desc: "", 
      board: "" //this will be the board ID, not a board name.
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

