angular.module("sports")
  .controller("BoardCtrl", function(newBoardFactory, $scope, $location, AuthFactory) {
    const board = this;
    $scope.title = "Create A New Board";

    board.sendBoard = function() {
      const currentUser = AuthFactory.getUser();
      board.board.user = currentUser.uid;
      board.board.userName = currentUser.username;
      console.log("sendBoard Function", board.board);

      newBoardFactory.postNewBoard(board.board)
        .then(() => {$location.path("/pins");});
    }; //end-sendBoard

    board.cancelBoard = function() {
      $location.path("/pins");
    };//end -cancelBoard

  });//end-controller



// a function that runs when the submit button is clicked.
// this.postNewBoard = function(boards.boardToSend)
// the function will receive the value of the text box AND also has to grab the token of the logged-in user
// and send that value to the factory.
// After the factory function runs, it will redirect to the 'pins' homepage.
