angular.module('app.scooter.ctrl', ['app.service'])

.controller('ScooterCtrl', function($scope, $routeParams, httpService) {
	console.log('this is ScooterCtrl')
	$scope.scooter;
	$scope.url = "http://test.popscoot.com/popscoot/service/scooters/"+$routeParams.id;
	//console.log($scope.url);
	httpService.httpGet($scope.url, 'GET_SCOOTER');
	

	$scope.$on("GET_SCOOTER", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.scooter = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});
})


.controller('ScootersCtrl', function($scope, $location, httpService) {
	console.log('this is ScootersCtrl');
	$scope.path = "#/scooters/0";
	/*var path = $location.path();
	$scope.goPage = function(path){
		$location.path(path);
	}*/
	$scope.scooters = [];

	$scope.url = "http://test.popscoot.com/popscoot/service/scooters"

	httpService.httpGet($scope.url, 'GET_SCOOTERS');

	$scope.$on("GET_SCOOTERS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.scooters = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});
})

