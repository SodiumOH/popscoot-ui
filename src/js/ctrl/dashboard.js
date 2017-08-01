angular.module('app.dashboard.ctrl', [])

.controller('DashboardCtrl', function($scope, $sce) {
	console.log('this is DashboardCtrl');
	$scope.mapSource = $sce.trustAsResourceUrl("http://test.popscoot.com/popscoot/gps");
})

