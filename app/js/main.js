angular.module('POPSCOOT', ['ngAvatar', 'ngRoute', 'ngMaterial', 'lfNgMdFileInput', 'ngFileUpload', 'ngImgCrop', 'app.service', 'app.root.ctrl', 'app.filters',  'app.account.ctrl', 'app.analytics.ctrl', 'app.bank.ctrl', 
	'app.booking.ctrl', 'app.dashboard.ctrl', 'app.enquiry.ctrl', 'app.help.ctrl', 'app.payment.ctrl', 'app.promotion.ctrl', 'app.scooter.ctrl', 'app.accountPromo.ctrl'
	])

.run(function($rootScope, $location) {
	console.log("welcome to popscoot");
	
	var isAuthenticated = function(){
		if (localStorage.getItem("UI_SECRET") === null) {
			var path = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/app/";
			window.location.href = path + "auth.html";
		}
	}
	isAuthenticated();

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
	}).when('/transactions/:id', {
		templateUrl: "templates/bank.html",
		controller: "BankCtrl"
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

.controller('RootCtrl', function(configuration, httpService, $rootScope, $scope, $location, $mdDialog, $route, $mdSidenav, $window) {
	$scope.$on('BC', function(evt, data){
		$scope.breadcrumbs = data;
		console.log($scope.breadcrumbs);
	});
	$scope.goHome = function(){
		window.location.href =  $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/app/" +"index.html";
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
			} else {
				console.log(data.data.data.message);
			}
		});
	}
	$scope.setLanguage = function(language){
		if (language) {
			$scope.language = language;
		} else {
			$scope.language = LANG_EN;
		}
	}
	angular.element($window).on('resize', function () {
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
				localStorage.removeItem("UI_SECRET");
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

  
  getLoginAccount();

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

.controller('AccountCtrl', function($timeout, $mdDialog, $location, $routeParams, $scope, httpService, configuration) {
	console.log('this is AccountCtrl');


	$scope.path = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/app/";
	$scope.$emit('BC', [{
		name: "Accounts",
		url: "#/accounts"
	},
	{
		name: "Account"
	}])
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

	//hovers
	


	$scope.$emit('breadcrumbs', function(){
		return([
		{
			name: Accounts,
			url: domain + "/service/accounts/"
		},
		{
			name: Account,
			url: domain + "/service/accounts/" + accountId
		}])
	})
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
			redirect();
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
			birthday: moment($scope.account.birthday).format("YYYY-MM-DDTHH:MM:SSZ"),
			media: mediaId
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
	$scope.path = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/app/";
	function redirect(){
		window.location.href = $scope.path + "index.html#/accounts";
	}

	//deletion related
	deleteAccount = function(){
		httpService.httpDelete($scope.url.account, 'DELETE_ACCOUNT');
	}

	$scope.$on("DELETE_ACCOUNT", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
		} else {
			console.log(data.data.data.message);
		}
	});

	var updateUrl = $scope.url.account;
	$scope.customFullscreen = false;
	$scope.uploadDialog = function(ev) {
		$mdDialog.show({
			locals:{updateUrl: updateUrl},
			controller: DialogController,
			templateUrl: 'templates/upload.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
  })
		.then(function(answer) {
			$scope.status = $scope.media;
		}, function() {
			$scope.status = 'You cancelled the dialog.';
		});
	};
	
	function DialogController($scope, $mdDialog, Upload, httpService, updateUrl) {
		$scope.upload = function (dataUrl, name) {
			var uplaodForm = {
				"files": [{
					name: name,
					type: "image/png",
					size: 2048,
					data: dataUrl
				}],
				"folder": "/popscoot"
			}
			httpService.httpPost("http://test.popscoot.com/popscoot/service/file/upload/", uplaodForm, 'UPLOAD_IMAGE');
			$scope.uploadStatus = "Uploading...";
			$scope.$on("UPLOAD_IMAGE", function(event, data){
				if(data.data.data.status == 1) {
					console.log(data.data.data.data);
					$scope.media = data.data.data.data[0].data;
					$scope.uploadStatus = "Success";
				} else {
					console.log(data.data.data.message);
					$scope.uploadStatus = "Failed..."+data.data.data.message;
				}
			});
		}
		
		$scope.updateMedia = function(){
			var updateForm = {
				media: $scope.media.mediaId
			}
			console.log(updateForm);
			httpService.httpPut(updateUrl, updateForm, 'UPDATE_IMAGE');
		}
		$scope.$on('UPDATE_IMAGE', function(event, data){
			if(data.data.data.status == 1) {
				console.log(data.data.data.data);
				$scope.account = data.data.data.data;
			} else {
				console.log(data.data.data.message);
			}
		})
		//test end
		$scope.hide = function() {
			$mdDialog.hide();
		};

		$scope.cancel = function() {
			$mdDialog.cancel();
		};

		$scope.answer = function(answer) {
			$mdDialog.hide(answer);
		};
	}
	$scope.showPrompt = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.prompt()
    .title('Confirm Deletion')
    .textContent('Please key in the username of the Account to delete')
    .placeholder('username')
    .ariaLabel('username')
    .targetEvent(ev)
    .ok('Confirm')
    .cancel('Cancel');

    $mdDialog.show(confirm).then(function(result) {
    	if (result == $scope.account.username) {
    		deleteAccount();    		
    		window.location.href = $scope.path + "index.html#/accounts";
    	} else {

    		$scope.status = 'Username Mismatch';
    	}
    	
    }, function() {
    	$scope.status = 'Action canceled';
    });
};


//file upload

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
.config(function($mdThemingProvider) {

    // Configure a dark theme with primary foreground yellow

    $mdThemingProvider.theme('docs-dark', 'default')
    .primaryPalette('yellow')
    .dark();

})

.controller('AccountsCtrl', function($mdMedia, $scope, $location, httpService, $timeout) {
	console.log('this is AccountsCtrl');
	$scope.$emit('BC', [{
		name: "Account",
		url: "#/accounts"
	}]);
	$scope.path = "#/accounts/";
	// var path = $location.path();
	// $scope.goPage = function(path){
	// 	$location.path(path);
	// }
	$scope.itemsOrder = "active";
	$scope.reverse = true;
	$scope.order = function(){
		$scope.reverse = !$scope.reverse;
	}
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
           this.PAGE_SIZE = 10;

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

      $scope.dynamicItems = new $scope.DynamicItems();

    //dynamic loading end
    
    //orderfilter
    


    //pagination start
    $scope.itemsPerRow;
    if ($mdMedia('gt-md')) {
    	$scope.itemsPerRow = 3;
    } else if ($mdMedia('gt-xs')) {
    	$scope.itemsPerRow = 2;
    } else {
    	$scope.itemsPerRow = 1;
    }
    $scope.currentPageNumber = 1;
    $scope.row = 4;
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

    

    $scope.getActive = function (acc){
    	if (acc.active) {
    		return 'ACTIVATED'
    	} else {
    		return 'DEACTIVATED'
    	}
    }
})

.controller("NewAccountCtrl", function($scope, httpService, configuration){

	var domain = configuration.domain();
	$scope.url = {
		account: domain + "/service/accounts/"
	};
	console.log("this is NewAccountCtrl");
	$scope.$emit('BC', [{
		name: "Accounts",
		url: "#/accounts"
	},
	{
		name: "Create"
	}])
	$scope.account;
	$scope.createAccount = function(){
		var createForm = {
			username: $scope.account.username,
			email: $scope.account.email,
			password: $scope.account.password
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

.controller('BankCtrl', function($scope,$mdDialog,$location, $routeParams, httpService) {
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
	$scope.updateBank = function(){
		var updateForm = $scope.bank;
		httpService.httpPut($scope.url.bank, updateForm, 'UPDATE_Bank');
	}
	$scope.$on('UPDATE_Bank', function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.bank = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	})

	deleteBank = function(){
		httpService.httpDelete($scope.url.bank, 'DELETE_Bank');
	}

	$scope.$on("DELETE_Bank", function(event, data){
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
    .textContent('Please key in the BankID of the bank to delete')
    .placeholder('BankID')
    .ariaLabel('integrate_id')
    .targetEvent(ev)
    .ok('Confirm')
    .cancel('Cancel');

    $scope.path = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/app/";
    $mdDialog.show(confirm).then(function(result) {
    	if (result == $scope.bank.bankId) {
    		deleteBank();    		
    		window.location.href = $scope.path + "index.html#/banks";
    	} else {

    		$scope.status = 'Username Mismatch';
    	}
    	
    }, function() {
    	$scope.status = 'Action canceled';
    });
   
};

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
.controller("NewBankCtrl", function($scope, $mdDialog, httpService){
	console.log("this is NewBankCtrl");
	function getAccounts() {
		httpService.httpGet("http://test.popscoot.com/popscoot/service/accounts", 'GET_BACCOUNTS');
	}

	$scope.$on("GET_BACCOUNTS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.accounts = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}

	});
	getAccounts();

	$scope.accDialog = function(ev) {
		$mdDialog.show({
			locals: {localAcc: $scope.accounts},
			controller: DialogController,
			templateUrl: 'templates/accountPicker.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
  })
		.then(function(answer) {
			$scope.accountId = answer.accountId;
		}, function() {
			$scope.status = 'You cancelled the dialog.';
		});
	};

	function DialogController($scope, $mdDialog, Upload, httpService, localAcc) {
		$scope.accounts = localAcc;

		$scope.itemsOrder = "active";
		$scope.reverse = true;
		$scope.order = function(){
			$scope.reverse = !$scope.reverse;
		}
		$scope.currentPageNumber = 1;
		$scope.itemsPerPage = 10;
		$scope.search;
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

		console.log($scope.accounts);

		//test end
		$scope.hide = function() {
			$mdDialog.hide();
		};

		$scope.cancel = function() {
			$mdDialog.cancel();
		};

		$scope.answer = function(answer) {
			$mdDialog.hide(answer);
		};
	}
	$scope.bank = {
		cash: 39.0,
		deposit: 39.0
	}
	$scope.createBank = function(){
		var createForm = $scope.bank;
		createForm.accountId = $scope.accountId;
		console.log(createForm);
		httpService.httpPost("http://test.popscoot.com/popscoot/service/banks", createForm, 'CREATE_BANK');
	}
	$scope.$on("CREATE_BANK", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.bank = data.data.data.data;		
			window.location.href = "#banks/" + $scope.bank.bankId;
		} else {
			console.log(data.data.data.message);
		}
	})
	
	
})

angular.module('app.booking.ctrl', [])

.controller('BookingCtrl', function($scope,$location, $mdDialog, $routeParams, httpService, configuration) {
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

	$scope.updateBooking = function(){
		var updateForm = $scope.booking;
		updateForm.startDate = moment($scope.booking.startDate).format("YYYY-MM-DDTHH:MM:SSZ")
		updateForm.endDate = moment($scope.booking.endDate).format("YYYY-MM-DDTHH:MM:SSZ")
		httpService.httpPut($scope.url.booking, updateForm, 'UPDATE_Booking');
		console.log("reached here");
	}
	$scope.$on('UPDATE_booking', function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.booking = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	})

	deleteBooking = function(){
		httpService.httpDelete($scope.url.booking, 'DELETE_Booking');
	}

	$scope.$on("DELETE_Booking", function(event, data){
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
    .textContent('Please key in the IID of the booking to delete')
    .placeholder('bookingId')
    .ariaLabel('integrate_id')
    .targetEvent(ev)
    .ok('Confirm')
    .cancel('Cancel');

    $scope.path = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/app/";
    $mdDialog.show(confirm).then(function(result) {
    	if (result == $scope.booking.bookingId) {
    		deleteBooking();    		
    		window.location.href = $scope.path + "index.html#/bookings";
    	} else {

    		$scope.status = 'Username Mismatch';
    	}
    	
    }, function() {
    	$scope.status = 'Action canceled';
    });
};
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

.controller("NewBookingCtrl", function($scope, $mdDialog, httpService, configuration){
	console.log("this is NewBookingCtrl");
	function getAccounts() {
		httpService.httpGet("http://test.popscoot.com/popscoot/service/accounts", 'GET_TACCOUNTS');
	}

	$scope.$on("GET_TACCOUNTS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.accounts = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
		
	});
	function getScooters() {
		httpService.httpGet("http://test.popscoot.com/popscoot/service/scooters", 'GET_TSCOOTERS');
	}

	$scope.$on("GET_TSCOOTERS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.scooters = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
		
	});

	getScooters();
	getAccounts();



	$scope.accDialog = function(ev) {
		$mdDialog.show({
			locals: {localAcc: $scope.accounts},
			controller: DialogController,
			templateUrl: 'templates/accountPicker.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
  })
		.then(function(answer) {
			$scope.accountId = answer.accountId;
		}, function() {
			$scope.status = 'You cancelled the dialog.';
		});
	};
	
	function DialogController($scope, $mdDialog, Upload, httpService, localAcc) {
		$scope.accounts = localAcc;

		$scope.itemsOrder = "active";
		$scope.reverse = true;
		$scope.order = function(){
			$scope.reverse = !$scope.reverse;
		}
		$scope.currentPageNumber = 1;
		$scope.itemsPerPage = 10;
		$scope.search;
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

		console.log($scope.accounts);
		
		//test end
		$scope.hide = function() {
			$mdDialog.hide();
		};

		$scope.cancel = function() {
			$mdDialog.cancel();
		};

		$scope.answer = function(answer) {
			$mdDialog.hide(answer);
		};
	}

	$scope.scoDialog = function(ev) {
		$mdDialog.show({
			locals: {localSco: $scope.scooters},
			controller: DialogController2,
			templateUrl: 'templates/scooterPicker.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
  })
		.then(function(answer) {
			$scope.scooterId = answer.scooterId;
		}, function() {
			$scope.status = 'You cancelled the dialog.';
		});
	};
	
	function DialogController2($scope, $mdDialog, Upload, httpService, localSco) {
		$scope.scooters = localSco;
		console.log($scope.scooters);

		$scope.itemsOrder = "active";
		$scope.reverse = true;
		$scope.order = function(){
			$scope.reverse = !$scope.reverse;
		}
		$scope.currentPageNumber = 1;
		$scope.itemsPerPage = 10;
		$scope.search;
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

		
		
		//test end
		$scope.hide = function() {
			$mdDialog.hide();
		};

		$scope.cancel = function() {
			$mdDialog.cancel();
		};

		$scope.answer = function(answer) {
			$mdDialog.hide(answer);
		};
	}
})
.filter('paginate', function(){
	return function(array, pageNumber, itemsPerPage){
		var begin = ((pageNumber - 1) * itemsPerPage);
		var end = begin + itemsPerPage;
		return array.slice(begin, end);
	};
})


angular.module('app.dashboard.ctrl', [])

.controller('DashboardCtrl', function() {
	console.log('this is DashboardCtrl')
})


angular.module('app.enquiry.ctrl', [])

.controller('EnquiryCtrl', function($location, $mdDialog, $scope, $routeParams, httpService) {
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
	$scope.path = "#/enquiries/";
	/*var path = $location.path();
	$scope.goPage = function(path){
		$location.path(path);
	}*/
	$scope.itemsOrder = "accountId";
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

.controller('HelpCtrl', function($scope,$mdDialog, $location, $routeParams, httpService) {
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

.controller('PaymentCtrl', function($scope,$mdDialog, $location, $routeParams, httpService) {
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

	$scope.updatePayment = function(){
		var updateForm = $scope.payment;
		httpService.httpPut($scope.url.payment, updateForm, 'UPDATE_Payment');
	}
	$scope.$on('UPDATE_Payment', function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.payment = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	})

	deletepayment = function(){
		httpService.httpDelete($scope.url.payment, 'DELETE_payment');
	}

	$scope.$on("DELETE_payment", function(event, data){
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
    .textContent('Please key in the Payment ID of the payment to delete')
    .placeholder('Payment ID')
    .ariaLabel('integrate_id')
    .targetEvent(ev)
    .ok('Confirm')
    .cancel('Cancel');

    $scope.path = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/app/";
    $mdDialog.show(confirm).then(function(result) {
    	if (result == $scope.payment.paymentId) {
    		deletepayment();    		
    		window.location.href = $scope.path + "index.html#/payments";
    	} else {

    		$scope.status = 'Username Mismatch';
    	}
    	
    }, function() {
    	$scope.status = 'Action canceled';
    });
};

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
.controller('NewPaymentCtrl', function($scope, httpService, $mdDialog){
	console.log("this is NewPaymentCtrl");
	function getAccounts() {
		httpService.httpGet("http://test.popscoot.com/popscoot/service/accounts", 'GET_BACCOUNTS');
	}

	$scope.$on("GET_BACCOUNTS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.accounts = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}

	});
	getAccounts();

	$scope.accDialog = function(ev) {
		$mdDialog.show({
			locals: {localAcc: $scope.accounts},
			controller: DialogController,
			templateUrl: 'templates/accountPicker.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
  })
		.then(function(answer) {
			$scope.accountId = answer.accountId;
		}, function() {
			$scope.status = 'You cancelled the dialog.';
		});
	};

	function DialogController($scope, $mdDialog, Upload, httpService, localAcc) {
		$scope.accounts = localAcc;

		$scope.itemsOrder = "active";
		$scope.reverse = true;
		$scope.order = function(){
			$scope.reverse = !$scope.reverse;
		}
		$scope.currentPageNumber = 1;
		$scope.itemsPerPage = 10;
		$scope.search;
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

		console.log($scope.accounts);

		//test end
		$scope.hide = function() {
			$mdDialog.hide();
		};

		$scope.cancel = function() {
			$mdDialog.cancel();
		};

		$scope.answer = function(answer) {
			$mdDialog.hide(answer);
		};
	}
	$scope.payment = {
		cash: 39.0,
		deposit: 39.0
	}
	$scope.createPayment = function(){
		var createForm = $scope.payment;
		createForm.accountId = $scope.accountId;
		console.log(createForm);
		httpService.httpPost("http://test.popscoot.com/popscoot/service/payments", createForm, 'CREATE_PAYMENT');
	}
	$scope.$on("CREATE_PAYMENT", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.payment = data.data.data.data;		
			window.location.href = "#payments/" + $scope.payment.paymentId;
		} else {
			console.log(data.data.data.message);
		}
	})
	
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

.controller("NewPromotionCtrl", function($scope, httpService){
	console.log("this is NewPromotionCtrl");
	$scope.promotion;
	$scope.createPromotion = function(){
		var createForm = $scope.promotion;
		console.log(createForm);
		httpService.httpPost("http://test.popscoot.com/popscoot/service/promotions", createForm, 'CREATE_PROMOTION');
	}
	$scope.$on("CREATE_PROMOTION", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.promotion = data.data.data.data;		
			window.location.href = "#promotions/" + $scope.promotion.promotionId;
		} else {
			console.log(data.data.data.message);
		}
	})
})


angular.module('app.scooter.ctrl', [])

.controller('ScooterCtrl', function($mdDialog,$location, $scope, $routeParams, httpService, configuration) {
	console.log('this is ScooterCtrl')
	$scope.$emit('BC', [{
		name: "Scooters",
		url: "#/scooters"
	},
	{
		name: "Scooter"
	}]);
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

	$scope.updateScooter = function(){
		var updateForm = $scope.scooter;
		httpService.httpPut($scope.url.scooter, updateForm, 'UPDATE_Scooter');
	}
	$scope.$on('UPDATE_Scooter', function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.scooter = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	})

	deletescooter = function(){
		httpService.httpDelete($scope.url.scooter, 'DELETE_scooter');
	}

	$scope.$on("DELETE_scooter", function(event, data){
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
    .textContent('Please key in the IID of the scooter to delete')
    .placeholder('integrateId')
    .ariaLabel('integrate_id')
    .targetEvent(ev)
    .ok('Confirm')
    .cancel('Cancel');

    $scope.path = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/app/";
    $mdDialog.show(confirm).then(function(result) {
    	if (result == $scope.scooter.integrateId) {
    		deletescooter();    		
    		window.location.href = $scope.path + "index.html#/scooters";
    	} else {

    		$scope.status = 'Username Mismatch';
    	}
    	
    }, function() {
    	$scope.status = 'Action canceled';
    });
};

getScooter();
getBookings();
})


.controller('ScootersCtrl', function($mdMedia, $scope, $location, httpService) {
	console.log('this is ScootersCtrl');
	$scope.$emit('BC', [{
		name: "Scooters",
		url: "#/scooters"
	}]);
	$scope.path = "#/scooters/";
	/*var path = $location.path();
	$scope.goPage = function(path){
		$location.path(path);
	}*/
	
	$scope.itemsOrder = "active";
	$scope.reverse = true;
	$scope.order = function(){
		$scope.reverse = !$scope.reverse;
	}
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
	    //pagination start
	    $scope.itemsPerRow;
	    if ($mdMedia('gt-md')) {
	    	$scope.itemsPerRow = 3;
	    } else if ($mdMedia('gt-xs')) {
	    	$scope.itemsPerRow = 2;
	    } else {
	    	$scope.itemsPerRow = 1;
	    }
	    $scope.currentPageNumber = 1;
	    $scope.row = 4;
	    $scope.itemsPerPage = 10;

	    $scope.getNumberOfPages = function() {
	    	var count = $scope.scooters.length / $scope.itemsPerPage;
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
})
.controller('NewScooterCtrl', function($scope, configuration, httpService){
	console.log("this is NewScooterCtrl");
	$scope.$emit('BC', [{
		name: "Scooters",
		url: "#/scooters"
	},
	{
		name: "Create"
	}]);
	var domain = configuration.domain();
	$scope.url = {
		scooter: domain + "/service/scooters/"
	};
	console.log("this is NewscooterCtrl");
	$scope.scooter;
	$scope.createScooter = function(){
		var createForm = $scope.scooter;
		console.log(createForm);
		httpService.httpPost($scope.url.scooter, createForm, 'CREATE_Scooter');
	}
	$scope.$on("CREATE_Scooter", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.scooter = data.data.data.data;		
			window.location.href = "#scooters/" + $scope.scooter.scooterId
		} else {
			console.log(data.data.data.message);
		}
	})
})
.filter('paginate', function(){
	return function(array, pageNumber, itemsPerPage){
		var begin = ((pageNumber - 1) * itemsPerPage);
		var end = begin + itemsPerPage;
		return array.slice(begin, end);
	};
})





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
})
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
				localStorage.setItem("LoginId", data.data.data.data["accountId"]);
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