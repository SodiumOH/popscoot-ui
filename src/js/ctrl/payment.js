angular.module('app.payment.ctrl', [])

.controller('PaymentCtrl', function($scope,$mdDialog, $location, $routeParams, httpService, configuration, $mdToast) {
	console.log('this is PaymentCtrl');
	$scope.url = {
		payment: configuration.domain()+"/service/payments/"+$routeParams.id,
		transactions: configuration.domain()+"/service/payments/"+$routeParams.id+"/transactions"
	};
	$scope.$emit('BC', 
	{
		name: "Payment",
		url: "payments/"+$routeParams.id
	});
	$scope.payment;
	$scope.transactions = [];
	function getPayment(){
		httpService.httpGet($scope.url.payment, 'GET_PAYMENT');		
	};

	$scope.$on("GET_PAYMENT", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.payment = data.data.data.data;
			$scope.$emit("GETFINISHED");
		} else {
			console.log(data.data.data.message);
			$scope.$emit("GETFINISHED");
			$mdToast.show(
						$mdToast.simple()
						.textContent(data.data.data.message)
						.hideDelay(3000)
						.position("top right")
						.theme('error-toast')
						);
		}
	});

	$scope.updatePayment = function(){
		var updateForm = $scope.payment;
		httpService.httpPut($scope.url.payment, updateForm, 'UPDATE_Payment');
	}
	$scope.$on('UPDATE_Payment', function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.payment = data.data.data.data;
			$mdToast.show(
				$mdToast.simple()
				.textContent("Success")
				.hideDelay(3000)
				.position("top right")
				);
		} else {
			console.log(data.data.data.message);
			$mdToast.show(
						$mdToast.simple()
						.textContent(data.data.data.message)
						.hideDelay(3000)
						.position("top right")
						.theme('error-toast')
						);
		}
	})

	deletepayment = function(){
		httpService.httpDelete($scope.url.payment, 'DELETE_payment');
	}

	$scope.$on("DELETE_payment", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$mdToast.show(
				$mdToast.simple()
				.textContent("Success")
				.hideDelay(3000)
				.position("top right")
				);
		} else {
			console.log(data.data.data.message);
			$mdToast.show(
						$mdToast.simple()
						.textContent(data.data.data.message)
						.hideDelay(3000)
						.position("top right")
						.theme('error-toast')
						);
		}
	});

	$scope.showPrompt = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.prompt()
    .title('Confirm Deletion')
    .textContent('Please key in the Payment ID of the payment to delete')
    .placeholder('Payment ID')
    .ariaLabel('integrate_id')
    .targetEvent(ev)
    .ok('Confirm')
    .cancel('Cancel');

    $scope.path = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/app/";
    $mdDialog.show(confirm).then(function(result) {
    	if (result == $scope.payment.paymentId) {
    		deletepayment();    		
    		$location.path('/payments');
    		/*window.location.href = $scope.path + "index.html#/payments";*/
    	} else {

    		$scope.status = 'Username Mismatch';
    	}
    	
    }, function() {
    	$scope.status = 'Action canceled';
    });
};

function getTransactions(){
	httpService.httpGet($scope.url.transactions, 'GET_TRANSACTIONS');		
};

$scope.$on("GET_TRANSACTIONS", function(event, data){
	if(data.data.data.status == 1) {
		console.log(data.data.data.data);
		$scope.transactions = data.data.data.data;
		$scope.$emit("GETFINISHED");
	} else {
		console.log(data.data.data.message);
		$scope.$emit("GETFINISHED");
	}
});
getPayment();
getTransactions();

$scope.itemsOrder = "date";
$scope.reverse = true;
$scope.order = function(){
	$scope.reverse = !$scope.reverse;
}
//pagination start
$scope.currentPageNumber = 1;
$scope.itemsPerPage = 10;

$scope.getNumberOfPages = function() {
	var count = $scope.transactions.length / $scope.itemsPerPage;
	if(($scope.transactions.length % $scope.itemsPerPage) > 0) count++;
	return Math.floor(count);
}

$scope.pageDown = function()
{
	if($scope.currentPageNumber > 1) $scope.currentPageNumber--;
}

$scope.pageUp = function()
{
	if($scope.currentPageNumber < $scope.getNumberOfPages()) $scope.currentPageNumber++;
}
    //pagination end




})

