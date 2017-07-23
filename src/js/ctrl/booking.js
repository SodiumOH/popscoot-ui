angular.module('app.booking.ctrl', [])

.controller('BookingCtrl', function($scope,$location, $mdDialog, $routeParams, httpService, configuration) {
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
			$scope.$emit("GETFINISHED");
		} else {
			console.log(data.data.data.message);
			$scope.$emit("GETFINISHED");
		}
	});

	$scope.updateBooking = function(){
		var updateForm = $scope.booking;
		updateForm.startDate = moment($scope.booking.startDate).format("YYYY-MM-DDTHH:MM:SSZ")
		updateForm.endDate = moment($scope.booking.endDate).format("YYYY-MM-DDTHH:MM:SSZ")
		httpService.httpPut($scope.url.booking, updateForm, 'UPDATE_Booking');
		console.log("reached here");
	}
	$scope.$on('UPDATE_booking', function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.booking = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	})

	deleteBooking = function(){
		httpService.httpDelete($scope.url.booking, 'DELETE_Booking');
	}

	$scope.$on("DELETE_Booking", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
		} else {
			console.log(data.data.data.message);
		}
	});

	$scope.showPrompt = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.prompt()
    .title('Confirm Deletion')
    .textContent('Please key in the IID of the booking to delete')
    .placeholder('bookingId')
    .ariaLabel('integrate_id')
    .targetEvent(ev)
    .ok('Confirm')
    .cancel('Cancel');

    $scope.path = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/app/";
    $mdDialog.show(confirm).then(function(result) {
    	if (result == $scope.booking.bookingId) {
    		deleteBooking();    		
    		window.location.href = $scope.path + "index.html#/bookings";
    	} else {

    		$scope.status = 'Username Mismatch';
    	}
    	
    }, function() {
    	$scope.status = 'Action canceled';
    });
};
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
			$scope.$emit("GETFINISHED");
		} else {
			console.log(data.data.data.message);
			$scope.$emit("GETFINISHED");
		}
	});
})

.controller("NewBookingCtrl", function(){
	console.log("this is NewBookingCtrl");
})

