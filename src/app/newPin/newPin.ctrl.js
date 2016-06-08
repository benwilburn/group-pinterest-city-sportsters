angular.module("sports")
  .controller("CreateEditCtrl", function(newPinFactory, newBoardFactory, AuthFactory, $scope, $location) {
    const create = this;
    $scope.title = "Create A New Pin";

   
    var boardDataGetter =  newBoardFactory.getBoardData();

   boardDataGetter.then(boards => {create.boards = boards; console.log("boards", create.boards ); });
    
     

    //sample object being created from the form. 
    // create.pin = {
    //   user: "",
    //   name: "", 
    //   imageUrl: "", 
    //   desc: "", 
    //   board: "" //this will be the board ID, not a board name.
    // };

    create.sendPin = function() {
        //constructing the object with the User ID. would like to move to the factory in V2. 
      const currentUser = AuthFactory.getUser();
      create.pin.user = currentUser.uid;
      create.pin.userName= currentUser.username;
      console.log("current object", create.pin);

      newPinFactory.postNewPin(create.pin)
        .then(() => {console.log("about to switch"); $location.path("/pins");});
    }; //end of sendPin

    create.cancelPin = function() {
      console.log("cancelPin function");
      $location.path("/pins");
    };//end of cancelPin

  });//end of controller
