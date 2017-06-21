angular.module('app.booking.ctrl', [])

.controller('BookingCtrl', function($scope, $routeParams, httpService, configuration) {
	console.log('this is BookingCtrl')
	$scope.booking = {};
	$scope.url = {
		booking: configuration.domain()+"/service/bookings/"+$routeParams.id
	}
	//console.log($scope.url);
	function getBooking (){
		httpService.httpGet($scope.url.booking, 'GET_BOOKING');
	}


	$scope.$on("GET_BOOKING", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.booking = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});
	getBooking();

})

.controller('BookingsCtrl', function($scope, $location, httpService) {
	console.log('this is BookingsCtrl');
	$scope.path = "#/bookings/";
	// var path = $location.path();
	// $scope.goPage = function(path){
	// 	$location.path(path);
	// }
	$scope.url = "http://test.popscoot.com/popscoot/service"+$location.path();
	console.log($scope.url);
	$scope.bookings=[];
	/*if ($location.path().split("/")[1] == "accounts") {
		$scope.bookings = data.bookings;
	} else {

	}*/
	


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

.controller("NewBookingCtrl", function(){
	console.log("this is NewBookingCtrl");
})

