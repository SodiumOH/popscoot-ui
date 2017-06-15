angular.module('app.booking.ctrl', ['app.service'])

.controller('BookingCtrl', function($scope, $routeParams, httpService) {
	console.log('this is BookingCtrl')
	$scope.booking;
	$scope.url = "http://test.popscoot.com/popscoot/service/bookings/"+$routeParams.id;
	//console.log($scope.url);
	httpService.httpGet($scope.url, 'GET_BOOKING');
	

	$scope.$on("GET_BOOKING", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.booking = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});

})

.controller('BookingsCtrl', function($scope, $location, httpService) {
	console.log('this is BookingsCtrl');
	$scope.path = "#/bookings/0";
	// var path = $location.path();
	// $scope.goPage = function(path){
	// 	$location.path(path);
	// }
	$scope.url = "http://test.popscoot.com/popscoot/service/bookings"
	$scope.bookings = [];

	httpService.httpGet($scope.url, 'GET_BOOKINGS');

	$scope.$on("GET_BOOKINGS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.bookings = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});
})

