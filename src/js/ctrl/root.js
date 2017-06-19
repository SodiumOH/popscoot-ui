angular.module('app.root.ctrl', [])

.controller('RootCtrl', function($rootScope, $scope, $location) {
	$rootScope.language = LANG_EN;
	$scope.menu = [{
		path: "dashboard",
		name: $rootScope.language.dashboard
	}, {
		path: "accounts",
		name: $rootScope.language.account
	}, {
		path: "scooters",
		name: $rootScope.language.scooter
	}, {
		path: "bookings",
		name: $rootScope.language.booking
	}, {
		path: "enquiries",
		name: $rootScope.language.enquiry
	}, {
		path: "banks",
		name: $rootScope.language.bank
	}, {
		path: "payments",
		name: $rootScope.language.payment
	}, {
		path: "promotions",
		name: $rootScope.language.promotion
	}, {
		path: "helps",
		name: $rootScope.language.help
	}, {
		path: "analytics",
		name: $rootScope.language.analytics
	}];

	var path = $location.path();
	$scope.currentNavItem = path.substring(1);
	$scope.goPage = function(path) {
		$location.path(path);
	};
})
