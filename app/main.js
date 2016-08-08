angular.module('sports', ['ngRoute']);

// Navbar logic

$("#logout").click(function() {
  firebase.auth().signOut();
});
