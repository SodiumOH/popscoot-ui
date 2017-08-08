angular.module('app.root.ctrl', [])

.controller('RootCtrl', function(configuration, httpService, $rootScope, $scope, $location, $mdDialog, $route, $mdSidenav, $window, $translate) {
	$scope.icons = {
		profile: "fa-user",
		logout: "fa-sign-out"
	}
	$scope.breadcrumbs = [];
	$scope.$on('BC', function(evt, data){
		$scope.breadcrumbs.push(data);
		console.log($scope.breadcrumbs);
		$scope.BCLength = $scope.breadcrumbs.length-1;
	});

	$scope.popWebsite = function(){
		window.location.href="http://popscoot.com";
	}

	$scope.goHome = function(){
		window.location.href =  "index.html";
		$scope.breadcrumbs = [];
	}
	$scope.$on('GETLOADING', function(){
		$scope.getLoad = true;

	});
	$scope.$on('GETFINISHED', function(){
		$scope.getLoad = false;

	})
	$scope.path = "#/accounts/";
	function getLoginAccount(){
		var url = configuration.domain()+"/service/accounts/"+localStorage.getItem("LoginId");
		httpService.httpGet(url, 'GET_LACCOUNT');

		$scope.$on("GET_LACCOUNT", function(event, data){
			if(data.data.data.status == 1) {
				console.log(data.data.data.data);
				$scope.Laccount = data.data.data.data;
				$scope.$emit("GETFINISHED");
			} else {
				console.log(data.data.data.message);
				$scope.$emit("GETFINISHED");
			}
		});
	}
	$scope.languageDisplay = "EN";
	$scope.changeLanguage = function(key){
		$translate.use(key);
		if (key ==="en") {
			$scope.languageDisplay = "EN";
		} else {
			$scope.languageDisplay = "CH";
		}
	}



	$scope.browserHeight = $window.innerHeight;
	angular.element($window).on('resize', function () {
		$scope.browserHeight = $window.innerHeight;
	});
	
	
	var element = angular.element(document.querySelector('#id'));/*
	$scope.profileHeight = element("#profileInfo").offsetHeight;*/
	console.log($scope.profileHeight);
	/*$scope.setLanguage();*/
	$scope.menu ={
		main: [	
		{
			path: "dashboard",
			name: "dashboard",
			icon: "fa fa-tachometer"
		}, {
			path: "accounts",
			name: "accounts",
			icon: "fa fa-users"
		}, {
			path: "scooters",
			name: "scooters",
			icon: "fa fa-motorcycle"
		}, {
			path: "bookings",
			name: "bookings",
			icon: "fa fa-book"
		}, {
			path: "enquiries",
			name: "enquiries",
			icon: "fa fa-question-circle"
		}, {
			path: "finance",
			name: "finance",
			colapsed: false,
			icon: "fa fa-balance-scale",
			icon2: {
				colapsed: "fa fa-caret-up",
				folded: "fa fa-caret-down"
			}
		}, {
			path: "banks",
			name: "banks",
			icon: "fa fa-credit-card",
			hide: true,
			margin: {'margin-left':'25px'}
		},{
			path: "payments",
			name: "payments",
			icon: "fa fa-money",
			hide: true,
			margin: {'margin-left':'25px'}
		}/*,{
			path: "miscellaneous",
			name: "miscellaneous",
			colapsed: false,
			icon: "fa fa-ellipsis-h",
			icon2: {
				colapsed: "fa fa-caret-up",
				folded: "fa fa-caret-down"
			}
		},{
			path: "promotions",
			name: "promotions",
			icon: "fa fa-gift",
			hide: true,
			margin: {'margin-left':'25px'}
		},  {
			path: "helps",
			name: "helps",
			icon: "fa fa-info-circle",
			hide: true,
			margin: {'margin-left':'25px'}
		},{
			path: "analytics",
			name: "analytics",
			icon: "fa fa-line-chart"
		}*/],
		logout: {
			path: "logout",
			name: "Logout",
			icon: "fa fa-sign-out"
		}};

		var path = $location.path();
		$scope.currentNavItem = path.substring(1);
		$scope.openLeftMenu = function() {
			$mdSidenav('left').toggle();
		};

		$scope.closeNav = function(id){
			$mdSidenav(id).close();
		}

		$scope.selected = null;
		$scope.goPage = function(path, id) {
			$scope.selected = id;
			if (path == "logout") {
				window.location.href = "auth.html";
				localStorage.removeItem("UI_SECRET");
			} else if(path == "finance") {
				$scope.menu.main[5].colapsed = !$scope.menu.main[5].colapsed;
				$scope.menu.main[6].hide = !$scope.menu.main[6].hide;				
				$scope.menu.main[7].hide = !$scope.menu.main[7].hide;
			} else if(path == "miscellaneous") {
				$scope.menu.main[8].colapsed = !$scope.menu.main[8].colapsed;
				$scope.menu.main[9].hide = !$scope.menu.main[9].hide;			
				$scope.menu.main[10].hide = !$scope.menu.main[10].hide;
			} else {
				$location.path(path);
			}		
		};
		$scope.goBC = function(path, index){
			$location.path(path);
			$scope.breadcrumbs.splice(index);
			$scope.selected = null;
		}

		

		var originatorEv;

		$scope.openMenu = function($mdMenu, ev) {
			originatorEv = ev;
			$mdMenu.open(ev);
		};

		$scope.notificationsEnabled = true;
		$scope.toggleNotifications = function() {
			$scope.notificationsEnabled = !this.notificationsEnabled;
		};

		$scope.redial = function() {
			$mdDialog.show(
				$mdDialog.alert()
				.targetEvent(originatorEv)
				.clickOutsideToClose(true)
				.parent('body')
				.title('Suddenly, a redial')
				.textContent('You just called a friend; who told you the most amazing story. Have a cookie!')
				.ok('That was easy')
				);

			originatorEv = null;
		};


		$scope.checkVoicemail = function() {
      // This never happens.
  };

  
  getLoginAccount();

})

