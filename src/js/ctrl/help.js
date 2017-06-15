angular.module('app.help.ctrl', ['app.service'])

.controller('HelpCtrl', function($scope, $routeParams, httpService) {
	console.log('this is HelpCtrl');
	$scope.url = "http://test.popscoot.com/popscoot/service/"+ $routeParams.id;
	$scope.help;

	httpService.httpGet($scope.url, 'GET_HELPS');

	$scope.$on("GET_HELPS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.help = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});
})

.controller('HelpsCtrl', function($scope, $location, httpService) {
	console.log('this is HelpsCtrl')
	$scope.path = "#/helps/";
	/*var path = $location.path();
	$scope.goPage = function(path){
		$location.path(path);
	}*/
	$scope.url = "http://test.popscoot.com/popscoot/service/helps"
	$scope.helps;

	httpService.httpGet($scope.url, 'GET_HELPS');

	$scope.$on("GET_HELPS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.helps = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});
})

