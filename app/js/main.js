angular.module('POPSCOOT', ['ngRoute', 'ngMaterial', 'app.service', 'app.root.ctrl', 'app.filters',  'app.account.ctrl', 'app.analytics.ctrl', 'app.bank.ctrl', 
	'app.booking.ctrl', 'app.dashboard.ctrl', 'app.enquiry.ctrl', 'app.help.ctrl', 'app.payment.ctrl', 'app.promotion.ctrl', 'app.scooter.ctrl', 'app.accountPromo.ctrl'
	])

.run(function($rootScope) {
	console.log("welcome to popscoot");
})

.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix("");

	$routeProvider

	.when('/accounts', {
		templateUrl: "templates/accounts.html",
		controller: "AccountsCtrl"
	})
	.when('/accounts/:id', {
		templateUrl: "templates/account.html",
		controller: "AccountCtrl"
	})

	.when('/banks', {
		templateUrl: "templates/banks.html",
		controller: "BanksCtrl"
	})	
	.when('/banks/:id', {
		templateUrl: "templates/bank.html",
		controller: "BankCtrl"
	})
	.when('/bookings', {
		templateUrl: "templates/bookings.html",
		controller: "BookingsCtrl"
	})
	.when('/bookings/:id', {
		templateUrl: "templates/booking.html",
		controller: "BookingCtrl"
	})
	.when('/enquiries', {
		templateUrl: "templates/enquiries.html",
		controller: "EnquiriesCtrl"
	})
	.when('/enquiries/:id', {
		templateUrl: "templates/enquiry.html",
		controller: "EnquiryCtrl"
	})
	.when('/helps', {
		templateUrl: "templates/helps.html",
		controller: "HelpsCtrl"
	})
	.when('/helps/:id', {
		templateUrl: "templates/help.html",
		controller: "HelpCtrl"
	})
	.when('/payments', {
		templateUrl: "templates/payments.html",
		controller: "PaymentsCtrl"
	})
	.when('/payments/:id', {
		templateUrl: "templates/payment.html",
		controller: "PaymentCtrl"
	})
	.when('/promotions', {
		templateUrl: "templates/promotions.html",
		controller: "PromotionsCtrl"
	})
	.when('/promotions/:id', {
		templateUrl: "templates/promotion.html",
		controller: "PromotionCtrl"
	})
	.when('/scooters', {
		templateUrl: "templates/scooters.html",
		controller: "ScootersCtrl"
	})
	.when('/scooters/:id', {
		templateUrl: "templates/scooter.html",
		controller: "ScooterCtrl"
	})
	
	.when('/new/account', {
		templateUrl: "templates/accountnew.html",
		controller: "NewAccountCtrl"
	})
	.when('/new/bank', {
		templateUrl: "templates/banknew.html",
		controller: "NewBankCtrl"
	})
	.when('/new/booking', {
		templateUrl: "templates/bookingnew.html",
		controller: "NewBookingCtrl"
	})
	.when('/new/help', {
		templateUrl: "templates/helpnew.html",
		controller: "NewHelpCtrl"
	})
	.when('/new/payment', {
		templateUrl: "templates/paymentnew.html",
		controller: "NewPaymentCtrl"
	})	
	.when('/new/promotion', {
		templateUrl: "templates/promotionnew.html",
		controller: "NewPromotionCtrl"
	})
	.when('/new/scooter', {
		templateUrl: "templates/scooternew.html",
		controller: "NewScooterCtrl"
	})
	.when('/new/accountPromo', {
		templateUrl: "templates/accountPromonew.html",
		controller: "NewAccountPromoCtrl"
	})


	.when('/dashboard', {
		templateUrl: "templates/dashboard.html",
		controller: "DashboardCtrl"
	})
	.when('/analytics', {
		templateUrl: "templates/dashboard.html",
		controller: "AnalyticsCtrl"
	})

	.otherwise({
		redirectTo: '/dashboard'
	});
})

.config(function($mdIconProvider) {
	$mdIconProvider
	.iconSet("call", 'img/icons/sets/communication-icons.svg', 24)
	.iconSet("social", 'img/icons/sets/social-icons.svg', 24);
})


