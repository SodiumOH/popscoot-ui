angular.module('auth', ['ngRoute', 'ngMaterial', 'app.service', 'app.forgetPassword.ctrl', 'app.changePassword.ctrl', 'app.register.ctrl', 'app.login.ctrl'])

.run(function($rootScope) {
	console.log("welcome to popscoot Auth");
})

.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix("");

	$routeProvider

	.when('/login', {
		templateUrl: "templates/auth/login.html",
		controller: "LoginCtrl"
	})
	.when('/forgetPassword', {
		templateUrl: "templates/auth/forgetPassword.html",
		controller: "ForgetPasswordCtrl"
	})
	.when('/changePassword', {
		templateUrl: "templates/auth/changePassword.html",
		controller: "ChangePasswordCtrl"
	})
	.when('/register', {
		templateUrl: "templates/auth/register.html",
		controller: "RegisterCtrl"
	})
	.otherwise({
		redirectTo: '/login'
	});
})

/*.controller('LoginCtrl', function($scope, httpService, configuration){
	var loginForm = {
		username: $scope.username,
		password: $scope.password
	}
	$scope.url = configuration.domain()+"/service/auth"
	function login (){
		httpService.httpPost($scope.url, loginForm, "LOGIN")
	}
	$scope.$on("LOGIN")

})

*/