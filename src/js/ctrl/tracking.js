angular.module('app.tracking.ctrl', [])
.controller('TrackingCtrl', function($scope, $sce){
	console.log("this is traking control");
	$scope.$emit("BC", {
		name: "Tracking",
		url: "tracking/"
	})
	
})