/*.constant('LOCALES', {
    'locales': {
        'zh_CN': 'Chinese',
        'en_SG': 'English'
    },
    'preferredLocale': 'en_US'
})
 .config(function ($translateProvider) {
    $translateProvider.useMissingTranslationHandlerLog();
})
 .config(function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: 'resources/language-',// path to translations files
        suffix: '.json'// suffix, currently- extension of the translations
    });
    $translateProvider.preferredLanguage('en_US');// is applied on first load
    $translateProvider.useLocalStorage();// saves selected language to localStorage
})
 .config(function (tmhDynamicLocaleProvider) {
    tmhDynamicLocaleProvider.localeLocationPattern('node_modules/angular-i18n/angular-locale_{{locale}}.js');
})

 .directive('ngTranslateLanguageSelect', function (LocaleService) { 'use strict';

        return {
            restrict: 'A',
            replace: true,
            template: ''+
            '<div class="language-select" ng-if="visible">'+
                '<label>'+
                    '{{"directives.language-select.Language" | translate}}:'+
                    '<select ng-model="currentLocaleDisplayName"'+
                        'ng-options="localesDisplayName for localesDisplayName in localesDisplayNames"'+
                        'ng-change="changeLanguage(currentLocaleDisplayName)">'+
                    '</select>'+
                '</label>'+
            '</div>'+
            '',
            controller: function ($scope) {
                $scope.currentLocaleDisplayName = LocaleService.getLocaleDisplayName();
                $scope.localesDisplayNames = LocaleService.getLocalesDisplayNames();
                $scope.visible = $scope.localesDisplayNames &&
                $scope.localesDisplayNames.length > 1;

                $scope.changeLanguage = function (locale) {
                    LocaleService.setLocaleByDisplayName(locale);
                };
            }
        };
    });*/
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

angular.module('app.account.ctrl', [])

.controller('AccountCtrl', function($routeParams, $scope, httpService, configuration) {
	console.log('this is AccountCtrl');

	$scope.isEdit = false;
	var accountId = $routeParams.id;
	var domain = configuration.domain();
	$scope.url = {
		account: domain + "/service/accounts/" + accountId,
		bookings: domain + "/service/accounts/" + accountId + "/bookings",
		banks: domain + "/service/accounts/" + accountId + "/banks",
		enquiries: domain + "/service/accounts/" + accountId + "/enquiries",
		promotions: domain + "/service/accounts/" + accountId + "/promotions",
		shareLogs: domain + "/service/accounts/" + accountId + "/shareLogs",
		pushTokens: domain + "/service/accounts/" + accountId + "/pushTokens",
		transactions: domain + "/service/accounts/" + accountId + "/transactions",
		payments: domain + "/service/accounts/" + accountId + "/payments"
	};

	$scope.init_form = {};
	$scope.account = {};
	$scope.bookings = [];
	$scope.banks = [];
	$scope.transactions = [];
	$scope.promotions = [];
	$scope.shareLogs = [];
	$scope.payments = [];
	$scope.pushTokens = [];
	$scope.enquiries = [];
	$scope.hasBank = false;

	function getAccount() {
		httpService.httpGet($scope.url.account, 'GET_ACCOUNT');
	}

	$scope.$on("GET_ACCOUNT", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.account = data.data.data.data;
			initForm();
		} else {
			console.log(data.data.data.message);
		}
		/*return new Promise(function(resolve, reject){
			if (typeof($scope.account) === "object") {	
				resolve();
			} else {
				reject();
			}
		})*/
	});

	function getBookings() {
		httpService.httpGet($scope.url.bookings, 'GET_BOOKINGS');
	}

	$scope.$on("GET_BOOKINGS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.bookings = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});

	function getBanks() {
		httpService.httpGet($scope.url.banks, 'GET_BANKS');
	}

	$scope.$on("GET_BANKS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.banks = data.data.data.data;
			if(typeof($scope.banks[0]) === 'object'){
				$scope.hasBank = true;
			}
		} else {
			console.log(data.data.data.message);
		}
	});

	function getPromotions() {
		httpService.httpGet($scope.url.promotions, 'GET_PROMOTIONS');
	}

	$scope.$on("GET_PROMOTIONS", function(event, data){
		if(data.data.data.status == 1) {
			/*console.log("test", data);*/
			console.log(data.data.data.data.appliedPromotions);
			$scope.promotions = data.data.data.data.appliedPromotions;
		} else {
			console.log(data.data.data.message);
		}
	});

	function getShareLogs() {
		httpService.httpGet($scope.url.shareLogs, 'GET_SHARELOGS');
	}

	$scope.$on("GET_SHARELOGS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.shareLogs = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});

	function getTransactions() {
		httpService.httpGet($scope.url.transactions, 'GET_TRANSACTIONS');
	}

	$scope.$on("GET_TRANSACTIONS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.transactions = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});

	function getPushTokens() {
		httpService.httpGet($scope.url.pushTokens, 'GET_PUSHTOKENS');
	}

	$scope.$on("GET_PUSHTOKENS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.pushTokens = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});

	function getPayments() {
		httpService.httpGet($scope.url.payments, 'GET_PAYMENTS');
	}

	$scope.$on("GET_PAYMENTS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.payments = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});

	function getEnquiries() {
		httpService.httpGet($scope.url.enquiries, 'GET_ENQUIRIES');
	}

	$scope.$on("GET_ENQUIRIES", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.enquiries = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});

	$scope.updateAccount = function(){
		var updateForm = {
			accountId: $scope.init_form.accountId,
			birthday: moment($scope.init_form.birthday).format("YYYY-MM-DDTHH:MM:SSZ")
		}
		console.log(updateForm);
		httpService.httpPut($scope.url.account, updateForm, 'UPDATE_ACCOUNT');
	}
	$scope.$on('UPDATE_ACCOUNT', function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.account = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	})

	$scope.createAccount = function(){
		var createForm = {
			username: $scope.init_form.username,
			email: $scope.init_form.email,
			password: $scope.init_form.password
		}
		console.log(createForm);
		httpService.httpPost($scope.url.account, createForm, 'CREATE_ACCOUNT');
	}
	$scope.$on("CREATE_ACCOUNT", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.account = data.data.data.data;		
			window.location.href = "#accounts/" + $scope.account.accountId
		} else {
			console.log(data.data.data.message);
		}
	})

	function initForm() {
		if (typeof($scope.account) === "object") {
			$scope.isEdit = true; 
		} 
		$scope.init_form= {
			accountId: $scope.isEdit ? $scope.account.accountId : "",
			username: $scope.isEdit ? $scope.account.username : "",
			birthday: $scope.isEdit ? $scope.account.birthday : "",
			type: $scope.isEdit ? $scope.account.type : "",
			socialMedia: $scope.isEdit ? $scope.account.socialMedia : "",
			email: $scope.isEdit ? $scope.account.email : "",
			active: $scope.isEdit ? $scope.account.active : "",
			password : ""
		}
	}

	$scope.getActive = function (acc){
		if (acc.active) {
			return 'ACTIVATED'
		} else {
			return 'DEACTIVATED'
		}
	}

	// init

	getAccount();
	getBookings();
	getBanks();
	getEnquiries();
	getPayments();
	getPushTokens();
	getShareLogs();
	getTransactions();
	getPromotions();	
	
})

