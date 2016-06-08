angular.module("sports")
  .factory("newPinFactory", function($http, $timeout) {


    return {

      postNewPin: (objectToAdd) => {
        return $timeout()
         .then($http.post("https://project-907408699296850865.firebaseio.com/pins.json", objectToAdd)
          .then(
            () => {console.log("success");},
            e => {console.log(e);}
            )
         );
      }
    }; //end of return
  });
