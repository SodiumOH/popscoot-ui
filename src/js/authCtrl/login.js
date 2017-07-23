angular.module('app.login.ctrl', [])
.controller('LoginCtrl', function($scope, httpService, $location, configuration, toastService){
	$scope.authSecret;
	$scope.path = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/app/";
	var domain = configuration.domain();
	$scope.url = {
		account: domain + "service/auth"
	}
	$scope.form = {
		username: "",
		password: ""
	}
	$scope.login = function(){
		var body = {
			username: $scope.form.username,	
			password: $scope.form.password
		}
		if ($scope.form.username != "" && $scope.form.password != "") {
			httpService.httpPost($scope.url.account, body, 'LOGIN');
		} 		
	}
	$scope.$on("LOGIN", function(event, data){
		console.log(data);
		if(data.data.data.status == 1) {
			/*if (data.data.data.data.type === "admin") {	*/			
				console.log(data.data.data.data);
				console.log(data.data.data.data["Auth-Secret"]);
				localStorage.setItem("LoginId", data.data.data.data["accountId"]);
				DAO.setSecret(data.data.data.data["Auth-Secret"]);
				window.location.href = $scope.path + "index.html"
			/*} else {
				alert("not admin");
			}*/
		} else {
			toastService.showSimpleToast(data.data.data.message, 'top right', 3000, "#test")
		}
	})
 	
  console.log("LoginCtrl");
})