.controller('AccountsCtrl', function($scope, $location, httpService, $timeout) {
	console.log('this is AccountsCtrl');
	$scope.path = "#/accounts/";
	// var path = $location.path();
	// $scope.goPage = function(path){
	// 	$location.path(path);
	// }

	
	$scope.accounts = [];

	$scope.url = "http://test.popscoot.com/popscoot/service/accounts"

	httpService.httpGet($scope.url, 'GET_ACCOUNTS');

	$scope.$on("GET_ACCOUNTS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.accounts = data.data.data.data;
			$scope.$emit("GETFINISHED");
		} else {
			console.log(data.data.data.message);
			$scope.emit("GETFINISHED")
		}
	});

    //dynamic loading start
    // In this example, we set up our model using a class.
        // Using a plain object works too. All that matters
        // is that we implement getItemAtIndex and getLength.
        $scope.DynamicItems = function() {
          /**
           * @type {!Object<?Array>} Data pages, keyed by page number (0-index).
           */
           this.loadedPages = {};

           /** @type {number} Total number of items. */
           this.numItems = 0;

           /** @const {number} Number of items to fetch per request. */
           this.PAGE_SIZE = 50;

           this.fetchNumItems_();
       };

        // Required.
        $scope.DynamicItems.prototype.getItemAtIndex = function(index) {
        	var pageNumber = Math.floor(index / this.PAGE_SIZE);
        	var page = this.loadedPages[pageNumber];

        	if (page) {
        		return page[index % this.PAGE_SIZE];
        	} else if (page !== null) {
        		this.fetchPage_(pageNumber);
        	}
        };

        // Required.
        $scope.DynamicItems.prototype.getLength = function() {
        	return this.numItems;
        };

        $scope.DynamicItems.prototype.fetchPage_ = function(pageNumber) {
          // Set the page to null so we know it is already being fetched.
          this.loadedPages[pageNumber] = null;

          // For demo purposes, we simulate loading more items with a timed
          // promise. In real code, this function would likely contain an
          // $http request.
          $timeout(angular.noop, 300).then(angular.bind(this, function() {
          	this.loadedPages[pageNumber] = [];
          	var pageOffset = pageNumber * this.PAGE_SIZE;
          	for (var i = pageOffset; i < pageOffset + this.PAGE_SIZE; i++) {
          		this.loadedPages[pageNumber].push(i);
          	}
          }));
      };

      $scope.DynamicItems.prototype.fetchNumItems_ = function() {
          // For demo purposes, we simulate loading the item count with a timed
          // promise. In real code, this function would likely contain an
          // $http request.
          $timeout(angular.noop, 300).then(angular.bind(this, function() {
          	this.numItems = 50000;
          }));
      };

      this.dynamicItems = new $scope.DynamicItems();

    //dynamic loading end

    //pagination start
    $scope.currentPageNumber = 1;
    $scope.itemsPerPage = 10;

    $scope.getNumberOfPages = function() {
    	var count = $scope.accounts.length / $scope.itemsPerPage;
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

    $scope.deleteAccount = function(id){
    	httpService.httpDelete($scope.url+"/"+id, 'DELETE_ACCOUNT');
    }

    $scope.$on("DELETE_ACCOUNT", function(event, data){
    	if(data.data.data.status == 1) {
    		console.log(data.data.data.data);
    		httpService.httpGet($scope.url, 'GET_ACCOUNTS');
    	} else {
    		console.log(data.data.data.message);
    	}
    });

    $scope.getActive = function (acc){
		if (acc.active) {
			return 'ACTIVATED'
		} else {
			return 'DEACTIVATED'
		}
	}
})

