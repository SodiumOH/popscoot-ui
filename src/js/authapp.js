angular.module('auth', ['ngRoute', 'ngMaterial', 'app.service', 'app.forgetPassword.ctrl', 'app.changePassword.ctrl', 'app.register.ctrl', 'app.login.ctrl'])

.run(function($rootScope) {
	console.log("welcome to popscoot Auth");
})

.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix("");

	$routeProvider

	.when('/login', {
		templateUrl: "authTemplates/login.html",
		controller: "LoginCtrl"
	})
	.when('/forgetPassword', {
		templateUrl: "authTemplates/forgetPassword.html",
		controller: "ForgetPasswordCtrl"
	})
	.when('/changePassword', {
		templateUrl: "authTemplates/changePassword.html",
		controller: "ChangePasswordCtrl"
	})
	.when('/register', {
		templateUrl: "authTemplates/register.html",
		controller: "RegisterCtrl"
	})
	.otherwise({
		redirectTo: '/login'
	});
})
.controller("AuthCtrl", function(){
	console.log("Auth Ctrl");
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