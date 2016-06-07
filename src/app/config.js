angular.module("sports")
	.config(($routeProvider) => {
  $routeProvider
		// Authentication routes
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
    .when("/", {
      templateUrl: "app/auth/login.html",
      controller: "LoginCtrl",
      controllerAs: "login"
    })
    .when("/logout", {
      template: "",
      controller: "LogoutCtrl",
      controllerAs: "logout"
    })
			// Pin display route
    .when("/pins", {
      templateUrl: "app/pins/pins.html",
      controller: "PinCtrl",
      controllerAs: "pins"
    })
			// Pin create/edit routes
    .when("/pins/new", {
      templateUrl: "app/newPin/newPin.html",
      controller: "CreateEditCtrl",
      controllerAs: "create"
    })
    .when("/pins/edit/:id", {
      templateUrl: "app/newPin/newPin.html",
      controller: "CreateEditCtrl",
      controllerAs: "create"
    })
			// Board create/edit routes
    .when("/board/new", {
      templateUrl: "app/newBoard/newBoard.html",
      controller: "BoardCtrl",
      controllerAs: "board"
    })
    .when("/board/edit/:id", {
      templateUrl: "app/newBoard/newBoard.html",
      controller: "BoardCtrl",
      controllerAs: "board"
    });
	});