.controller("NewAccountCtrl", function(){
	console.log("this is NewAccountCtrl");
})
.filter('paginate', function(){
	return function(array, pageNumber, itemsPerPage){
		var begin = ((pageNumber - 1) * itemsPerPage);
		var end = begin + itemsPerPage;
		return array.slice(begin, end);
	};
})
angular.module('app.analytics.ctrl', [])

.controller('AnalyticsCtrl', function() {
	console.log('this is AnalyticsCtrl')
})

angular.module('app.bank.ctrl', [])

.controller('BankCtrl', function($scope, $routeParams, httpService) {
	console.log('this is BankCtrl')
	$scope.bank;
	$scope.url = {
		bank: "http://test.popscoot.com/popscoot/service/banks/"+$routeParams.id
	}
	function getBank (){
		httpService.httpGet($scope.url.bank, "GET_BANK");		
	}
	$scope.$on("GET_BANK", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.bank = data.data.data.data;
			$scope.$emit("GETFINISHED");
		} else {
			console.log(data.data.data.message);
			$scope.$emit("GETFINISHED");
		}
	});
	getBank();

})

.controller('BanksCtrl', function($scope, $location, httpService) {
	console.log('this is BanksCtrl');
	$scope.path = "#/banks/";
	// var path = $location.path();
	// $scope.goPage = function(path){
	// 	$location.path(path);
	// }
	$scope.url = "http://test.popscoot.com/popscoot/service/banks"
	$scope.banks;

	httpService.httpGet($scope.url, 'GET_BANKS');

	$scope.$on("GET_BANKS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.banks = data.data.data.data;
			$scope.$emit("GETFINISHED");
		} else {
			console.log(data.data.data.message);
			$scope.$emit("GETFINISHED");
		}
	});
})
.controller("NewBankCtrl", function(){
	console.log("this is NewBankCtrl");
})

angular.module('app.booking.ctrl', [])

.controller('BookingCtrl', function($scope, $routeParams, httpService, configuration) {
	console.log('this is BookingCtrl')
	$scope.booking = {};
	$scope.url = {
		booking: configuration.domain()+"/service/bookings/"+$routeParams.id
	}
	//console.log($scope.url);
	function getBooking (){
		httpService.httpGet($scope.url.booking, 'GET_BOOKING');
	}


	$scope.$on("GET_BOOKING", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.booking = data.data.data.data;
			$scope.$emit("GETFINISHED");
		} else {
			console.log(data.data.data.message);
			$scope.$emit("GETFINISHED");
		}
	});
	getBooking();

})

.controller('BookingsCtrl', function($scope, $location, httpService) {
	console.log('this is BookingsCtrl');
	$scope.path = "#/bookings/";
	// var path = $location.path();
	// $scope.goPage = function(path){
	// 	$location.path(path);
	// }
	$scope.url = "http://test.popscoot.com/popscoot/service"+$location.path();
	console.log($scope.url);
	$scope.bookings=[];
	/*if ($location.path().split("/")[1] == "accounts") {
		$scope.bookings = data.bookings;
	} else {

	}*/
	


	httpService.httpGet($scope.url, 'GET_BOOKINGS');

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
})

.controller("NewBookingCtrl", function(){
	console.log("this is NewBookingCtrl");
})


angular.module('app.dashboard.ctrl', [])

.controller('DashboardCtrl', function() {
	console.log('this is DashboardCtrl')
})


angular.module('app.enquiry.ctrl', [])

