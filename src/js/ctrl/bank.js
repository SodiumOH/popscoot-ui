angular.module('app.bank.ctrl', ['app.service'])

.controller('BankCtrl', function($scope, $routeParams, httpService) {
	console.log('this is BankCtrl')
	$scope.bank;
	$scope.url = "http://test.popscoot.com/popscoot/service/banks/"+$routeParams.id;
	httpService.httpGet($scope.url, "GET_BANK");
	$scope.$on("GET_BANK", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.bank = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});

})

.controller('BanksCtrl', function($scope, $location, httpService) {
	console.log('this is BanksCtrl');
	$scope.path = "#/banks/0";
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
		} else {
			console.log(data.data.data.message);
		}
	});
})

