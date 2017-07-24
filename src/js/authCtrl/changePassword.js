angular.module('app.changePassword.ctrl', [])
.controller('ChangePasswordCtrl', function($scope, httpService){
	console.log("ChangePasswordCtrl");
	$scope.email;
	$scope.requestSecret = function(){
		httpService.httpPut("http://test.popscoot.com/popscoot/service/auth", $scope.email, "REQUEST_SECRET");
	}
	$scope.$on('REQUEST_SECRET', function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.success = true;
		} else {
			console.log(data.data.data.message);
			$scope.display = data.data.data.message;
		}
	})
	$scope.updatePWForm;
	$scope.updatePassword = function(){
		httpService.httpPut("http://test.popscoot.com/popscoot/service/auth", $scope.updatePWForm, "CHANGE_PASSOWRD");
	}
	$scope.$on('CHANGE_PASSOWRD', function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.message = "success!";
			window.location.href = "#/login"
		} else {
			console.log(data.data.data.message);
			$scope.display = data.data.data.message;
		}
	})
})