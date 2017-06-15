angular.module('app.promotion.ctrl', ['app.service'])

.controller('PromotionCtrl', function($scope, $routeParams, httpService) {
	console.log('this is PromotionCtrl')
	$scope.promotion;
	$scope.url = "http://test.popscoot.com/popscoot/service/promotions/"+$routeParams.id;
	//console.log($scope.url);
	httpService.httpGet($scope.url, 'GET_promotion');
	

	$scope.$on("GET_promotion", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.promotion = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});
})

.controller('PromotionsCtrl', function($scope, $location, httpService) {
	console.log('this is PromotionsCtrl');
	$scope.path = "#/promotions/";
	/*var path = $location.path();
	$scope.goPage = function(path){
		$location.path(path);
	}*/
	$scope.url = "http://test.popscoot.com/popscoot/service/promotions"

	httpService.httpGet($scope.url, 'GET_PROMOTIONS');
	$scope.promotions;

	$scope.$on("GET_PROMOTIONS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.promotions = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});
})

