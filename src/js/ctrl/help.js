angular.module('app.help.ctrl', [])

.controller('HelpCtrl', function($scope,$mdDialog, $location, $routeParams, httpService) {
	console.log('this is HelpCtrl');
	$scope.$emit('BC', [{
		name: "Helps",
		url: "#/helps"
	},
	{
		name: "Help"
	}])
	$scope.url = {
		help: "http://test.popscoot.com/popscoot/service/helps/"+ $routeParams.id
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

	$scope.updateHelp = function(){
		var updateForm = $scope.help;
		httpService.httpPut($scope.url.help, updateForm, 'UPDATE_Help');
	}
	$scope.$on('UPDATE_Help', function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.help = data.data.data.data;
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

    $scope.path = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/app/";
    $mdDialog.show(confirm).then(function(result) {
    	if (result == $scope.help.helpId) {
    		deleteHelp();    		
    		window.location.href = $scope.path + "index.html#/helps";
    	} else {

    		$scope.status = 'Username Mismatch';
    	}
    	
    }, function() {
    	$scope.status = 'Action canceled';
    });
};

getHelp();
})

.controller('HelpsCtrl', function($scope, $location, httpService) {
	console.log('this is HelpsCtrl')
	$scope.$emit('BC', [{
		name: "Helps",
		url: "#/helps"
	}])
	$scope.path = "#/helps/";
	/*var path = $location.path();
	$scope.goPage = function(path){
		$location.path(path);
	}*/
	$scope.url = "http://test.popscoot.com/popscoot/service/helps"
	$scope.helps;

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
})
.controller("NewHelpCtrl", function($scope, httpService){
	console.log("this is NewHelpCtrl");
	$scope.$emit('BC', [{
		name: "Helps",
		url: "#/helps"
	},
	{
		name: "Create"
	}])
	$scope.help;
	$scope.createHelp = function(){
		var createForm = $scope.help;
		console.log(createForm);
		httpService.httpPost("http://test.popscoot.com/popscoot/service/helps", createForm, 'CREATE_HELP');
	}
	$scope.$on("CREATE_HELP", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.help = data.data.data.data;		
			window.location.href = "#helps/" + $scope.help.helpId;
		} else {
			console.log(data.data.data.message);
		}
	})
})

