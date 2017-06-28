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
	$scope.forgetPassword = function(){
		var body = {
			email: $scope.form.email
		}
		httpService.httpPut($scope.url.forgetPassword, body, 'FORGETPASSWORD');
		
	}

	var directInbox = function(mail){
		atPos = mail.indexOf("@"),
		hoster = mail.substring(atPos + 1);
		window.location.href = 'http://' + hoster;
	}
	var showActionToast = function(textContent, position, hideDelay, parent, email) {
		var toast = $mdToast.simple()
		.textContent('Activation email sent...')
		.action('To Inbox')
		.highlightAction(true)
      .highlightClass('md-accent')// Accent is used by default, this just demonstrates the usage.
      .position(position)
      .parent(parent);

      $mdToast.show(toast).then(function(response) {
      	if ( response == 'ok' ) {
      		directInbox(email);
      	}else{
      		window.location.href = $scope.path + "auth.html";
      	}
      });
  }
  $scope.$on("FORGETPASSWORD", function(event, data){
  	console.log(data);
  	if(data.data.data.status == 1) {
  		/*if (data.data.data.data.type === "admin") {	*/			
  			console.log(data.data.data.data);
  			showActionToast('Activation email sent', 'top right', 3000, "#test", $scope.form.email);

			/*} else {
				alert("not admin");
			}*/
		} else {
			toastService.showSimpleToast(data.data.data.message, 'top right', 3000, "#test")
		}
	})

	console.log("ForgetPasswordCtrl");
})