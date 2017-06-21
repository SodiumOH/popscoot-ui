angular.module('app.payment.ctrl', [])

.controller('PaymentCtrl', function($scope, $routeParams, httpService) {
	console.log('this is PaymentCtrl');
	$scope.url = {
		payment: "http://test.popscoot.com/popscoot/service/payments/"+$routeParams.id,
		transactions: "http://test.popscoot.com/popscoot/service/payments/"+$routeParams.id+"/transactions"
	};
	$scope.payment;
	$scope.transactions;
	function getPayment(){
		httpService.httpGet($scope.url.payment, 'GET_PAYMENT');		
	};

	$scope.$on("GET_PAYMENT", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.payment = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});

	function getTransactions(){
		httpService.httpGet($scope.url.transactions, 'GET_TRANSACTIONS');		
	};

	$scope.$on("GET_TRANSACTIONS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.transactions = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});
	getPayment();
	getTransactions();
})

.controller('PaymentsCtrl', function($scope, $location, httpService) {
	console.log('this is PaymentsCtrl');
	$scope.path = "#/payments/";
	/*var path = $location.path();
	$scope.goPage = function(path){
		$location.path(path);
	}*/
	$scope.url = "http://test.popscoot.com/popscoot/service/payments"
	$scope.payments;

	httpService.httpGet($scope.url, 'GET_PAYMENTS');

	$scope.$on("GET_PAYMENTS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.payments = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});
})
.controller('NewPaymentCtrl', function(){
	console.log("this is NewPaymentCtrl");
})

