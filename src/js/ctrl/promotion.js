angular.module('app.promotion.ctrl', [])

.controller('PromotionCtrl', function($scope, $routeParams, httpService, $mdDialog, $location, configuration) {
	console.log('this is PromotionCtrl')
	$scope.$emit('BC', {
		name: "Promotion",
		url: "promotions"+$routeParams.id
	})
	$scope.accounts;
	$scope.promotion;
	$scope.url = {
		promotion: configuration.domain()+"/service/promotions/"+$routeParams.id,
		accounts: configuration.domain()+"/service/promotions/"+$routeParams.id+"/accounts"
	}

	//console.log($scope.url);
	function getPromotion (){		
		httpService.httpGet($scope.url.promotion, 'GET_promotion');
	}
	
	$scope.$on("GET_promotion", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.promotion = data.data.data.data;
			$scope.$emit("GETFINISHED");
		} else {
			console.log(data.data.data.message);
			$scope.$emit("GETFINISHED");
		}
	});
	function getAccounts (){		
		httpService.httpGet($scope.url.accounts, 'GET_ACCOUNTS');
	}
	
	$scope.$on("GET_ACCOUNTS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.accounts = data.data.data.data;
			$scope.$emit("GETFINISHED");
		} else {
			console.log(data.data.data.message);
			$scope.$emit("GETFINISHED");
		}
	});
	getPromotion();
	getAccounts();


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
				httpService.httpPost((configuration.domain()+"/file/upload/"), uploadForm, 'UPLOAD_IMAGE');
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



	$scope.updatePromotion = function(){
		var updateForm = $scope.promotion;
		updateForm.mediaId = mediaId;
		console.log(updateForm);
		httpService.httpPut($scope.url.promotion, updateForm, 'UPDAT_PROMOTION');
	}
	$scope.$on('UPDAT_PROMOTION', function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.promotion = data.data.data.data;
			$scope.uploadImage = false;
			$scope.preview = false;
		} else {
			console.log(data.data.data.message);
		}
	})

	var deletePromotion = function(){
		httpService.httpDelete($scope.url.promotion, 'DELETE_PROMOTION');
	}

	$scope.$on("DELETE_PROMOTION", function(event, data){
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
    .textContent('Please key in the ID of the promotion to delete')
    .placeholder('Promotion ID')
    .ariaLabel('integrate_id')
    .targetEvent(ev)
    .ok('Confirm')
    .cancel('Cancel');

    $scope.path = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/app/";
    $mdDialog.show(confirm).then(function(result) {
    	if (result == $scope.promotion.promotionId) {
    		deletePromotion();    		
    		$location.path('/promotions');
    		/*window.location.href = $scope.path + "index.html#/promotions";*/
    	} else {

    		$scope.status = 'Username Mismatch';
    	}
    	
    }, function() {
    	$scope.status = 'Action canceled';
    });
};

$scope.currentPageNumber = 1;
$scope.row = 4;
$scope.itemsPerPage = 10;

$scope.getNumberOfPages = function() {
	var count = $scope.promotions.length / $scope.itemsPerPage;
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
})

.controller('PromotionsCtrl', function($scope, $location, httpService, configuration) {
	console.log('this is PromotionsCtrl');
	$scope.$emit('BC', {
		name: "Promotions",
		url: "promotions"
	})

	$scope.path = "#/promotions/";
	/*var path = $location.path();
	$scope.goPage = function(path){
		$location.path(path);
	}*/
	$scope.url = configuration.domain()+"/service/promotions";

	httpService.httpGet($scope.url, 'GET_PROMOTIONS');
	$scope.promotions = [];

	$scope.$on("GET_PROMOTIONS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.promotions = data.data.data.data;
			$scope.$emit("GETFINISHED");
		} else {
			console.log(data.data.data.message);
			$scope.$emit("GETFINISHED");
		}
	});
	//orderBy start
    $scope.itemsOrder = "date";
    $scope.reverse = true;
    $scope.order = function(){
    	$scope.reverse = !$scope.reverse;
    }

     //pagination start
     $scope.currentPageNumber = 1;
     $scope.itemsPerPage = 10;

     $scope.getNumberOfPages = function() {
     	var count = $scope.promotions.length / $scope.itemsPerPage;
     	if(($scope.promotions.length % $scope.itemsPerPage) > 0) count++;
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

.controller("NewPromotionCtrl", function($scope, httpService, configuration, $location){
	console.log("this is NewPromotionCtrl");
	$scope.$emit('BC', {
		name: "Promotions",
		url: "new/promotion"
	})
	$scope.promotion;
	$scope.createPromotion = function(){
		var createForm = $scope.promotion;
		console.log(createForm);
		httpService.httpPost(configuration.domain()+"/service/promotions", createForm, 'CREATE_PROMOTION');
	}
	$scope.$on("CREATE_PROMOTION", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.promotion = data.data.data.data;		
			$location.path('/promotions/'+$scope.promotion.promotionId);
			/*window.location.href = "#promotions/" + $scope.promotion.promotionId;*/
		} else {
			console.log(data.data.data.message);
		}
	})
})