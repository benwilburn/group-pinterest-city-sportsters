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