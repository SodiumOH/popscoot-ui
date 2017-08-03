angular.module('app.dashboard.ctrl', [])

.controller('DashboardCtrl', function($scope, $sce) {
	console.log('this is DashboardCtrl');
	$scope.loadingIframe = true;
	$scope.mapSource = $sce.trustAsResourceUrl("http://test.popscoot.com/gps/map");
	window.uploadDone = function(){
		console.log(666);
		$scope.loadingIframe = false;
	}
})