.controller('EnquiryCtrl', function($scope, $routeParams, httpService) {
	console.log('this is EnquiryCtrl');
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
	getEnquiry();
})

.controller('EnquiriesCtrl', function($scope, $location, httpService) {
	console.log('this is EnquiriesCtrl')
	$scope.path = "#/enquiries/";
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
			$scope.$emit("GETFINISHED");
		} else {
			console.log(data.data.data.message);
			$scope.$emit("GETFINISHED");
		}
	});
})
.controller('NewEnquiryCtrl', function(){
	console.log("this is NewEnquiryCtrl");
})

angular.module('app.help.ctrl', [])

.controller('HelpCtrl', function($scope, $routeParams, httpService) {
	console.log('this is HelpCtrl');
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
	getHelp();
})

.controller('HelpsCtrl', function($scope, $location, httpService) {
	console.log('this is HelpsCtrl')
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
.controller("NewHelpCtrl", function(){
	console.log("this is NewHelpCtrl");
})


angular.module('app.payment.ctrl', [])

.controller('PaymentCtrl', function($scope, $routeParams, httpService) {
	console.log('this is PaymentCtrl');
	$scope.url = {
		payment: "http://test.popscoot.com/popscoot/service/payments/"+$routeParams.id,
		transactions: "http://test.popscoot.com/popscoot/service/payments/"+$routeParams.id+"/transactions"
	};
	$scope.payment;
	$scope.transactions;
	function getPayment(){
		httpService.httpGet($scope.url.payment, 'GET_PAYMENT');		
	};

	$scope.$on("GET_PAYMENT", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.payment = data.data.data.data;
			$scope.$emit("GETFINISHED");
		} else {
			console.log(data.data.data.message);
			$scope.$emit("GETFINISHED");
		}
	});

	function getTransactions(){
		httpService.httpGet($scope.url.transactions, 'GET_TRANSACTIONS');		
	};

	$scope.$on("GET_TRANSACTIONS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.transactions = data.data.data.data;
			$scope.$emit("GETFINISHED");
		} else {
			console.log(data.data.data.message);
			$scope.$emit("GETFINISHED");
		}
	});
	getPayment();
	getTransactions();
})

.controller('PaymentsCtrl', function($scope, $location, httpService) {
	console.log('this is PaymentsCtrl');
	$scope.path = "#/payments/";
	/*var path = $location.path();
	$scope.goPage = function(path){
		$location.path(path);
	}*/
	$scope.url = "http://test.popscoot.com/popscoot/service/payments"
	$scope.payments;

	httpService.httpGet($scope.url, 'GET_PAYMENTS');

	$scope.$on("GET_PAYMENTS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.payments = data.data.data.data;
			$scope.$emit("GETFINISHED");
		} else {
			console.log(data.data.data.message);
			$scope.$emit("GETFINISHED");
		}
	});
})
.controller('NewPaymentCtrl', function(){
	console.log("this is NewPaymentCtrl");
})


angular.module('app.promotion.ctrl', [])

