angular.module('app.account.ctrl', [])

.controller('AccountCtrl', function($routeParams, $scope, httpService, configuration) {
	console.log('this is AccountCtrl');

	$scope.isEdit = false;
	var accountId = $routeParams.id;
	var domain = configuration.domain();
	$scope.url = {
		account: domain + "/service/accounts/" + accountId,
		bookings: domain + "/service/accounts/" + accountId + "/bookings",
		banks: domain + "/service/accounts/" + accountId + "/banks",
		enquiries: domain + "/service/accounts/" + accountId + "/enquiries",
		promotions: domain + "/service/accounts/" + accountId + "/promotions",
		shareLogs: domain + "/service/accounts/" + accountId + "/shareLogs",
		pushTokens: domain + "/service/accounts/" + accountId + "/pushTokens",
		transactions: domain + "/service/accounts/" + accountId + "/transactions",
		payments: domain + "/service/accounts/" + accountId + "/payments"
	};

	$scope.init_form = {};
	$scope.account = {};
	$scope.bookings = [];
	$scope.banks = [];
	$scope.transactions = [];
	$scope.promotions = [];
	$scope.shareLogs = [];
	$scope.payments = [];
	$scope.pushTokens = [];
	$scope.enquiries = [];

	function getAccount() {
		httpService.httpGet($scope.url.account, 'GET_ACCOUNT');
	}

	$scope.$on("GET_ACCOUNT", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.account = data.data.data.data;
			initForm();
		} else {
			console.log(data.data.data.message);
		}
		/*return new Promise(function(resolve, reject){
			if (typeof($scope.account) === "object") {
				resolve();
			} else {
				reject();
			}
		})*/
	});

	function getBookings() {
		httpService.httpGet($scope.url.bookings, 'GET_BOOKINGS');
	}

	$scope.$on("GET_BOOKINGS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.bookings = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});

	function getBanks() {
		httpService.httpGet($scope.url.banks, 'GET_BANKS');
	}

	$scope.$on("GET_BANKS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.banks = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});

	function getPromotions() {
		httpService.httpGet($scope.url.promotions, 'GET_PROMOTIONS');
	}

	$scope.$on("GET_PROMOTIONS", function(event, data){
		if(data.data.data.status == 1) {
			/*console.log("test", data);*/
			console.log(data.data.data.data.appliedPromotions);
			$scope.promotions = data.data.data.data.appliedPromotions;
		} else {
			console.log(data.data.data.message);
		}
	});

	function getShareLogs() {
		httpService.httpGet($scope.url.shareLogs, 'GET_SHARELOGS');
	}

	$scope.$on("GET_SHARELOGS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.shareLogs = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});

	function getTransactions() {
		httpService.httpGet($scope.url.transactions, 'GET_TRANSACTIONS');
	}

	$scope.$on("GET_TRANSACTIONS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.transactions = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});

	function getPushTokens() {
		httpService.httpGet($scope.url.pushTokens, 'GET_PUSHTOKENS');
	}

	$scope.$on("GET_PUSHTOKENS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.pushTokens = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});

	function getPayments() {
		httpService.httpGet($scope.url.payments, 'GET_PAYMENTS');
	}

	$scope.$on("GET_PAYMENTS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.payments = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});

	function getEnquiries() {
		httpService.httpGet($scope.url.enquiries, 'GET_ENQUIRIES');
	}

	$scope.$on("GET_ENQUIRIES", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.enquiries = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});

	$scope.updateAccount = function(){
		 var updateForm = {
			accountId: $scope.init_form.accountId,
			birthday: moment($scope.init_form.birthday).format("YYYY-MM-DDTHH:MM:SSZ")
		}
		console.log(updateForm);
		httpService.httpPut($scope.url.account, updateForm, 'UPDATE_ACCOUNT');
	}
	$scope.$on('UPDATE_ACCOUNT', function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.account = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	})

	$scope.createAccount = function(){
		var createForm = {
			username: $scope.init_form.username,
			email: $scope.init_form.email,
			password: $scope.init_form.password
		}
		console.log(createForm);
		httpService.httpPost($scope.url.account, createForm, 'CREATE_ACCOUNT');
	}
	$scope.$on("CREATE_ACCOUNT", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.account = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	})

	function initForm() {
		if (typeof($scope.account) === "object") {
			$scope.isEdit = true; 
		} 
		$scope.init_form= {
			accountId: $scope.isEdit ? $scope.account.accountId : "",
			username: $scope.isEdit ? $scope.account.username : "",
			birthday: $scope.isEdit ? $scope.account.birthday : "",
			type: $scope.isEdit ? $scope.account.type : "",
			socialMedia: $scope.isEdit ? $scope.account.socialMedia : "",
			email: $scope.isEdit ? $scope.account.email : "",
			active: $scope.isEdit ? $scope.account.active : "",
			password : ""
		}
	}

	// init

	getAccount();
	getBookings();
	getBanks();
	getEnquiries();
	getPayments();
	getPushTokens();
	getShareLogs();
	getTransactions();
	getPromotions();	
	
})

.controller('AccountsCtrl', function($scope, $location, httpService) {
	console.log('this is AccountsCtrl');
	$scope.path = "#/accounts/";
	// var path = $location.path();
	// $scope.goPage = function(path){
	// 	$location.path(path);
	// }
	

	$scope.accounts = [];

	$scope.url = "http://test.popscoot.com/popscoot/service/accounts"

	httpService.httpGet($scope.url, 'GET_ACCOUNTS');

	$scope.$on("GET_ACCOUNTS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.accounts = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});

	$scope.deleteAccount = function(id){
		httpService.httpDelete($scope.url+"/"+id, 'DELETE_ACCOUNT');
	}

	$scope.$on("DELETE_ACCOUNT", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			httpService.httpGet($scope.url, 'GET_ACCOUNTS');
		} else {
			console.log(data.data.data.message);
		}
	});
})

