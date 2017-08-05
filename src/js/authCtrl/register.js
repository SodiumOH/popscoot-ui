angular.module('app.register.ctrl', [])
.controller('RegisterCtrl', function($scope, httpService, toastService, configuration, $location, $mdToast){
	var domain = configuration.domain();	
	$scope.path = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/app/";
	$scope.url = {
		register: domain + "/service/accounts"
	}
	$scope.form = {
		username: "",
		email: "",
		password: ""
	}
	$scope.register = function(){
		var body = {
			username: $scope.form.username,	
			email: $scope.form.email,
			password: $scope.form.password
		}
		if ($scope.form.username != "" && $scope.form.password != "") {
			httpService.httpPost($scope.url.register, body, 'REGISTER');
		} 		
	}

	
	var showActionToast = function(textContent, position, hideDelay, parent, email) {
		var toast = $mdToast.simple()
		.textContent('Activation email sent...')// Accent is used by default, this just demonstrates the usage.
		.position(position)
		.parent(parent);

		$mdToast.show(toast).then(function(response) {
			if ( response == 'ok' ) {
				directInbox(email);
			}else{
				window.location.href = "auth.html";
			}
		});
	}
	$scope.$on("REGISTER", function(event, data){
		console.log(data);
		if(data.data.data.status == 1) {
			/*if (data.data.data.data.type === "admin") {	*/			
				console.log(data.data.data.data);
				showActionToast('Activation email sent', 'top right', 3000, "#test", $scope.form.email);

			/*} else {
				alert("not admin");
			}*/
		} else {
			$mdToast.show(
				$mdToast.simple()
				.textContent(data.data.data.message)
				.hideDelay(30000)
				.position("top right")
				.parent("#authPage")
				.theme('error-toast')
				);
		}
	})

	console.log("RegisterCtrl");
})
.directive("compareTo", function(){
	return {
		require: "ngModel",
		scope: {
			otherModelValue: "=compareTo"
		},
		link: function(scope, element, attributes, ngModel) {

			ngModel.$validators.compareTo = function(modelValue) {
				return modelValue == scope.otherModelValue;
			};

			scope.$watch("otherModelValue", function() {
				ngModel.$validate();
			});
		}
	};
})
/*.directive("existUsername", function($http, $q, configuration){
	var domain = configuration.domain();
	url = {
		validateUser: domain + "service/accounts"
	}
	return {
		require: 'ngModel',
		link: function(scope, elm, attrs, ngModel) {
			ngModel.$asyncValidators.uniqueUsername = function(username) {
				var body = {
					"username": username
				}
				$http.post(url.validateUser, body)
				.then(function(response) {
					console.log(response);
					if (response.data.status == 0) {
						return $q.reject("Username has already been taken");
					} else {
						return true;
					}
				})
			}
		}
	}
})*/