angular.module('app.root.ctrl', [])

.controller('RootCtrl', function($rootScope, $scope, $location, $mdDialog, $route, $mdSidenav, $window) {
	$scope.$on('GETLOADING', function(){
		$scope.getLoad = true;
		console.log(1);
	});
	$scope.$on('GETFINISHED', function(){
		$scope.getLoad = false;
		console.log(2);
	})
	$scope.setLanguage = function(language){
		if (language) {
			$scope.language = language;
		} else {
			$scope.language = LANG_EN;
		}
	}
	angular.element($window).on('resize', function () {
		console.log($window.innerHeight);
		$scope.browserHeight = $window.innerHeight;
	});
	
	
	var element = angular.element(document.querySelector('#id'));/*
	$scope.profileHeight = element("#profileInfo").offsetHeight;*/
	console.log($scope.profileHeight);
	$scope.setLanguage();
	$scope.menu ={
		main: [	
		{
			path: "dashboard",
			name: $scope.language.dashboard,
			icon: "fa fa-tachometer"
		}, {
			path: "accounts",
			name: $scope.language.account,
			icon: "fa fa-users"
		}, {
			path: "scooters",
			name: $scope.language.scooter,
			icon: "fa fa-bicycle"
		}, {
			path: "bookings",
			name: $scope.language.booking,
			icon: "fa fa-book"
		}, {
			path: "enquiries",
			name: $scope.language.enquiry,
			icon: "fa fa-question-circle"
		}, {
			path: "finance",
			name: $scope.language.finance,
			colapsed: false,
			icon: "fa fa-balance-scale",
			icon2: {
				colapsed: "fa fa-caret-up",
				folded: "fa fa-caret-down"
			},
			child: [{
				path: "banks",
				name: $scope.language.bank,
				icon: "fa fa-credit-card"
			}, {
				path: "payments",
				name: $scope.language.payment,
				icon: "fa fa-money"
			}]
		}, {
			path: "miscellaneous",
			name: $scope.language.miscellaneous,
			colapsed: false,
			icon: "fa fa-ellipsis-h",
			icon2: {
				colapsed: "fa fa-caret-up",
				folded: "fa fa-caret-down"
			},
			child: [{
				path: "promotions",
				name: $scope.language.promotion,
				icon: "fa fa-gift"
			}, {
				path: "helps",
				name: $scope.language.help,
				icon: "fa fa-info-circle"
			}]
		}, {
			path: "analytics",
			name: $scope.language.analytics,
			icon: "fa fa-line-chart"
		}],
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

		$scope.goPage = function(path) {
			if (path == "logout") {
				var path = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/app/";
				window.location.href = (path + "auth.html");
			} else if(path == "miscellaneous") {
				$scope.menu.main[6].colapsed = !$scope.menu.main[6].colapsed;
			} else if(path == "finance") {
				$scope.menu.main[5].colapsed = !$scope.menu.main[5].colapsed;
			} else {
				$location.path(path);
			}		
		};

		

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

})
.directive('menuToggle', ['$mdUtil', '$animateCss', '$$rAF', function($mdUtil, $animateCss, $$rAF) {
	return {
		scope: {
			section: '='
		},
		templateUrl: 'templates/menu-toggle.html',
		link: function($scope, $element) {
			var controller = $element.parent().controller();

      // Used for toggling the visibility of the accordion's content, after
      // all of the animations are completed. This prevents users from being
      // allowed to tab through to the hidden content.
      $scope.renderContent = false;

      $scope.isOpen = function() {
      	return controller.isOpen($scope.section);
      };

      $scope.toggle = function() {
      	controller.toggleOpen($scope.section);
      };

      $mdUtil.nextTick(function() {
      	$scope.$watch(function () {
      		return controller.isOpen($scope.section);
      	}, function (open) {
      		var $ul = $element.find('ul');
      		var $li = $ul[0].querySelector('a.active');

      		if (open) {
      			$scope.renderContent = true;
      		}

      		$$rAF(function() {
      			var targetHeight = open ? $ul[0].scrollHeight : 0;

      			$animateCss($ul, {
      				easing: 'cubic-bezier(0.35, 0, 0.25, 1)',
      				to: { height: targetHeight + 'px' },
              duration: 0.75 // seconds
          }).start().then(function() {
          	var $li = $ul[0].querySelector('a.active');

          	$scope.renderContent = open;

          	if (open && $li && $ul[0].scrollTop === 0) {
          		var activeHeight = $li.scrollHeight;
          		var activeOffset = $li.offsetTop;
          		var offsetParent = $li.offsetParent;
          		var parentScrollPosition = offsetParent ? offsetParent.offsetTop : 0;

                // Reduce it a bit (2 list items' height worth) so it doesn't touch the nav
                var negativeOffset = activeHeight * 2;
                var newScrollTop = activeOffset + parentScrollPosition - negativeOffset;

                $mdUtil.animateScrollTo(document.querySelector('.docs-menu').parentNode, newScrollTop);
            }
        });
      });
      	});
      });

      var parentNode = $element[0].parentNode.parentNode.parentNode;
      if(parentNode.classList.contains('parent-list-item')) {
      	var heading = parentNode.querySelector('h2');
      	$element[0].firstChild.setAttribute('aria-describedby', heading.id);
      }
  }
};
}])
