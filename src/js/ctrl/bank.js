angular.module('app.bank.ctrl', [])

.controller('BankCtrl', function($scope,$mdDialog,$location, $routeParams, httpService) {
	console.log('this is BankCtrl')
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


	getBank();

})

.controller('BanksCtrl', function($scope, $location, httpService) {
	console.log('this is BanksCtrl');
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
.controller("NewBankCtrl", function(){
	console.log("this is NewBankCtrl");
})
