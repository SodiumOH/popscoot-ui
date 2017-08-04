angular.module('app.enquiry.ctrl', [])

.controller('EnquiryCtrl', function($location, $mdDialog, $scope, $routeParams, httpService) {
	console.log('this is EnquiryCtrl');
	$scope.$emit('BC', {
		name: "Enquiry",
		url: "enquiries/"+$routeParams.id
	})
	$scope.enquiry;
	$scope.url = {
		enquiry: "http://test.popscoot.com/popscoot/service/enquiries/"+$routeParams.id
	}
	//console.log($scope.url);
	function getEnquiry(){
		httpService.httpGet($scope.url.enquiry, 'GET_ENQUIRY');		
	};
	$scope.$on("GET_ENQUIRY", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.enquiry = data.data.data.data;
			$scope.$emit("GETFINISHED");
		} else {
			console.log(data.data.data.message);
			$scope.$emit("GETFINISHED");
		}
	});
	$scope.updateEnquiry = function(){
		var updateForm = $scope.enquiry;
		httpService.httpPut($scope.url.enquiry, updateForm, 'UPDATE_Enquiry');
	}
	$scope.$on('UPDATE_Enquiry', function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.enquiry = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	})

	deleteEnquiry = function(){
		httpService.httpDelete($scope.url.enquiry, 'DELETE_Enquiry');
	}

	$scope.$on("DELETE_Enquiry", function(event, data){
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
    .textContent('Please key in the EnquiryID of the enquiry to delete')
    .placeholder('EnquiryID')
    .ariaLabel('integrate_id')
    .targetEvent(ev)
    .ok('Confirm')
    .cancel('Cancel');

    $scope.path = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/app/";
    $mdDialog.show(confirm).then(function(result) {
    	if (result == $scope.enquiry.enquiryId) {
    		deleteEnquiry();    		
    		window.location.href = $scope.path + "index.html#/enquiries";
    	} else {

    		$scope.status = 'Username Mismatch';
    	}
    	
    }, function() {
    	$scope.status = 'Action canceled';
    });
};
	getEnquiry();
})

.controller('EnquiriesCtrl', function($scope, $location, httpService) {
	console.log('this is EnquiriesCtrl')
	$scope.$emit('BC', {
		name: "Enquiries",
		url: "enquiries"
	})
	$scope.path = "#/enquiries/";
	/*var path = $location.path();
	$scope.goPage = function(path){
		$location.path(path);
	}*/
	$scope.itemsOrder = "date";
	$scope.reverse = true;

	$scope.order = function(){
		$scope.reverse = !$scope.reverse;
	}

	//pagination start
	
	$scope.currentPageNumber = 1;
	$scope.row = 4;
	$scope.itemsPerPage = 10;

	$scope.getNumberOfPages = function() {
		var count = $scope.enquiries.length / $scope.itemsPerPage;
		if(($scope.enquiries.length % $scope.itemsPerPage) > 0) count++;
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

    $scope.enquiries = [];
    $scope.url = "http://test.popscoot.com/popscoot/service/enquiries"

    httpService.httpGet($scope.url, 'GET_ENQUIRIES');

    $scope.$on("GET_ENQUIRIES", function(event, data){
    	if(data.data.data.status == 1) {
    		console.log(data.data.data.data);
    		$scope.enquiries = data.data.data.data;
    		$scope.$emit("GETFINISHED");
    	} else {
    		console.log(data.data.data.message);
    		$scope.$emit("GETFINISHED");
    	}
    });
})