.controller('PromotionCtrl', function($scope, $routeParams, httpService) {
	console.log('this is PromotionCtrl')
	$scope.accounts;
	$scope.promotion;
	$scope.url = {
		promotion: "http://test.popscoot.com/popscoot/service/promotions/"+$routeParams.id,
		accounts: "http://test.popscoot.com/popscoot/service/promotions/"+$routeParams.id+"/accounts"
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
})

.controller('PromotionsCtrl', function($scope, $location, httpService) {
	console.log('this is PromotionsCtrl');
	$scope.path = "#/promotions/";
	/*var path = $location.path();
	$scope.goPage = function(path){
		$location.path(path);
	}*/
	$scope.url = "http://test.popscoot.com/popscoot/service/promotions"

	httpService.httpGet($scope.url, 'GET_PROMOTIONS');
	$scope.promotions;

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
})

.controller("NewPromotionCtrl", function(){
	console.log("this is NewPromotionCtrl");
})


angular.module('app.scooter.ctrl', [])

.controller('ScooterCtrl', function($scope, $routeParams, httpService, configuration) {
	console.log('this is ScooterCtrl')
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
	getScooter();
	getBookings();
})


.controller('ScootersCtrl', function($scope, $location, httpService) {
	console.log('this is ScootersCtrl');
	$scope.path = "#/scooters/";
	/*var path = $location.path();
	$scope.goPage = function(path){
		$location.path(path);
	}*/
	$scope.scooters = [];

	$scope.url = "http://test.popscoot.com/popscoot/service/scooters"

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
})
.controller('NewScooterCtrl', function(){
	console.log("this is NewScooterCtrl")
;})


angular.module("app.accountPromo.ctrl", [])

.controller("NewAccountPromoCtrl", function(){
	console.log("NewAccountPromoCtrl");
});
angular.module('app.filters', [])

.filter('text_fmt', function() {
	return function(input, opt) {
		switch(opt) {
			case 0:
				return input.toLowerCase();
			case 1:
				return input.replace(/\w\S*/g, function(txt){
					return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
				});
			case 2:
				return input.toUpperCase();
			default:
				return input;
		}
	}
})

.filter('nospace', function () {
    return function (value) {
        return (!value) ? '' : value.replace(/ /g, '');
    };
});


	
	
	
	

angular.module('app.service', [])

.factory('httpService', function($rootScope, $http){
    return{
        httpGet: function(url, listenerId){
            $rootScope.$broadcast("GETLOADING");
            url += "?_=" + new Date().getTime();
            $http.get(url, {
                headers: {
                    "Auth-Secret": DAO.getSecret()
                }
            })
            .then(function(data, status, headers, config) {
                $rootScope.$broadcast(listenerId, {
                    status: 1,
                    data: data
                });
            }, function(data, status, headers, config) {
                $rootScope.$broadcast(listenerId, {
                    status: 0
                });
            });
        },
        httpPost: function(url, input, listenerId){
            $http.post(url, input, {
                headers: {
                    "Auth-Secret": DAO.getSecret()
                }
            })
            .then(function(data, status, headers, config) {
                $rootScope.$broadcast(listenerId, {
                    status: 1,
                    data: data
                });
            }, function(data, status, headers, config) {
                $rootScope.$broadcast(listenerId, {
                    status: 0
                });
            });
        },
        httpPut: function(url, input, listenerId){
            $http.put(url, input, {
                headers: {
                    "Auth-Secret": DAO.getSecret()
                }
            })
            .then(function(data, status, headers, config) {
                $rootScope.$broadcast(listenerId, {
                    status: 1,
                    data: data
                });
            }, function(data, status, headers, config) {
                $rootScope.$broadcast(listenerId, {
                    status: 0
                });
            });
        },
        httpDelete: function(url, listenerId){
            $http.delete(url, {
                headers: {
                    "Auth-Secret": DAO.getSecret()
                }
            })
            .then(function(data, status, headers, config) {
                $rootScope.$broadcast(listenerId, {
                    status: 1,
                    data: data
                });
            }, function(data, status, headers, config) {
                $rootScope.$broadcast(listenerId, {
                    status: 0
                });
            });
        }
    }
})

.factory('configuration', function($rootScope, $http){
    return {
        domain: function() {
            return "http://test.popscoot.com/popscoot/";
        }
    }
})
.factory('sortBy', function($rootScope){
    return function sortBy(propertyName){
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
    };
}])
.factory('toastService', function($rootScope, $http, $mdToast){
    return {
        showSimpleToast: function(textContent, position, hideDelay, parent) {

            $mdToast.show(
                $mdToast.simple()
                .textContent(textContent)
                .position(position)
                .hideDelay(hideDelay)
                .parent(parent)
                );
        },
        showActionToast: function(textContent, position, hideDelay, parent, actionName, action, action2) {
            var toast = $mdToast.simple()
            .textContent(actionName)
            .action(actionName)
            .highlightAction(true)
      .highlightClass('md-accent')// Accent is used by default, this just demonstrates the usage.
      .position(position)
      .parent(parent);

      $mdToast.show(toast).then(function(response) {
        if ( response == 'ok' ) {
            action();
        }else{
            action2();
        }
    });
  }

}
});

 /*.service('LocaleService', function ($translate, LOCALES, $rootScope, tmhDynamicLocale) {
    'use strict';
    // PREPARING LOCALES INFO
    var localesObj = LOCALES.locales;

    // locales and locales display names
    var _LOCALES = Object.keys(localesObj);
    if (!_LOCALES || _LOCALES.length === 0) {
      console.error('There are no _LOCALES provided');
    }
    var _LOCALES_DISPLAY_NAMES = [];
    _LOCALES.forEach(function (locale) {
      _LOCALES_DISPLAY_NAMES.push(localesObj[locale]);
    });

    // STORING CURRENT LOCALE
    var currentLocale = $translate.proposedLanguage();// because of async loading

    // METHODS
    var checkLocaleIsValid = function (locale) {
      return _LOCALES.indexOf(locale) !== -1;
    };

    var setLocale = function (locale) {
      if (!checkLocaleIsValid(locale)) {
        console.error('Locale name "' + locale + '" is invalid');
        return;
      }
      currentLocale = locale;// updating current locale

      // asking angular-translate to load and apply proper translations
      $translate.use(locale);
    };

    // EVENTS
    // on successful applying translations by angular-translate
    $rootScope.$on('$translateChangeSuccess', function (event, data) {
      document.documentElement.setAttribute('lang', data.language);// sets "lang" attribute to html

       // asking angular-dynamic-locale to load and apply proper AngularJS $locale setting
      tmhDynamicLocale.set(data.language.toLowerCase().replace(/_/g, '-'));
    });

    return {
      getLocaleDisplayName: function () {
        return localesObj[currentLocale];
      },
      setLocaleByDisplayName: function (localeDisplayName) {
        setLocale(
          _LOCALES[
            _LOCALES_DISPLAY_NAMES.indexOf(localeDisplayName)// get locale index
            ]
        );
      },
      getLocalesDisplayNames: function () {
        return _LOCALES_DISPLAY_NAMES;
      }
    };
});*/
var DAO = (function() {
	var app = {};

	app.setSecret = function(secret) {
		localStorage.setItem("UI_SECRET", secret);
	};

	app.getSecret = function() {
		
		return localStorage.getItem("UI_SECRET");
	};

	return app;
})();
var LANG_EN = {
	dashboard: "dashboard",
	splash: "splash",
	account: "account",
	analytics: "analytics",
	bank: "bank",
	booking: "booking",
	enquiry: "enquiry",
	help: "help",
	payment: "payment",
	promotion: "promotion",
	scooter: "scooter",
	finance: "finance",
	miscellaneous: "miscellaneous"
};

