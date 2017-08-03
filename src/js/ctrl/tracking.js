angular.module('app.tracking.ctrl', [])
.controller('TrackingCtrl', function($scope, $sce, $routeParams, $sce){
	console.log("this is traking control");
	$scope.$emit("BC", {
		name: "Tracking",
		url: "tracking/"
	})
	
	console.log($scope.trackingId);
	$scope.param = {
		trackingSource: $sce.trustAsResourceUrl("http://test.popscoot.com/gps/pmds/" + $routeParams.id)
	}
	console.log($scope.trackingId);
})
	