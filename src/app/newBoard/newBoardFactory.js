angular.module("sports")
  .factory("newBoardFactory", function($http, $timeout) {


    return {

      postNewBoard: (objectToAdd) => {
        return $timeout()
         .then($http.post("https://project-907408699296850865.firebaseio.com/board.json", objectToAdd)
          .then(
            () => {console.log("success");},
            e => {console.log(e);}
            )
         );
      }
    }; //end of return
  });



  //send new board function. this POSTS to the board object.
  //get the boards function. put both functions inside the return object- so it needs to say return {
  //
  //postNewBoard: function(boardToPost) {
  //}
  //giveMeganTheBoardObjects <--this is where the function you've already written goes.
  //}
