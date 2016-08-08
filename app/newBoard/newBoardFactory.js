angular.module("sports")
  .factory("newBoardFactory", function($http, $timeout) {

    let boardData = null;


    return {
      getBoardData: () => {
        return $timeout(function() {
          return $http.get("https://project-907408699296850865.firebaseio.com/board.json")
            .then((res)=> {boardData = res.data; 
              return boardData;});
        }, 0);
      },

      postNewBoard: (objectToAdd) => {
        return $timeout(function() {
         return $http.post("https://project-907408699296850865.firebaseio.com/board.json", objectToAdd)
          .then(
            () => {console.log("success");},
            e => {console.log(e);}
            );
        }, 0);
      }
    }; //end of return
  });
