angular.module('sports')
  .factory('AuthFactory', function($http){

    let currentUser = null;

    firebase.auth().onAuthStateChanged((user) => {
      console.log("firebase auth state change", user);
      if (user) {
        var users = null;
        $http.get('http://project-907408699296850865.firebaseio.com/auth.json')
          .then((res) => {
            users = res.data;
            console.log("Users", users);
            return users;
          })
          .then((users) => {
            for (var key in users) {
              console.log("users: ", users);
              console.log("key id: ", users[key].uid);
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
