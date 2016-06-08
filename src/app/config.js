angular.module("sports")
	.config(($routeProvider) => {
  $routeProvider
		// Authentication routes
    .when("/", {
      templateUrl: "app/auth/login.html",
      controller: "LoginCtrl",
      controllerAs: "auth"

    })
    .when("/logout", {
      template: "",
      controller: "LogoutCtrl",
      controllerAs: "auth"

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
      controller: "EditCtrl",
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
