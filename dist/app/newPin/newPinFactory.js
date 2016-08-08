angular.module("sports")
  .factory("newPinFactory", function($http, AuthFactory, $timeout) {
    

    let currentPin= "";

    
    return {

      postNewPin: (objectToAdd) => {
        // return $timeout(function() {
          return $http.post("https://project-907408699296850865.firebaseio.com/pins.json", objectToAdd);
            // .then(
            // () => {console.log("success");},
            // e => {console.log(e);}
            // );
        // });
      }, 

      getPinToEdit: (id) => {
        return $http.get(`https://project-907408699296850865.firebaseio.com/pins/${id}.json`)
            .then(
            (data) => {
              console.log("success", data.data);
              currentPin = data.data;
              return currentPin;
            }, e => {console.log(e);});
      },

      editPin: (id, object) => {
        return $http.patch(`https://project-907408699296850865.firebaseio.com/pins/${id}.json`, object);
      }

    }; //end of return
  });
