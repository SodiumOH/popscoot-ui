angular.module('app.bank.ctrl', [])

.controller('BankCtrl', function($scope,$mdDialog, $location, $routeParams, httpService, configuration, $mdToast) {
	console.log('this is BankCtrl')
	var domain = configuration.domain();
	$scope.$emit('BC', {
		name: "Bank",
		url: "banks/"+$routeParams.id
	})
	$scope.bank;
	$scope.url = {
		bank: domain+"/service/banks/"+$routeParams.id
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
			$mdToast.show(
						$mdToast.simple()
						.textContent(data.data.data.message)
						.hideDelay(3000)
						.position("top right")
						.theme('error-toast')
						);
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

	deleteBank = function(){
		httpService.httpDelete($scope.url.bank, 'DELETE_Bank');
	}

	$scope.$on("DELETE_Bank", function(event, data){
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
    .textContent('Please key in the BankID of the bank to delete')
    .placeholder('BankID')
    .ariaLabel('integrate_id')
    .targetEvent(ev)
    .ok('Confirm')
    .cancel('Cancel');

    $mdDialog.show(confirm).then(function(result) {
    	if (result == $scope.bank.bankId) {
    		deleteBank();    		
    		$location.path("/banks");
    		/*window.location.href = $scope.path + "index.html#/banks";*/
    	} else {

    		$scope.status = 'Username Mismatch';
    	}
    	
    }, function() {
    	$scope.status = 'Action canceled';
    });
    
};

})

.controller('BanksCtrl', function($scope, $location, httpService, configuration, $mdToast) {
	console.log('this is BanksCtrl');
	$scope.$emit('BC', {
		name: "Banks",
		url: "banks"
	})
	$scope.path = "#/banks/";
	// var path = $location.path();
	// $scope.goPage = function(path){
	// 	$location.path(path);
	// }
	var domain = configuration.domain();
	$scope.url = domain + "/service/banks";
	$scope.banks = [];

	httpService.httpGet($scope.url, 'GET_BANKS');

	$scope.$on("GET_BANKS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.banks = data.data.data.data;
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
     	var count = $scope.banks.length / $scope.itemsPerPage;
     	if(($scope.banks.length % $scope.itemsPerPage) > 0) count++;
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
.controller("NewBankCtrl", function($scope, $routeParams, $mdDialog, httpService, configuration, $location, $mdToast){
	console.log("this is NewBankCtrl");
	$scope.$emit('BC', {
		name: "Create Banks",
		url: "new/bank"
	})
	var domain = configuration.domain();
	$scope.url = {
		get: domain + "/service/accounts/",
		create: domain + "/service/banks"
	};
	function getAccounts() {
		httpService.httpGet($scope.url.get, 'GET_BACCOUNTS');
	}

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
			var count = $scope.banks.length / $scope.itemsPerPage;
			if(($scope.banks.length % $scope.itemsPerPage) > 0) count++;
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
	$scope.accountId = $routeParams.id;
	$scope.createBank = function(){
		var createForm = $scope.bank;
		createForm.accountId = parseInt($scope.accountId);
		console.log(createForm);
		httpService.httpPost($scope.url.create, createForm, 'CREATE_BANK');
	}
	$scope.$on("CREATE_BANK", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.bank = data.data.data.data;		
			$location.path("/banks/"+$scope.bank.bankId);
			$mdToast.show(
						$mdToast.simple()
						.textContent("Success")
						.hideDelay(3000)
						.position("top right")
						);
			/*window.location.href = "#banks/" + $scope.bank.bankId;*/
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
