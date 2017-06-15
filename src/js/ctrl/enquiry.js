angular.module('app.enquiry.ctrl', ['app.service'])

.controller('EnquiryCtrl', function($scope, $routeParams, httpService) {
	console.log('this is EnquiryCtrl');
	$scope.enquiry;
	$scope.url = "http://test.popscoot.com/popscoot/service/enquiries/"+$routeParams.id;
	//console.log($scope.url);
	httpService.httpGet($scope.url, 'GET_ENQUIRY');
	

	$scope.$on("GET_ENQUIRY", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.enquiry = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});
})

.controller('EnquiriesCtrl', function($scope, $location, httpService) {
	console.log('this is EnquiriesCtrl')
	$scope.path = "#/enquiries/0";
	/*var path = $location.path();
	$scope.goPage = function(path){
		$location.path(path);
	}*/
	$scope.enquiries = [];
	$scope.url = "http://test.popscoot.com/popscoot/service/enquiries"

	httpService.httpGet($scope.url, 'GET_ENQUIRIES');

	$scope.$on("GET_ENQUIRIES", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.enquiries = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});
})

