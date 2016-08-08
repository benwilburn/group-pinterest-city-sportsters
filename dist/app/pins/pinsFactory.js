/* jshint esversion:6 */
angular.module('sports')
  .factory('PinsFactory', ($http, FIREBASE_URL) => {
    // cached pins

    let pins = null;


    return {
      getPins: () => {
      return $http
        .get(`${FIREBASE_URL}.json`)
        .then(response => response.data);
      }
    };


  });
