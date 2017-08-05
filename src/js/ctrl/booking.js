angular.module('app.booking.ctrl', [])

.controller('BookingCtrl', function($scope,$location, $mdDialog, $routeParams, httpService, configuration, $mdToast) {
	console.log('this is BookingCtrl')
	$scope.$emit('BC', {
		name: "Booking",
		url: "bookings/"+$routeParams.id
	})
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
			$mdToast.show(
						$mdToast.simple()
						.textContent(data.data.data.message)
						.hideDelay(3000)
						.position("top right")
						.theme('error-toast')
						);
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
			$mdToast.show(
				$mdToast.simple()
				.textContent("Success")
				.hideDelay(3000)
				.position("top right")
				);
		} else {
			console.log(data.data.data.message);
			$mdToast.show(
						$mdToast.simple()
						.textContent(data.data.data.message)
						.hideDelay(3000)
						.position("top right")
						.theme('error-toast')
						);
		}
	})

	deleteBooking = function(){
		httpService.httpDelete($scope.url.booking, 'DELETE_Booking');
	}

	$scope.$on("DELETE_Booking", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$mdToast.show(
				$mdToast.simple()
				.textContent("Success")
				.hideDelay(3000)
				.position("top right")
				);
		} else {
			console.log(data.data.data.message);
			$mdToast.show(
						$mdToast.simple()
						.textContent(data.data.data.message)
						.hideDelay(3000)
						.position("top right")
						.theme('error-toast')
						);
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
    		$location.path('/bookings');
    		/*window.location.href = $scope.path + "index.html#/bookings";*/
    	} else {

    		$scope.status = 'Username Mismatch';
    	}
    	
    }, function() {
    	$scope.status = 'Action canceled';
    });
};
getBooking();

})

.controller('BookingsCtrl', function($scope, $location, httpService, configuration, $mdToast) {
	console.log('this is BookingsCtrl');
	$scope.$emit('BC', {
		name: "Bookings",
		url: "bookings"
	})
	$scope.path = "#/bookings/";

	// var path = $location.path();
	// $scope.goPage = function(path){
	// 	$location.path(path);

	// }
	$scope.url = {
		bookings: configuration.domain()+"/service/bookings/"
	}
	$scope.bookings=[];
	/*if ($location.path().split("/")[1] == "accounts") {
		$scope.bookings = data.bookings;
	} else {

	}*/
	


	httpService.httpGet($scope.url.bookings, 'GET_BOOKINGS');

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


	//orderBy start
	$scope.itemsOrder = "latest";
	$scope.reverse = false;
	$scope.order = function(){
		$scope.reverse = !$scope.reverse;
	}

     //pagination start
     $scope.currentPageNumber = 1;
     $scope.itemsPerPage = 10;

     $scope.getNumberOfPages = function() {
     	var count = $scope.bookings.length / $scope.itemsPerPage;
     	if(($scope.bookings.length % $scope.itemsPerPage) > 0) count++;
     	return Math.floor(count);
     }

     $scope.pageDown = function()
     {
     	if($scope.currentPageNumber > 1) $scope.currentPageNumber--;
     }

     $scope.pageUp = function()
     {
     	if($scope.currentPageNumber < $scope.getNumberOfPages()) $scope.currentPageNumber++;
     }
    //pagination end
})