var LANG_CH = {
	dashboard: "控制台",
	splash: "启动页",
	account: "用户",
	analytics: "统计信息",
	bank: "账户",
	booking: "订单",
	enquiry: "用户询问",
	help: "帮助",
	payment: "支付",
	promotion: "优惠",
	scooter: "踏板车"
};
angular.module('auth', ['ngRoute', 'ngMaterial', 'app.service', 'app.forgetPassword.ctrl', 'app.changePassword.ctrl', 'app.register.ctrl', 'app.login.ctrl'])

.run(function($rootScope) {
	console.log("welcome to popscoot Auth");
})

.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix("");

	$routeProvider

	.when('/login', {
		templateUrl: "authTemplates/login.html",
		controller: "LoginCtrl"
	})
	.when('/forgetPassword', {
		templateUrl: "authTemplates/forgetPassword.html",
		controller: "ForgetPasswordCtrl"
	})
	.when('/changePassword', {
		templateUrl: "authTemplates/changePassword.html",
		controller: "ChangePasswordCtrl"
	})
	.when('/register', {
		templateUrl: "authTemplates/register.html",
		controller: "RegisterCtrl"
	})
	.otherwise({
		redirectTo: '/login'
	});
})
.controller("AuthCtrl", function($rootScope, $window){
	console.log("Auth Ctrl");
	$rootScope.browserHeight = $window.innerHeight;
})
/*.controller('LoginCtrl', function($scope, httpService, configuration){
	var loginForm = {
		username: $scope.username,
		password: $scope.password
	}
	$scope.url = configuration.domain()+"/service/auth"
	function login (){
		httpService.httpPost($scope.url, loginForm, "LOGIN")
	}
	$scope.$on("LOGIN")

})

*/
angular.module('app.changePassword.ctrl', [])
.controller('ChangePasswordCtrl', function($scope, httpService){
	console.log("ChangePasswordCtrl");
})
angular.module('app.forgetPassword.ctrl', [])
.controller('ForgetPasswordCtrl', function($scope, httpService, $location, $mdToast, toastService, configuration){
	var domain = configuration.domain();	
	$scope.path = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/app/";
	$scope.url = {
		forgetPassword: domain + "service/auth"
	}
	$scope.form = {
		email: ""
	}
	$scope.forgetPassword = function(){
		var body = {
			email: $scope.form.email
		}
		httpService.httpPut($scope.url.forgetPassword, body, 'FORGETPASSWORD');
		
	}

	var directInbox = function(mail){
		atPos = mail.indexOf("@"),
		hoster = mail.substring(atPos + 1);
		window.location.href = 'http://' + hoster;
	}
	var showActionToast = function(textContent, position, hideDelay, parent, email) {
		var toast = $mdToast.simple()
		.textContent('Activation email sent...')
		.action('To Inbox')
		.highlightAction(true)
      .highlightClass('md-accent')// Accent is used by default, this just demonstrates the usage.
      .position(position)
      .parent(parent);

      $mdToast.show(toast).then(function(response) {
      	if ( response == 'ok' ) {
      		directInbox(email);
      	}else{
      		window.location.href = $scope.path + "auth.html";
      	}
      });
  }
  $scope.$on("FORGETPASSWORD", function(event, data){
  	console.log(data);
  	if(data.data.data.status == 1) {
  		/*if (data.data.data.data.type === "admin") {	*/			
  			console.log(data.data.data.data);
  			showActionToast('Activation email sent', 'top right', 3000, "#test", $scope.form.email);

			/*} else {
				alert("not admin");
			}*/
		} else {
			toastService.showSimpleToast(data.data.data.message, 'top right', 3000, "#test")
		}
	})

	console.log("ForgetPasswordCtrl");
})
angular.module('app.login.ctrl', [])
.controller('LoginCtrl', function($scope, httpService, $location, configuration, toastService){
	$scope.authSecret;
	$scope.path = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/app/";
	var domain = configuration.domain();
	$scope.url = {
		account: domain + "service/auth"
	}
	$scope.form = {
		username: "",
		password: ""
	}
	$scope.login = function(){
		var body = {
			username: $scope.form.username,	
			password: $scope.form.password
		}
		if ($scope.form.username != "" && $scope.form.password != "") {
			httpService.httpPost($scope.url.account, body, 'LOGIN');
		} 		
	}
	$scope.$on("LOGIN", function(event, data){
		console.log(data);
		if(data.data.data.status == 1) {
			/*if (data.data.data.data.type === "admin") {	*/			
				console.log(data.data.data.data);
				console.log(data.data.data.data["Auth-Secret"]);
				DAO.setSecret(data.data.data.data["Auth-Secret"]);
				window.location.href = $scope.path + "index.html"
			/*} else {
				alert("not admin");
			}*/
		} else {
			toastService.showSimpleToast(data.data.data.message, 'top right', 3000, "#test")
		}
	})
 	
  console.log("LoginCtrl");
})
angular.module('app.register.ctrl', [])
.controller('RegisterCtrl', function($scope, httpService, toastService, configuration, $location, $mdToast){
	var domain = configuration.domain();	
	$scope.path = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/app/";
	$scope.url = {
		register: domain + "service/accounts"
	}
	$scope.form = {
		username: "",
		email: "",
		password: ""
	}
	$scope.register = function(){
		var body = {
			username: $scope.form.username,	
			email: $scope.form.email,
			password: $scope.form.password
		}
		if ($scope.form.username != "" && $scope.form.password != "") {
			httpService.httpPost($scope.url.register, body, 'REGISTER');
		} 		
	}

	var directInbox = function(mail){
		atPos = mail.indexOf("@"),
		hoster = mail.substring(atPos + 1);
		window.location.href = 'http://' + hoster;
	}
	var showActionToast = function(textContent, position, hideDelay, parent, email) {
		var toast = $mdToast.simple()
		.textContent('Activation email sent...')
		.action('To Inbox')
		.highlightAction(true)
      .highlightClass('md-accent')// Accent is used by default, this just demonstrates the usage.
      .position(position)
      .parent(parent);

      $mdToast.show(toast).then(function(response) {
      	if ( response == 'ok' ) {
      		directInbox(email);
      	}else{
      		window.location.href = $scope.path + "auth.html";
      	}
      });
  }
  $scope.$on("REGISTER", function(event, data){
  	console.log(data);
  	if(data.data.data.status == 1) {
  		/*if (data.data.data.data.type === "admin") {	*/			
  			console.log(data.data.data.data);
  			showActionToast('Activation email sent', 'top right', 3000, "#test", $scope.form.email);

			/*} else {
				alert("not admin");
			}*/
		} else {
			toastService.showSimpleToast(data.data.data.message, 'top right', 3000, "#test")
		}
	})

  console.log("RegisterCtrl");
})
.directive("compareTo", function(){
	return {
		require: "ngModel",
		scope: {
			otherModelValue: "=compareTo"
		},
		link: function(scope, element, attributes, ngModel) {

			ngModel.$validators.compareTo = function(modelValue) {
				return modelValue == scope.otherModelValue;
			};

			scope.$watch("otherModelValue", function() {
				ngModel.$validate();
			});
		}
	};
})
/*.directive("existUsername", function($http, $q, configuration){
	var domain = configuration.domain();
	url = {
		validateUser: domain + "service/accounts"
	}
	return {
		require: 'ngModel',
		link: function(scope, elm, attrs, ngModel) {
			ngModel.$asyncValidators.uniqueUsername = function(username) {
				var body = {
					"username": username
				}
				$http.post(url.validateUser, body)
				.then(function(response) {
					console.log(response);
					if (response.data.status == 0) {
						return $q.reject("Username has already been taken");
					} else {
						return true;
					}
				})
			}
		}
	}
})*/