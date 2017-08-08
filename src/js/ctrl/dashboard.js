angular.module('app.dashboard.ctrl', [])

.controller('DashboardCtrl', function($scope, $sce, configuration, httpService, configuration) {
	console.log('this is DashboardCtrl');
	var dashboardUrl = configuration.domain()+"/service/dashboard";
	$scope.loadingIframe = true;
	$scope.mapSource = $sce.trustAsResourceUrl(configuration.iframe()+"map");
	window.uploadDone = function(){
		$scope.loadingIframe = false;
		console.log($scope.loadingIframe);
	}
	$scope.dashboard = [];
	var getDashboard = function(){
		httpService.httpGet(dashboardUrl, "GET_DASHBOARD");
	}
	$scope.chartOpt = {
		cutoutPercentage:80,
		tooltips:{
			enabled:false
		}
	}
	$scope.chartColors = ['#ff8000', '#7eaded', '#1A8A55', '#FF8FAF'];
	$scope.$on("GET_DASHBOARD", function(event,data){
		if (data.data.data.status === 1) {
			console.log(data.data.data.data);
			var results = data.data.data.data;
			$scope.dashboard = [
			{
				title: "Enquiries",
				labels: ["Open", "Closed"],
				data: [results.enquiryData.activeCount, results.enquiryData.notActiveCount],
				total: results.enquiryData.activeCount+results.enquiryData.notActiveCount,
				path: "#/enquiries",
				icons:["fa-spinner", "fa-bed"]
			},{
				title: "Accounts",
				labels: ["Active", "Inactive"],
				data: [results.accountData.activeCount, results.accountData.notActiveCount],
				total: results.accountData.activeCount+results.accountData.notActiveCount,
				path: "#/accounts",
				icons:["fa-user-o", "fa-user"]
			},{
				title: "Bookings",
				labels: ["Travelling", "Canceled", "Booked", "Completed"],
				data: [results.bookingData.travelling, results.bookingData.canceled, results.bookingData.booked, results.bookingData.completed],
				total: results.bookingData.travelling+results.bookingData.canceled+results.bookingData.booked+results.bookingData.completed,
				path: "#/bookings",
				icons: ["fa-plane", "fa-trash", "fa-book", "fa-ship"]
			},{
				title: "Finance",
				labels: ["Deposit", "Cash"],
				data: [results.bankData.deposit, results.bankData.cash],
				total: results.bankData.deposit+results.bankData.cash,
				icons: ["fa-usd", "fa-usd"],
				path: "#/banks"
			},{
				title: "Scooters",
				labels: ["Active", "Inactive"],
				data: [results.scooterData.activeCount, results.scooterData.notActiveCount],
				total: results.scooterData.activeCount+results.scooterData.notActiveCount,
				path: "#/scooters",
				icons: ["fa-motorcycle", "fa-ban"]
			}
			];
			$scope.mediaData = results.mediaData; 
			$scope.$emit("GETFINISHED");			
		} else {
			console.log(data.data.data.message);
		}
	})

	$scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
	$scope.data = [300, 500, 100];

	getDashboard();
})