.controller("NewBookingCtrl", function($scope, $routeParams, $mdDialog, httpService, configuration, $location, $mdToast){
	console.log("this is NewBookingCtrl");
	$scope.$emit('BC', {
		name: "Create Bookings",
		url: "new/booking"
	})
	$scope.booking = {
		startDate: moment().toDate(),
		endDate: moment().toDate()
	}

	$scope.url = {
		accounts: configuration.domain()+"/service/accounts/",
		scooters: configuration.domain()+"/service/scooters/",
		bookings: configuration.domain()+"/service/bookings/"
	}


	

	function getAccounts() {
		httpService.httpGet($scope.url.accounts, 'GET_TACCOUNTS');
	}

	$scope.$on("GET_TACCOUNTS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.accounts = data.data.data.data;
			$scope.$emit("GETFINISHED");
		} else {
			console.log(data.data.data.message);
			$scope.$emit("GETFINISHED");
		}
		
	});
	function getScooters() {
		httpService.httpGet($scope.url.scooters, 'GET_TSCOOTERS');
	}

	$scope.$on("GET_TSCOOTERS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.scooters = data.data.data.data;
		} else {
			console.log(data.data.data.message);

		}
		
	});

	getScooters();
	getAccounts();

	$scope.booking.accountId = $routeParams.aid;
	$scope.booking.scooterId = $routeParams.sid;

	$scope.accDialog = function(ev) {
		$mdDialog.show({
			locals: {localAcc: $scope.accounts},
			controller: DialogController,
			templateUrl: 'templates/accountPicker.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
  })
		.then(function(answer) {
			$scope.booking.accountId = answer.accountId;
		}, function() {
			$scope.status = 'You cancelled the dialog.';
		});
	};
	
	function DialogController($scope, $mdDialog, Upload, httpService, localAcc) {
		$scope.accounts = localAcc;

		$scope.itemsOrder = "active";
		$scope.reverse = true;
		$scope.order = function(){
			$scope.reverse = !$scope.reverse;
		}
		$scope.currentPageNumber = 1;
		$scope.itemsPerPage = 10;
		$scope.search;
		$scope.getNumberOfPages = function() {
			var count = $scope.accounts.length / $scope.itemsPerPage;
			if(($scope.people.length % $scope.itemsPerPage) > 0) count++;
			return count;
		}

		$scope.pageDown = function()
		{
			if($scope.currentPageNumber > 1) $scope.currentPageNumber--;
		}

		$scope.pageUp = function()
		{
			if($scope.currentPageNumber < $scope.getNumberOfPages()) $scope.currentPageNumber++;
		}
		
		//test end
		$scope.hide = function() {
			$mdDialog.hide();
		};

		$scope.cancel = function() {
			$mdDialog.cancel();
		};

		$scope.answer = function(answer) {
			$mdDialog.hide(answer);
		};
	}

	$scope.scoDialog = function(eve) {
		$mdDialog.show({
			locals: {localSco: $scope.scooters},
			controller: DialogController2,
			templateUrl: 'templates/scooterPicker.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: eve,
			clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
  })
		.then(function(answer) {
			$scope.booking.scooterId = answer.scooterId;
		}, function() {
			$scope.status = 'You cancelled the dialog.';
		});
	};
	
	function DialogController2($scope, $mdDialog, Upload, httpService, localSco, $location) {
		$scope.scooters = localSco;
		console.log($scope.scooters);

		$scope.itemsOrder = "active";
		$scope.reverse = true;
		$scope.order = function(){
			$scope.reverse = !$scope.reverse;
		}
		$scope.currentPageNumber = 1;
		$scope.itemsPerPage = 10;
		$scope.search;
		$scope.getNumberOfPages = function() {
			var count = $scope.accounts.length / $scope.itemsPerPage;
			if(($scope.people.length % $scope.itemsPerPage) > 0) count++;
			return count;
		}

		$scope.pageDown = function()
		{
			if($scope.currentPageNumber > 1) $scope.currentPageNumber--;
		}

		$scope.pageUp = function()
		{
			if($scope.currentPageNumber < $scope.getNumberOfPages()) $scope.currentPageNumber++;
		}

		
		
		//test end
		$scope.hide = function() {
			$mdDialog.hide();
		};

		$scope.cancel = function() {
			$mdDialog.cancel();
		};

		$scope.answer = function(answer) {
			$mdDialog.hide(answer);
		};
	}


	$scope.createBooking = function(){
		var create = $scope.booking;
		create.startDate = moment($scope.booking.startDate).format("YYYY-MM-DDTHH:MM:SSZ");
		create.endDate = moment($scope.booking.endDate).format("YYYY-MM-DDTHH:MM:SSZ");
		create.outsetLockId = parseInt($scope.booking.outsetLockId);
		create.destinationLockId = parseInt($scope.booking.destinationLockId);
		create.accountId = parseInt($scope.booking.accountId);
		create.scooterId = parseInt($scope.booking.scooterId);
		console.log(create);
		httpService.httpPost($scope.url.bookings, create, "CREATE_BOOKING");
	}
	$scope.$on("CREATE_BOOKING", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);	
			$location.path('/bookings/'+$scope.booking.bookingId);
			$mdToast.show(
				$mdToast.simple()
				.textContent("Success")
				.hideDelay(3000)
				.position("top right")
				);
			/*window.location.href = "#bookings/" + $scope.booking.bookingId*/
		} else {
			console.log(data.data.data.message);
			$mdToast.show(
						$mdToast.simple()
						.textContent(data.data.data.message)
						.hideDelay(3000)
						.position("top right")
						.theme('error-toast')
						);
		}
	})
})