angular.module('sports')
  .factory('AuthFactory', function($http){

    let currentUser = null;

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var users = null;
        $http.get('http://project-907408699296850865.firebaseio.com/auth.json')
          .then((res) => {
            users = res.data;
            return users;
          })
          .then((users) => {
            for (var key in users) {
              if (users[key].uid === user.uid) {
                currentUser = users[key];
                console.log("currentUser: ", currentUser);
              }
            }
          })
        }
    })

    return {

      verifyLogin: function(email, password) {
       return firebase.auth()
          .signInWithEmailAndPassword(email, password);
      },

      getUser: function(param) {
        if (param) {
          return currentUser[param];
        } else {
            return currentUser;
          }
      }

    }
  })
