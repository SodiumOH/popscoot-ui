angular.module('app.scooter.ctrl', [])

.controller('ScooterCtrl', function($mdDialog,$location, $scope, $routeParams, httpService, configuration, $mdToast) {
	console.log('this is ScooterCtrl')
	$scope.$emit('BC', {
		name: "Scooter",
		url: "scooters/"+$routeParams.id
	});
	$scope.scooter = {};
	$scope.bookings = [];
	$scope.url = {
		scooter: configuration.domain()+"/service/scooters/"+$routeParams.id,
		bookings: configuration.domain()+"/service/scooters/"+$routeParams.id+"/bookings"
	}
	function getScooter (){
		httpService.httpGet($scope.url.scooter, 'GET_SCOOTER');		
	};
	$scope.$on("GET_SCOOTER", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.scooter = data.data.data.data;
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



	function getBookings (){
		httpService.httpGet($scope.url.bookings, 'GET_BOOKINGS');		
	}

	$scope.$on("GET_BOOKINGS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.bookings = data.data.data.data;
			$scope.$emit("GETFINISHED");
		} else {
			console.log(data.data.data.message);
			$scope.$emit("GETFINISHED");
			$mdToast.show(
				$mdToast.simple()
				.textContent(message)
				.hideDelay(3000)
				.position("top right")
				.theme('error-toast')
				);
		}
	});

	

	$scope.$watch('files', function () {
		$scope.upload($scope.files);
	});
	$scope.$watch('file', function () {
		if ($scope.file != null) {
			$scope.files = [$scope.file]; 
		}
	});
	var mediaId;
	$scope.uploadImage = false;
	$scope.preview = false;
	$scope.uploadPrompt = function(){
		$scope.uploadImage = !$scope.uploadImage;
	}
	$scope.upload = function (files) {
		console.log(files);
		if (files && files.length) {
			var fileReader = new FileReader();
			fileReader.readAsDataURL(files[0]);
			fileReader.onload = function (e) {
				$scope.dataUrl = e.target.result;
				var uploadForm = {
					"files": [{
						name: name,
						type: "image/*",
						size: files[0].size,
						data: $scope.dataUrl
					}],
					"folder": "/popscoot"
				}
				console.log(uploadForm);
				httpService.httpPost(configuration.domain()+"/service/file/upload/", uploadForm, 'UPLOAD_IMAGE');
				$scope.uploadStatus = "Uploading...";
				$scope.$on("UPLOAD_IMAGE", function(event, data){
					if(data.data.data.status == 1) {
						console.log(data.data.data.data);
						$scope.media = data.data.data.data[0].data;
						$scope.uploadStatus = "Success";
						mediaId = $scope.media.mediaId;
						$scope.preview = true;
					} else {
						console.log(data.data.data.message);
						$scope.uploadStatus = "Failed..."+data.data.data.message;

					}
				});
			};
			
			
		}
	};


	$scope.deactivateScooter =function(){
		$scope.updateForm = {
			active : $scope.scooter.active == false
		}
		httpService.httpPut($scope.url.scooter, $scope.updateForm, "DEACTIVATE_SCOOTER");
	}
	$scope.$on("DEACTIVATE_SCOOTER", function(event, data){
		if (data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.scooter = data.data.data.data;
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

	var switchURL = configuration.domain()+"/api/pmds/rest";
	$scope.scooterOn = function(){
		httpService.httpGet(switchURL+"/immobilizer_off/"+$scope.scooter.gpsId, "SCOOTERON");
		$scope.$on("SCOOTERON", function(event,data){
			if (data.status == 1) {
				console.log(data);
				$scope.$emit("GETFINISHED");
				$mdToast.show(
					$mdToast.simple()
					.textContent(data.data.data.Result)
					.hideDelay(3000)
					.position("top right")
					);
			} else {
				$scope.$emit("GETFINISHED");
				$mdToast.show(
					$mdToast.simple()
					.textContent("Error")
					.hideDelay(3000)
					.position("top right")
					.theme('error-toast')
					);
			}
			
		})
	}
	$scope.scooterOff = function(){
		httpService.httpGet(switchURL+"/immobilizer_on/"+$scope.scooter.gpsId, "SCOOTEROFF");
		$scope.$on("SCOOTEROFF", function(event,data){
			if (data.status == 1) {
				console.log(data);
				$scope.$emit("GETFINISHED");
				$mdToast.show(
					$mdToast.simple()
					.textContent(data.data.data.Result)
					.hideDelay(3000)
					.position("top right")
					);
			} else {
				$scope.$emit("GETFINISHED");
				$mdToast.show(
					$mdToast.simple()
					.textContent("Error")
					.hideDelay(3000)
					.position("top right")
					.theme('error-toast')
					);
			}
		})
	}

	$scope.updateScooter = function(){
		var updateForm = $scope.scooter;
		updateForm.mediaId = mediaId;
		console.log(updateForm);
		httpService.httpPut($scope.url.scooter, updateForm, 'UPDATE_Scooter');
	}
	$scope.$on('UPDATE_Scooter', function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.scooter = data.data.data.data;
			$scope.uploadImage = false;
			$scope.preview = false;
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
				.textContent(message)
				.hideDelay(3000)
				.position("top right")
				.theme('error-toast')
				);
		}
	})

	deletescooter = function(){
		httpService.httpDelete($scope.url.scooter, 'DELETE_scooter');
	}

	$scope.$on("DELETE_scooter", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$location.path("/scooters/");
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
    .textContent('Please key in the IID of the scooter to delete')
    .placeholder('integrateId')
    .ariaLabel('integrate_id')
    .targetEvent(ev)
    .ok('Confirm')
    .cancel('Cancel');
    $mdDialog.show(confirm).then(function(result) {
    	if (result == $scope.scooter.integrateId) {
    		deletescooter();   
    		$location.path('/scooters')
    	} else {

    		$scope.status = 'Username Mismatch';
    	}
    	
    }, function() {
    	$scope.status = 'Action canceled';
    });
};

getScooter();
getBookings();

$scope.selectList = [{
	name: 'booked',
	value: 1
},{
	name: 'traveling',
	value: 2
},{
	name: 'completed',
	value: 3
},{
	name: 'canceled',
	value: 4
}]

$scope.status = [3];

//orderBy start
$scope.itemsOrder = "bookingId";
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


.controller('ScootersCtrl', function($mdMedia, $scope, $location, httpService, $mdToast, configuration) {
	console.log('this is ScootersCtrl');

	$scope.$emit('BC', {
		name: "Scooters",
		url: "scooters"
	});

	$scope.scooters = [];

	$scope.url = configuration.domain()+"/service/scooters"
	/*var path = $location.path();
	$scope.goPage = function(path){
		$location.path(path);
	}*/
	
	$scope.itemsOrder = "name";
	$scope.reverse = false;
	$scope.order = function(){
		$scope.reverse = !$scope.reverse;
	}


	httpService.httpGet($scope.url, 'GET_SCOOTERS');

	$scope.$on("GET_SCOOTERS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.scooters = data.data.data.data;
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


	$scope.deactivateScooters =function(scooter){
		$scope.updateForm = {
			active : scooter.active == false
		}
		httpService.httpPut($scope.url+"/"+scooter.scooterId, $scope.updateForm,"DEACTIVATE_SCOOTERS");
	}
	$scope.$on("DEACTIVATE_SCOOTERS", function(event, data){
		if (data.data.data.status == 1) {
			console.log(data.data.data.data);
			httpService.httpGet($scope.url, 'GET_SCOOTERS');
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

     //pagination start
     $scope.currentPageNumber = 1;
     $scope.itemsPerPage = 10;

     $scope.getNumberOfPages = function() {
     	var count = $scope.scooters.length / $scope.itemsPerPage;
     	if(($scope.scooters.length % $scope.itemsPerPage) > 0) count++;
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
.controller('NewScooterCtrl', function($scope, configuration, httpService, $location, $mdToast){
	console.log("this is NewScooterCtrl");
	$scope.$emit('BC', {
		name: "Create Scooters",
		url: "new/scooter"
	});
	var domain = configuration.domain();
	$scope.url = {
		scooter: domain + "/service/scooters/"
	};
	console.log("this is NewscooterCtrl");
	$scope.scooter;
	$scope.createScooter = function(){
		var createForm = $scope.scooter;
		createForm.mediaId = 0;
		createForm.battery = 1;
		console.log(createForm);
		httpService.httpPost($scope.url.scooter, createForm, 'CREATE_Scooter');
	}
	$scope.$on("CREATE_Scooter", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.scooter = data.data.data.data;	
			$location.path("/scooters/" + $scope.scooter.scooterId);
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
})



