angular.module('app.ctrl.login', [])

.controller('LoginCtrl', function($scope, httpService, $location){
	
	$scope.param = {
		loginForm: {},
		
	};

	$scope.submitLogin = function() {
		var loginForm = 
		{
			"email": $scope.param.loginForm.email,
			"password": $scope.param.loginForm.email
			
		}
			
		
		httpService.httpPost("http://test.popscoot.com/popscoot/api/authentication/login", loginForm, "submitLoginform");

	}

	$scope.$on("submitLoginform", function(event, data){
		
		if(data.data.data.status == 1) {
			
			
			alert('submitted');
	   		
			// var admintInfo = JSON.stringify (accdata);
			// console.log("adminInfo", adminInfo);
			// for (var i in data.data.data.data) {

			// }
		} else {
			console.log(data.data.data.message);
		}
	});

});
