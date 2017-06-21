angular.module('app.login.ctrl', [])
.controller('LoginCtrl', function($scope, httpService, $location){
	$scope.path = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/app/";
	console.log("LoginCtrl");
	$scope.successfulLogin = function(){
		window.location.href = ($scope.path + "index.html");
	}
})