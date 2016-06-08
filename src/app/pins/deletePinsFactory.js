/* jshint esversion:6 */
angular.module('sports')
  .factory('DeletePinsFactory', ($http, FIREBASE_URL) => {
    let delete = this;

    return{
      deletePin: () => {
        return $http
          .delete(`${FIREBASE_URL}/pins/${variable.firebaseID}.json`);
      }
    };
  });
