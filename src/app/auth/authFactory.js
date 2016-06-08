angular.module('sports')
  .factory('AuthFactory', function($http){

    let currentUser = null;

    firebase.auth().onAuthStateChanged((user) => {
      console.log("firebase auth state changed");
      if (user) {
        console.log("auth object found");
        var users = null;
        $http.get('https://project-907408699296850865.firebaseio.com/auth.json')
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

      verifyLogin: function(user) {
       return firebase.auth()
          .signInWithEmailAndPassword(user.email, user.password);
      },

      registerNew: function(user) {
        return firebase.auth()
          .createUserWithEmailAndPassword(user.email, user.password);
      },

      createUserObject: function(res, user) {
        user.uid = res.uid;
        $http.post("https://project-907408699296850865.firebaseio.com/auth.json", user);
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
