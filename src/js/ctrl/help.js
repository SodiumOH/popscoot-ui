angular.module('app.help.ctrl', [])

.controller('HelpCtrl', function($scope,$mdDialog, $location, $routeParams, httpService, configuration) {
	console.log('this is HelpCtrl');
	$scope.$emit('BC', {
		name: "Help",
		url: "helps/"+$routeParams.id
	})
	$scope.url = {
		help: configuration.domain() + "/service/helps/"+ $routeParams.id,
		upload: configuration.domain() + "service/file/upload/"
	};
	$scope.help;
	function getHelp(){
		httpService.httpGet($scope.url.help, 'GET_HELP');
	}

	$scope.$on("GET_HELP", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.help = data.data.data.data;
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
				httpService.httpPost($scope.url.upload, uploadForm, 'UPLOAD_IMAGE');
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



	$scope.updateHelp = function(){
		var updateForm = $scope.help;
		updateForm.mediaId = mediaId;
		httpService.httpPut($scope.url.help, updateForm, 'UPDATE_Help');
	}
	$scope.$on('UPDATE_Help', function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.help = data.data.data.data;
			$scope.uploadImage = false;
		} else {
			console.log(data.data.data.message);
		}
	})

	deleteHelp = function(){
		httpService.httpDelete($scope.url.help, 'DELETE_Help');
	}

	$scope.$on("DELETE_Help", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			console.log("uhmmmmm");
		} else {
			console.log(data.data.data.message);
		}
	});

	$scope.showPrompt = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.prompt()
    .title('Confirm Deletion')
    .textContent('Please key in the HelpID of the help to delete')
    .placeholder('HelpID')
    .ariaLabel('integrate_id')
    .targetEvent(ev)
    .ok('Confirm')
    .cancel('Cancel');

    $mdDialog.show(confirm).then(function(result) {
    	if (result == $scope.help.helpId) {
    		deleteHelp();    		
    		$location.path("/helps");
    		/*window.location.href = $scope.path + "index.html#/helps";*/
    	} else {

    		$scope.status = 'Username Mismatch';
    	}
    	
    }, function() {
    	$scope.status = 'Action canceled';
    });
};

getHelp();
})

.controller('HelpsCtrl', function($scope, $location, httpService, configuration) {
	console.log('this is HelpsCtrl')
	$scope.$emit('BC', {
		name: "Helps",
		url: "helps"
	});
	$scope.path = "#/helps/";
	/*var path = $location.path();
	$scope.goPage = function(path){
		$location.path(path);
	}*/

	$scope.url = configuration.domain() + "/service/helps";

	$scope.itemsOrder = "order";
	$scope.reverse = true;
	$scope.order = function(){
		$scope.reverse = !$scope.reverse;
	}	

	$scope.arrangeB = false;
	$scope.arrange = function(){
		$scope.arrangeB = !$scope.arrangeB;
	}

	$scope.helps = [];


	httpService.httpGet($scope.url, 'GET_HELPS');

	$scope.$on("GET_HELPS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.helps = data.data.data.data;
			$scope.$emit("GETFINISHED");
		} else {
			console.log(data.data.data.message);
			$scope.$emit("GETFINISHED");
		}
	});


	//drag and drop arrage
	$scope.dragoverCallback = function(index, external, type, callback) {
		$scope.logListEvent('dragged over', index, external, type);
        // Invoke callback to origin for container types.
        if (type == 'container' && !external) {
        	console.log('Container being dragged contains ' + callback() + ' items');
        }
        return index < 10; // Disallow dropping in the third row.
    };

    $scope.dropCallback = function(index, item, external, type) {
    	$scope.logListEvent('dropped at', index, external, type);

    	/*var tempIndex = 0
    	$scope.helps.forEach(function(help){
    		if(item.helpId === help.helpId){
    			$scope.toRemove = tempIndex;
    		}
    		tempIndex++;
    	})
    	$scope.helps.splice(tempIndex, 1);*/

    	$scope.helps.splice(index, 0, item);
        // Return false here to cancel drop. Return true if you insert the item yourself.
        $scope.helpOrders = [];
        $scope.helps.forEach(function(help){
        	$scope.helpOrders.push(help.helpId);
        })
        var orders = {
        	orders:  $scope.helpOrders
        }
        console.log("hihihihi");
        console.log(orders);
        httpService.httpPut($scope.url, orders, "UPDATE_ORDERS");
        $scope.$on("UPDATE_ORDERS", function(eve, data){
        	if(data.data.data.status == 1) {
        		console.log(data.data.data.data);
        		$scope.updatedHelps = data.data.data.data;
        	} else {
        		console.log(data.data.data.message);
        	}
        })


    };

    $scope.doneShifting = function(){
    	$scope.arrangeB = !$scope.arrangeB;
    	$scope.helps = $scope.updatedHelps;
    }

    $scope.logEvent = function(message) {
    	console.log(message);
    };

    $scope.logListEvent = function(action, index, external, type) {
    	var message = external ? 'External ' : '';
    	message += type + ' element was ' + action + ' position ' + index;
    	console.log(message);
    };

    // Initialize model
    $scope.model = [[], []];
    var id = 10;
    angular.forEach(['all', 'move', 'copy', 'link', 'copyLink', 'copyMove'], function(effect, i) {
    	var container = {items: [], effectAllowed: effect};
    	for (var k = 0; k < 7; ++k) {
    		container.items.push({label: effect + ' ' + id++, effectAllowed: effect});
    	}
    	$scope.model[i % $scope.model.length].push(container);
    });

    $scope.$watch('model', function(model) {
    	$scope.modelAsJson = angular.toJson(model, true);
    }, true);

    //orderBy start
    $scope.itemsOrder = "order";
    $scope.reverse = true;
    $scope.order = function(){
    	$scope.reverse = !$scope.reverse;
    }

     //pagination start
     $scope.currentPageNumber = 1;
     $scope.itemsPerPage = 10;

     $scope.getNumberOfPages = function() {
     	var count = $scope.helps.length / $scope.itemsPerPage;
     	if(($scope.helps.length % $scope.itemsPerPage) > 0) count++;
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
.controller("NewHelpCtrl", function($scope, httpService, configuration, $location){
	console.log("this is NewHelpCtrl");
	$scope.$emit('BC', {
		name: "Create Helps",
		url: "new/help"
	})
	$scope.help;
	$scope.createHelp = function(){
		var createForm = $scope.help;
		console.log(createForm);
		httpService.httpPost((configuration.domain() + "/service/helps"), createForm, 'CREATE_HELP');
	}
	$scope.$on("CREATE_HELP", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.help = data.data.data.data;		
			$location.path("/helps/"+$scope.help.helpId);
			/*window.location.href = "#helps/" + $scope.help.helpId;*/
		} else {
			console.log(data.data.data.message);
		}
	})
})

