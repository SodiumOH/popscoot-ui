angular.module('app.scooter.ctrl', [])

.controller('ScooterCtrl', function($mdDialog,$location, $scope, $routeParams, httpService, configuration) {
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
				httpService.httpPost("http://test.popscoot.com/popscoot/service/file/upload/", uploadForm, 'UPLOAD_IMAGE');
				$scope.uploadStatus = "Uploading...";
				$scope.$on("UPLOAD_IMAGE", function(event, data){
					if(data.data.data.status == 1) {
						console.log(data.data.data.data);
						$scope.media = data.data.data.data[0].data;
						$scope.uploadStatus = "Success";
						mediaId = $scope.media.mediaId;
					} else {
						console.log(data.data.data.message);
						$scope.uploadStatus = "Failed..."+data.data.data.message;

					}
				});
			};
			
			
		}
	};

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
		} else {
			console.log(data.data.data.message);
		}
	})

	deletescooter = function(){
		httpService.httpDelete($scope.url.scooter, 'DELETE_scooter');
	}

	$scope.$on("DELETE_scooter", function(event, data){
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
    .textContent('Please key in the IID of the scooter to delete')
    .placeholder('integrateId')
    .ariaLabel('integrate_id')
    .targetEvent(ev)
    .ok('Confirm')
    .cancel('Cancel');

    $scope.path = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/app/";
    $mdDialog.show(confirm).then(function(result) {
    	if (result == $scope.scooter.integrateId) {
    		deletescooter();    		
    		window.location.href = $scope.path + "index.html#/scooters";
    	} else {

    		$scope.status = 'Username Mismatch';
    	}
    	
    }, function() {
    	$scope.status = 'Action canceled';
    });
};

getScooter();
getBookings();
})


.controller('ScootersCtrl', function($mdMedia, $scope, $location, httpService) {
	console.log('this is ScootersCtrl');

	$scope.$emit('BC', {
		name: "Scooters",
		url: "scooters"
	});

	$scope.scooters = [];

	$scope.url = "http://test.popscoot.com/popscoot/service/scooters"
	/*var path = $location.path();
	$scope.goPage = function(path){
		$location.path(path);
	}*/
	
	$scope.itemsOrder = "active";
	$scope.reverse = true;
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
		}
	});
	    //pagination start
	    $scope.itemsPerRow;
	    if ($mdMedia('gt-md')) {
	    	$scope.itemsPerRow = 3;
	    } else if ($mdMedia('gt-xs')) {
	    	$scope.itemsPerRow = 2;
	    } else {
	    	$scope.itemsPerRow = 1;
	    }
	    $scope.currentPageNumber = 1;
	    $scope.row = 4;
	    $scope.itemsPerPage = 10;

	    $scope.getNumberOfPages = function() {
	    	var count = $scope.scooters.length / $scope.itemsPerPage;
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
    //pagination end
})
.controller('NewScooterCtrl', function($scope, configuration, httpService){
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
		console.log(createForm);
		httpService.httpPost($scope.url.scooter, createForm, 'CREATE_Scooter');
	}
	$scope.$on("CREATE_Scooter", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.scooter = data.data.data.data;		
			window.location.href = "#scooters/" + $scope.scooter.scooterId
		} else {
			console.log(data.data.data.message);
		}
	})
})
.filter('paginate', function(){
	return function(array, pageNumber, itemsPerPage){
		var begin = ((pageNumber - 1) * itemsPerPage);
		var end = begin + itemsPerPage;
		return array.slice(begin, end);
	};
})




