angular.module('app.changePassword.ctrl', [])
.controller('ChangePasswordCtrl', function($scope, httpService, configuration){
	console.log("ChangePasswordCtrl");
	
	$scope.updatePWForm;
	$scope.updatePassword = function(){
		httpService.httpPut(configuration.domain()+"/service/auth", $scope.updatePWForm, "CHANGE_PASSOWRD");
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