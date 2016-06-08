angular.module('sports')
  .factory('boardFactory', function() {

  $http({
    method: 'GET',
    url: 'https://console.firebase.google.com/project/project-907408699296850865/database/data/board'
  }).then(function successCallback(response) {
      console.log(response );
      // this callback will be called asynchronously
      // when the response is available
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
})


  //send new board function. this POSTS to the board object. 
  //get the boards function. put both functions inside the return object- so it needs to say return {
  //
  //postNewBoard: function(boardToPost) {
  //}
  //giveMeganTheBoardObjects <--this is where the function you've already written goes. 
  //}