.controller('PaymentsCtrl', function($scope, $location, httpService, configuration, $mdToast) {
	console.log('this is PaymentsCtrl');
	$scope.path = "#/payments/";
	/*var path = $location.path();
	$scope.goPage = function(path){
		$location.path(path);
	}*/
	$scope.url = configuration.domain()+"/service/payments";
	$scope.payments = [];

	httpService.httpGet($scope.url, 'GET_PAYMENTS');

	$scope.$emit('BC', 
	{
		name: "Payments",
		url: "payments"
	});
	$scope.$on("GET_PAYMENTS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.payments = data.data.data.data;
			$scope.$emit("GETFINISHED");
		} else {
			console.log(data.data.data.message);
			$scope.$emit("GETFINISHED");
			$mdToast.show(
						$mdToast.simple()
						.textContent(data.data.data.message)
						.hideDelay(3000)
						.position("top right")
						.theme('error-toast')
						);
		}
	});

	//orderBy start
	$scope.itemsOrder = "date";
	$scope.reverse = true;
	$scope.order = function(){
		$scope.reverse = !$scope.reverse;
	}

     //pagination start
     $scope.currentPageNumber = 1;
     $scope.itemsPerPage = 10;

     $scope.getNumberOfPages = function() {
     	var count = $scope.payments.length / $scope.itemsPerPage;
     	if(($scope.payments.length % $scope.itemsPerPage) > 0) count++;
     	return Math.floor(count);
     }

     $scope.pageDown = function()
     {
     	if($scope.currentPageNumber > 1) $scope.currentPageNumber--;
     }

     $scope.pageUp = function()
     {
     	if($scope.currentPageNumber < $scope.getNumberOfPages()) $scope.currentPageNumber++;
     }
    //pagination end
})
.controller('NewPaymentCtrl', function($scope, httpService, $mdDialog, configuration, $location, $mdToast){
	console.log("this is NewPaymentCtrl");
	function getAccounts() {
		httpService.httpGet((configuration.domain()+"/service/accounts"), 'GET_BACCOUNTS');
	}
	$scope.$emit('BC', 
	{
		name: "Create Payment",
		url: "new/payment"
	});

	$scope.$on("GET_BACCOUNTS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.accounts = data.data.data.data;
			$scope.$emit("GETFINISHED");
		} else {
			console.log(data.data.data.message);
			$scope.$emit("GETFINISHED");
		}

	});
	getAccounts();

	$scope.accDialog = function(ev) {
		$mdDialog.show({
			locals: {localAcc: $scope.accounts},
			controller: DialogController,
			templateUrl: 'templates/accountPicker.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
  })
		.then(function(answer) {
			$scope.accountId = answer.accountId;
		}, function() {
			$scope.status = 'You cancelled the dialog.';
		});
	};

	function DialogController($scope, $mdDialog, Upload, httpService, localAcc, $mdToast) {
		$scope.accounts = localAcc;

		$scope.itemsOrder = "active";
		$scope.reverse = true;
		$scope.order = function(){
			$scope.reverse = !$scope.reverse;
		}
		$scope.currentPageNumber = 1;
		$scope.itemsPerPage = 10;
		$scope.search;
		$scope.getNumberOfPages = function() {
			var count = $scope.accounts.length / $scope.itemsPerPage;
			if(($scope.people.length % $scope.itemsPerPage) > 0) count++;
			return count;
		}

		$scope.pageDown = function()
		{
			if($scope.currentPageNumber > 1) $scope.currentPageNumber--;
		}

		$scope.pageUp = function()
		{
			if($scope.currentPageNumber < $scope.getNumberOfPages()) $scope.currentPageNumber++;
		}

		console.log($scope.accounts);

		//test end
		$scope.hide = function() {
			$mdDialog.hide();
		};

		$scope.cancel = function() {
			$mdDialog.cancel();
		};

		$scope.answer = function(answer) {
			$mdDialog.hide(answer);
		};
	}
	$scope.payment = {
		cash: 39.0,
		deposit: 39.0
	}
	$scope.createPayment = function(){
		var createForm = $scope.payment;
		createForm.accountId = $scope.accountId;
		console.log(createForm);
		httpService.httpPost((configuration.domain()+"/service/payments"), createForm, 'CREATE_PAYMENT');
	}
	$scope.$on("CREATE_PAYMENT", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.payment = data.data.data.data;
			$location.path("/payments/"+$scope.payment.paymentId);	
			$mdToast.show(
				$mdToast.simple()
				.textContent("Success")
				.hideDelay(3000)
				.position("top right")
				);	
			/*window.location.href = "#payments/" + $scope.payment.paymentId;*/
		} else {
			console.log(data.data.data.message);
			$mdToast.show(
						$mdToast.simple()
						.textContent(data.data.data.message)
						.hideDelay(3000)
						.position("top right")
						.theme('error-toast')
						);
		}
	})
	
})

