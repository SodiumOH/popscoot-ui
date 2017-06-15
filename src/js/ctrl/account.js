angular.module('app.account.ctrl', ['app.service'])

.controller('AccountCtrl', function($routeParams, $scope, httpService) {
	console.log('this is AccountCtrl');
	$scope.paths = {
		booking: "#/bookings/0",
		promotion: "#/promotions/0",
		bank: "#/banks/0",
		enquiry: "#/enquiries/0"
	};
	$scope.account;
	$scope.url = "http://test.popscoot.com/popscoot/service/accounts/"+$routeParams.id;
	//console.log($scope.url);
	httpService.httpGet($scope.url, 'GET_ACCOUNT');
	

	$scope.$on("GET_ACCOUNT", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.account = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});
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
})

