angular.module('app.bank.ctrl', [])

.controller('BankCtrl', function($scope,$mdDialog,$location, $routeParams, httpService) {
	console.log('this is BankCtrl')
	$scope.$emit('BC', [{
		name: "Banks",
		url: "#/banks"
	},
	{
		name: "Bank"
	}])
	$scope.bank;
	$scope.url = {
		bank: "http://test.popscoot.com/popscoot/service/banks/"+$routeParams.id
	}
	function getBank (){
		httpService.httpGet($scope.url.bank, "GET_BANK");		
	}
	$scope.$on("GET_BANK", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.bank = data.data.data.data;
			$scope.$emit("GETFINISHED");
		} else {
			console.log(data.data.data.message);
			$scope.$emit("GETFINISHED");
		}
	});
	getBank();
	$scope.updateBank = function(){
		var updateForm = $scope.bank;
		httpService.httpPut($scope.url.bank, updateForm, 'UPDATE_Bank');
	}
	$scope.$on('UPDATE_Bank', function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.bank = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	})

	deleteBank = function(){
		httpService.httpDelete($scope.url.bank, 'DELETE_Bank');
	}

	$scope.$on("DELETE_Bank", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
		} else {
			console.log(data.data.data.message);
		}
	});

	$scope.showPrompt = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.prompt()
    .title('Confirm Deletion')
    .textContent('Please key in the BankID of the bank to delete')
    .placeholder('BankID')
    .ariaLabel('integrate_id')
    .targetEvent(ev)
    .ok('Confirm')
    .cancel('Cancel');

    $scope.path = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/app/";
    $mdDialog.show(confirm).then(function(result) {
    	if (result == $scope.bank.bankId) {
    		deleteBank();    		
    		window.location.href = $scope.path + "index.html#/banks";
    	} else {

    		$scope.status = 'Username Mismatch';
    	}
    	
    }, function() {
    	$scope.status = 'Action canceled';
    });
   
};

})

.controller('BanksCtrl', function($scope, $location, httpService) {
	console.log('this is BanksCtrl');
	$scope.$emit('BC', [{
		name: "Banks",
		url: "#/banks"
	}])
	$scope.path = "#/banks/";
	// var path = $location.path();
	// $scope.goPage = function(path){
	// 	$location.path(path);
	// }
	$scope.url = "http://test.popscoot.com/popscoot/service/banks"
	$scope.banks;

	httpService.httpGet($scope.url, 'GET_BANKS');

	$scope.$on("GET_BANKS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.banks = data.data.data.data;
			$scope.$emit("GETFINISHED");
		} else {
			console.log(data.data.data.message);
			$scope.$emit("GETFINISHED");
		}
	});
})
.controller("NewBankCtrl", function($scope, $mdDialog, httpService){
	console.log("this is NewBankCtrl");
	$scope.$emit('BC', [{
		name: "Banks",
		url: "#/banks"
	},
	{
		name: "Create"
	}])
	function getAccounts() {
		httpService.httpGet("http://test.popscoot.com/popscoot/service/accounts", 'GET_BACCOUNTS');
	}

	$scope.$on("GET_BACCOUNTS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.accounts = data.data.data.data;
		} else {
			console.log(data.data.data.message);
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

	function DialogController($scope, $mdDialog, Upload, httpService, localAcc) {
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
	$scope.bank = {
		cash: 39.0,
		deposit: 39.0
	}
	$scope.createBank = function(){
		var createForm = $scope.bank;
		createForm.accountId = $scope.accountId;
		console.log(createForm);
		httpService.httpPost("http://test.popscoot.com/popscoot/service/banks", createForm, 'CREATE_BANK');
	}
	$scope.$on("CREATE_BANK", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.bank = data.data.data.data;		
			window.location.href = "#banks/" + $scope.bank.bankId;
		} else {
			console.log(data.data.data.message);
		}
	})
	
	
})
