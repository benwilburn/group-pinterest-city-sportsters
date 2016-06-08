angular.module('sports', ['ngRoute']);

// Navbar logic

var btnLogout = document.getElementById("logout");
btnLogout.addEventListener("click", function() {
  firebase.auth().signOut();
});
