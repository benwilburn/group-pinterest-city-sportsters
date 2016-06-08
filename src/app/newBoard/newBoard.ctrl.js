angular.module("sports")
  .controller("BoardCtrl", function() {  //pass in userID?

  // var boards = this
  // 
  // boardToSend = {
  // name: "",
  // userId: authFactory.getUser(uid)
  // }

  this.addBoard = function() {
      this.list.push({name: board.name});
    };

    console.log("test" );

  });

// a function that runs when the submit button is clicked. 
// this.postNewBoard = function(boards.boardToSend)
// the function will receive the value of the text box AND also has to grab the token of the logged-in user
// and send that value to the factory. 
// After the factory function runs, it will redirect to the 'pins' homepage. 
