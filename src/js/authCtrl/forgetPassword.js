angular.module('app.forgetPassword.ctrl', [])
.controller('ForgetPasswordCtrl', function($scope, httpService, $location, $mdToast, toastService, configuration){
	var domain = configuration.domain();	
	$scope.path = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/app/";
	$scope.url = {
		forgetPassword: domain + "service/auth"
	}
	$scope.form = {
		email: ""
	}
  $scope.updatePWForm = {
        password: "",
        secret: ""
    };
	$scope.success = false;
	$scope.forgetPassword = function(){
		var body = {
			email: $scope.form.email
		}
		httpService.httpPut($scope.url.forgetPassword, body, 'FORGETPASSWORD');
		
	}


	var showActionToast = function(textContent, position, hideDelay, parent) {
		var toast = $mdToast.simple()
		.textContent('Email sent...')
		.hideDelay('hideDelay')
		.highlightAction(true)
      .highlightClass('md-accent')// Accent is used by default, this just demonstrates the usage.
      .position(position)
      .parent(parent);

      $mdToast.show(toast).then(function(response) {
      	if ( response == 'ok' ) {
      		directInbox(email);
      	}else{
      		$scope.success = true;
      	}
      });
    }
    $scope.$on("FORGETPASSWORD", function(event, data){
     console.log(data);
     if(data.data.data.status == 1) {
      /*if (data.data.data.data.type === "admin") {	*/			
       console.log(data.data.data.data);
       showActionToast('Activation email sent', 'top right', 3000);

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


    $scope.updatePassword = function(){
     console.log($scope.updatePWForm);
     httpService.httpPut(configuration.domain()+"/service/auth", $scope.updatePWForm, "UPDATE_PASSWORD");
   }
   $scope.$on('UPDATE_PASSWORD', function(event, data){
     if(data.data.data.status == 1) {
      console.log(data.data.data.data);
      $mdToast.showSimple("Update success").position("top right").hideDelay(500);
      $timeout(function(){
       window.location.href = "#/login"
     }, 500);  		
    } else {
      console.log(data.data.data.message);
      $scope.display = data.data.data.message;
    }
  })

   console.log("ForgetPasswordCtrl");
 })