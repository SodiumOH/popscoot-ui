angular.module('POPSCOOT', ['dndLists', 'pascalprecht.translate','ngAvatar', 'ngRoute', 'ngMaterial', 'lfNgMdFileInput', 'ngFileUpload', 'ngImgCrop', 'app.service', 'app.root.ctrl', 'app.filters',  'app.account.ctrl', 'app.analytics.ctrl', 'app.bank.ctrl', 
	'app.booking.ctrl', 'app.dashboard.ctrl', 'app.enquiry.ctrl', 'app.help.ctrl', 'app.payment.ctrl', 'app.promotion.ctrl', 'app.scooter.ctrl', 'app.tracking.ctrl', 'app.accountPromo.ctrl'
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
.config(function ($translateProvider) {
	$translateProvider.fallbackLanguage('en');
	$translateProvider.registerAvailableLanguageKeys(['en', 'ch'], {
		'en_*': 'en',
		'ch_*': 'ch'

	})

	$translateProvider.translations('en', {
		dashboard: "DASHBOARD",
		splash: "SPLASH",
		accounts: "ACCOUNTS",
		analytics: "ANALYTICS",
		banks: "banks",
		bookings: "BOOKINGS",
		enquiries: "ENQUIRIES",
		helps: "helps",
		payments: "payments",
		promotions: "promotions",
		scooters: "SCOOTERS",
		finance: "FINANCE",
		miscellaneous: "MISCELLANEOUS",
		Home: "Home",
		//order
		latest: "Latest",
		active: "Active",
		//general functions:
		itemsPerPage: "Items Per Page",
		orderBy: "Order By",
		search: "Search",
		create: "Create New",
		//general edition
		activated: "activated",
		deactivated: "deactivated",
		update: "update",
		delete: "delete",	
		pageUp: "prev",
		pageDown: "next",
		//general information
		by: "by",	
		date: "date",
		//not exist...
		noAccounts: "There are no accounts yet",
		noBookings: "There are no bookings yet",
		noBanks: "There are no banks yet",
		noEnquiries: "There are no enquiries yet",
		noPayments: "There are no payments yet",
		noTransactions: "There are no transactions yet",
		noShareLogs: "There are no shareLogs yet",
		noPushTokens: "There are no push tokens yet",
		noPromotions: "There are no promotions yet",
		//accounts
		account: "account",
		email: "email",
		username: "username",
		socialMedia: "social media",
		facebookId: "FacebookID",
		birthday: "birthday",
		createAccount: "Create New Account",
		basicInformation: "Basic Information",
		details: "details",
		pushTokens: "pushTokens",
		//scooters
		scooter: "scooter",
		scooterId: "Scooter ID",
		battery: "battery remaining",
		integrateId: "Integrate ID",
		name: "name",
		model: "model",
		tracking: "tracking",
		createScooter: "Create New Scooter",
		//booking
		booking: "booking",
		bookingId: "booking ID",
		startTime: "start time",
		endTime: "end time",
		destination: "destination",
		bookingBy : "booking by",
		outsetlockId: "outsetlock ID",
		destinationlockId : "destinationlock ID",
		remarks : "remarks",
		price: "price",
		createBooking: "create new booking",
		//enquiry
		enquiry: "enquiry",
		enquiryId: "enquiry ID",
		comment: "comment",
		//bank
		bank: "bank",
		bankId: "bank ID",
		deposit: "deposit",
		stamps: "stamps",
		cash: "cash",
		createBank: "create new bank",
		//payment
		payment: "payment",
		paymentId: "payment ID",
		method: "method",
		credential1: "credential1",
		credential2: "credential2",
		credential3: "credential3",
		transactions: "transactions",
		transaction: "transaction",
		createPayment: "create new payment",
		//promotion
		promotion: "promotion",
		promotionId: "promotion ID",
		description: "description",
		amount: "amount",
		createPromotion: "create new promotion",
		promotionName: "promotion name",
		//help
		help: "help",
		helpId: "help ID",
		order: "order",
		createHelp: "create new help",
		content: "content",
		title: "title"
});
	$translateProvider.translations('ch', {
		dashboard: "控制台",
		splash: "启动页",
		accounts: "用户",
		analytics: "统计信息",
		banks: "账户",
		bookings: "订单",
		enquiries: "用户询问",
		helps: "帮助",
		payments: "支付",
		promotions: "优惠",
		scooters: "踏板车",
		finance: "财务",
		miscellaneous: "其他",
		Home: "首页",
		//排序
		latest: "最新",
		active: "激活",
		//基本功能:
		itemsPerPage: "每页数量",
		orderBy: "排序",
		search: "检索",
		create: "新增",
		//基本编辑：
		activated: "已激活",
		deactivated: "未激活",
		update: "更新",
		delete: "删除",	
		pageUp: "上一页",
		pageDown: "下一页",
		//基本信息：
		by: "属于",	
		date: "日期",
		//不存在
		noAccounts: "没有用户",
		noBookings: "没有预定",
		noBanks: "没有户头",
		noEnquiries: "没有问询",
		noPayments: "没有支付",
		noTransactions: "没有转账",
		noShareLogs: "没有社交转发",
		noPushTokens: "没有推送码",
		noPromotions: "没有促销活动",
		//账户相关
		account: "账户",
		email: "电邮",
		username: "用户名",
		socialMedia: "社交网路",
		facebookId: "脸书账号",
		birthday: "生日",
		shareLogs: "社交转发",
		shareLog: "社交转发",
		createAccount: "新增",		
		basicInformation: "基本信息",
		details: "详情",
		pushTokens: "推送码",
		//踏板车相关
		scooter: "踏板车",
		scooterId: "踏板车编码",
		battery: "剩余电量",
		integrateId: "集成编码",
		name: "名字",
		model: "型号",
		tracking: "位置信息",
		createScooter: "新增",
		//预定相关
		booking: "预定",
		bookingId: "预定编码",
		startTime: "开始时间",
		endTime: "结束时间",
		destination: "目的地",
		bookingBy : "预定人",
		outsetlockId: "起始锁",
		destinationlockId : "终点锁",
		remarks : "备注",
		price: "价格",
		createBooking: "新增",
		//问询相关
		enquiry: "问询",
		enquiryId: "问询编码",
		comment: "评论",
		//户头相关
		bank: "户头",
		bankId: "户头编码",
		deposit: "定金",
		stamps: "印章",
		cash: "余额",
		transactions: "转帐",
		transaction: "转帐",
		createBank: "新增",
		//支付相关
		payment: "支付",
		paymentId: "支付编码",
		method: "方式",
		credential1: "支付信息1",
		credential2: "支付信息2",
		credential3: "支付信息3",
		createPayment: "新增",
		//促销活动相关
		promotion: "促销活动",
		promotionId: "活动编码",
		description: "描述",
		amount: "优惠额度",
		createPromotion: "新增",
		promotionName: "活动名称",
		//帮助也页相关
		help: "帮助页",
		helpId: "帮助页编码",
		order: "顺序",
		createHelp: "新增",
		content: "内容",
		title: "标题"

	});
	$translateProvider.useSanitizeValueStrategy('escape');
	$translateProvider.preferredLanguage('ch');

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
	.when('/tracking/:id', {
		templateUrl: "templates/tracking.html",
		controller: "TrackingCtrl"
	})
	
	.when('/new/account', {
		templateUrl: "templates/accountnew.html",
		controller: "NewAccountCtrl"
	})
	.when('/new/bank', {
		templateUrl: "templates/banknew.html",
		controller: "NewBankCtrl"
	})
	.when('/new/bank/:id', {
		templateUrl: "templates/banknew.html",
		controller: "NewBankCtrl"
	})
	.when('/new/booking', {
		templateUrl: "templates/bookingnew.html",
		controller: "NewBookingCtrl"
	})
	.when('/new/booking/acc:aid', {
		templateUrl: "templates/bookingnew.html",
		controller: "NewBookingCtrl"
	})
	.when('/new/booking/sco:sid', {
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
	.when('/new/payment/:id', {
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

.controller('RootCtrl', function(configuration, httpService, $rootScope, $scope, $location, $mdDialog, $route, $mdSidenav, $window, $translate) {
	$scope.breadcrumbs = [];
	$scope.$on('BC', function(evt, data){
		$scope.breadcrumbs.push(data);
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
				$scope.$emit("GETFINISHED");
			} else {
				console.log(data.data.data.message);
				$scope.$emit("GETFINISHED");
			}
		});
	}

	$scope.changeLanguage = function(key){
		$translate.use(key);
		console.log("changeLanguage");
	}


	$scope.language = LANG_CH;
	$scope.setCH = function(){		
		$scope.language = LANG_CH;
	}
	$scope.setEN = function(){		
		$scope.language = LANG_EN;
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
			icon: "fa fa-bicycle"
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
		},{
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

.controller('AccountCtrl', function($timeout, $mdDialog, $location, $routeParams, $scope, httpService, configuration, $mdToast) {
	console.log('this is AccountCtrl');

	$scope.search;
	$scope.path = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/app/";	
	var accountId = $routeParams.id;
	$scope.$emit('BC', 
	{
		name: "Account",
		url: "accounts/"+accountId
	});

	$scope.isEdit = false;
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
			$scope.apromotions = data.data.data.data.availablePromotions;
			$scope.$emit("GETFINISHED");
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


	//fileUpload without dialog
	$scope.$watch('files', function () {
		$scope.upload($scope.files);
	});
	$scope.$watch('file', function () {
		if ($scope.file != null) {
			$scope.files = [$scope.file]; 
		}
	});

	var mediaId = $scope.account.mediaId;
	$scope.uploadImage = false;
	$scope.uploadPrompt = function(){
		$scope.uploadImage = !$scope.uploadImage;
	}
	$scope.preview = false;
	$scope.upload = function (files) {
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
				httpService.httpPost("http://test.popscoot.com/popscoot/service/file/upload/", uploadForm, 'UPLOAD_IMAGE');
				$scope.uploadStatus = "Uploading...";
				$scope.$on("UPLOAD_IMAGE", function(event, data){
					if(data.data.data.status == 1) {
						console.log(data.data.data.data);
						$scope.media = data.data.data.data[0].data;
						$scope.uploadStatus = "Success";
						$scope.preview = true;
						mediaId = $scope.media.mediaId;
						$mdToast.show(
							$mdToast.simple()
							.textContent("Click on update button to update")
							.hideDelay(3000)
							.parent("#accountPage")
							.position("top right")
							);
					} else {
						console.log(data.data.data.message);
						$scope.uploadStatus = "Failed..."+data.data.data.message;

					}
				});
			};
			
			
		}
	};
	

	$scope.promoDialog = function(even) {
		
		
		$mdDialog.show({
			locals: {localPro: $scope.apromotions},
			controller: DialogController1,
			templateUrl: 'templates/promotionPicker.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: even,
			clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
  })
		.then(function(answer) {
			updateForm = {
				accountId: $scope.account.accountId,
				promotionId: answer.promotionId
			}
			console.log(updateForm);
			httpService.httpPost("http://test.popscoot.com/popscoot/api/promotion/apply", updateForm ,'APPLY_PROMOTION');
			$scope.$on("APPLY_PROMOTION", function(event, data){
				console.log(data);
				if(data.status == 1) {
					console.log(data.data.data);
					$scope.promotions.push(answer);
					getPromotions();

				} else {
					console.log(data.data.message);

				}
			})
		}, function() {
			$scope.status = 'You cancelled the dialog.';
		});
	};
	
	function DialogController1($scope, $mdDialog, Upload, httpService, localPro) {
		$scope.promotions = localPro;
		console.log("bitch");
		console.log($scope.promotions);

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


	$scope.updateAccount = function(){
		var updateForm = {
			accountId: $scope.init_form.accountId,
			birthday: moment($scope.account.birthday).format("YYYY-MM-DDTHH:MM:SSZ"),
			mediaId: mediaId
		}
		console.log(updateForm);
		httpService.httpPut($scope.url.account, updateForm, 'UPDATE_ACCOUNT');
	}
	$scope.$on('UPDATE_ACCOUNT', function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.account = data.data.data.data;
			$scope.uploadImage = false;
			$mdToast.show(
				$mdToast.simple()
				.textContent("Update Success")
				.hideDelay(3000)
				.parent("#accountPage")
				.position("top right")
				);
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
			return 'activated'
		} else {
			return 'deactivated'
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
    		window.location.href = $scope.path + "index.html#/accounts";
    		$mdToast.show(
				$mdToast.simple()
				.textContent("Success")
				.hideDelay(3000)
				.position("top right")
				);
		} else {
			console.log(data.data.data.message);
		}
	});



	//upload with dialog
	var updateUrl = $scope.url.account;
	$scope.customFullscreen = false;
	$scope.uploadDialog = function(ev) {
		$mdDialog.show({
			locals:{updateUrl: updateUrl,
				accountId: accountId,
				getAccount: getAccount},
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
	
	function DialogController($scope, $mdDialog, Upload, httpService, updateUrl, accountId, getAccount) {
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
				mediaId: $scope.media.mediaId
			}
			console.log(updateForm);
			httpService.httpPut(updateUrl, updateForm, 'UPDATE_IMAGE');
		}
		$scope.$on('UPDATE_IMAGE', function(event, data){
			if(data.data.data.status == 1) {
				console.log(data.data.data.data);
				$scope.account = data.data.data.data;
				$mdDialog.hide();
				getAccount();
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

.controller('AccountsCtrl', function($mdMedia, $scope, $location, httpService, $timeout) {
	console.log('this is AccountsCtrl');
	$scope.$emit('BC', {
		name: "Accounts",
		url: "accounts"
	});
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
			$scope.$emit("GETFINISHED")
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
    	if(($scope.accounts.length % $scope.itemsPerPage) > 0) count++;
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
	$scope.$emit('BC', {
		name: "Create Account",
		url: "/new/account"
	})
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
angular.module('app.analytics.ctrl', [])

.controller('AnalyticsCtrl', function() {
	console.log('this is AnalyticsCtrl')
	$scope.$emit("GETFINISHED");
})

angular.module('app.bank.ctrl', [])

.controller('BankCtrl', function($scope,$mdDialog,$location, $routeParams, httpService) {
	console.log('this is BankCtrl')
	$scope.$emit('BC', {
		name: "Bank",
		url: "banks/"+$routeParams.id
	})
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
	$scope.$emit('BC', {
		name: "Banks",
		url: "banks"
	})
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

	$scope.currentPageNumber = 1;
	$scope.itemsPerPage = 10;
	$scope.search;
	$scope.getNumberOfPages = function() {
		var count = $scope.banks.length / $scope.itemsPerPage;
		if(($scope.banks.length % $scope.itemsPerPage) > 0) count++;
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
.controller("NewBankCtrl", function($scope, $routeParams, $mdDialog, httpService){
	console.log("this is NewBankCtrl");
	$scope.$emit('BC', {
		name: "Create Banks",
		url: "new/bank"
	})
	function getAccounts() {
		httpService.httpGet("http://test.popscoot.com/popscoot/service/accounts", 'GET_BACCOUNTS');
	}

	$scope.$on("GET_BACCOUNTS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.accounts = data.data.data.data;
			$scope.$emit("GETFINISHED");
		} else {
			console.log(data.data.data.message);
			$scope.$emit("GETFINISHED");
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
			var count = $scope.banks.length / $scope.itemsPerPage;
			if(($scope.banks.length % $scope.itemsPerPage) > 0) count++;
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
	$scope.accountId = $routeParams.id;
	$scope.createBank = function(){
		var createForm = $scope.bank;
		createForm.accountId = parseInt($scope.accountId);
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
	$scope.$emit('BC', {
		name: "Booking",
		url: "bookings/"+$routeParams.id
	})
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
	$scope.$emit('BC', {
		name: "Bookings",
		url: "bookings"
	})
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

.controller("NewBookingCtrl", function($scope, $routeParams, $mdDialog, httpService, configuration){
	console.log("this is NewBookingCtrl");
	$scope.$emit('BC', {
		name: "Create Bookings",
		url: "new/booking"
	})
	$scope.booking = {
		startDate: moment().toDate(),
		endDate: moment().toDate()
	}
	$scope.createBooking = function(){
		httpService.httpPost
	}

	function getAccounts() {
		httpService.httpGet("http://test.popscoot.com/popscoot/service/accounts", 'GET_TACCOUNTS');
	}

	$scope.$on("GET_TACCOUNTS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.accounts = data.data.data.data;
			$scope.$emit("GETFINISHED");
		} else {
			console.log(data.data.data.message);
			$scope.$emit("GETFINISHED");
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

	$scope.booking.accountId = $routeParams.aid;
	$scope.booking.scooterId = $routeParams.sid;

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
			$scope.booking.accountId = answer.accountId;
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

	$scope.scoDialog = function(eve) {
		$mdDialog.show({
			locals: {localSco: $scope.scooters},
			controller: DialogController2,
			templateUrl: 'templates/scooterPicker.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: eve,
			clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
  })
		.then(function(answer) {
			$scope.booking.scooterId = answer.scooterId;
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


	$scope.createBooking = function(){
		var create = $scope.booking;
		create.startDate = moment($scope.booking.startDate).format("YYYY-MM-DDTHH:MM:SS+HHmm");
		create.endDate = moment($scope.booking.endDate).format("YYYY-MM-DDTHH:MM:SS+HHmm");
		console.log(create);
		httpService.httpPost("http://test.popscoot.com/popscoot/service/bookings", create, "CREATE_BOOKING");
	}
	$scope.$on("CREATE_BOOKING", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);	
			window.location.href = "#bookings/" + $scope.booking.bookingId
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


angular.module('app.dashboard.ctrl', [])

.controller('DashboardCtrl', function($scope, $sce) {
	console.log('this is DashboardCtrl');
	$scope.loadingIframe = true;
	$scope.mapSource = $sce.trustAsResourceUrl("http://test.popscoot.com/gps/map");
	window.uploadDone = function(){
		console.log(666);
		$scope.loadingIframe = false;
	}
})


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
angular.module('app.help.ctrl', [])

.controller('HelpCtrl', function($scope,$mdDialog, $location, $routeParams, httpService) {
	console.log('this is HelpCtrl');
	$scope.$emit('BC', {
		name: "Help",
		url: "helps/"+$routeParams.id
	})
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
				httpService.httpPost("http://test.popscoot.com/popscoot/service/file/upload/", uploadForm, 'UPLOAD_IMAGE');
				$scope.uploadStatus = "Uploading...";
				$scope.$on("UPLOAD_IMAGE", function(event, data){
					if(data.data.data.status == 1) {
						console.log(data.data.data.data);
						$scope.media = data.data.data.data[0].data;
						$scope.uploadStatus = "Success";
						mediaId = $scope.media.mediaId;
					} else {
						console.log(data.data.data.message);
						$scope.uploadStatus = "Failed..."+data.data.data.message;

					}
				});
			};
			
			
		}
	};



	$scope.updateHelp = function(){
		var updateForm = $scope.help;
		updateForm.mediaId = mediaId;
		httpService.httpPut($scope.url.help, updateForm, 'UPDATE_Help');
	}
	$scope.$on('UPDATE_Help', function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.help = data.data.data.data;
			$scope.uploadImage = false;
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
	$scope.$emit('BC', {
		name: "Helps",
		url: "helps"
	});
	$scope.path = "#/helps/";
	/*var path = $location.path();
	$scope.goPage = function(path){
		$location.path(path);
	}*/
	$scope.url = "http://test.popscoot.com/popscoot/service/helps"

	$scope.itemsOrder = "order";
	$scope.reverse = true;
	$scope.order = function(){
		$scope.reverse = !$scope.reverse;
	}	

	$scope.arrangeB = false;
	$scope.arrange = function(){
		$scope.arrangeB = !$scope.arrangeB;
	}

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


	//drag and drop arrage
	$scope.dragoverCallback = function(index, external, type, callback) {
		$scope.logListEvent('dragged over', index, external, type);
        // Invoke callback to origin for container types.
        if (type == 'container' && !external) {
        	console.log('Container being dragged contains ' + callback() + ' items');
        }
        return index < 10; // Disallow dropping in the third row.
    };

    $scope.dropCallback = function(index, item, external, type) {
    	$scope.logListEvent('dropped at', index, external, type);

    	/*var tempIndex = 0
    	$scope.helps.forEach(function(help){
    		if(item.helpId === help.helpId){
    			$scope.toRemove = tempIndex;
    		}
    		tempIndex++;
    	})
    	$scope.helps.splice(tempIndex, 1);*/

    	$scope.helps.splice(index, 0, item);
        // Return false here to cancel drop. Return true if you insert the item yourself.
        $scope.helpOrders = [];
        $scope.helps.forEach(function(help){
        	$scope.helpOrders.push(help.helpId);
        })
        var orders = {
        	orders:  $scope.helpOrders
        }
        console.log("hihihihi");
        console.log(orders);
        httpService.httpPut("http://test.popscoot.com/popscoot/service/helps", orders, "UPDATE_ORDERS");
        $scope.$on("UPDATE_ORDERS", function(eve, data){
        	if(data.data.data.status == 1) {
        		console.log(data.data.data.data);
        		$scope.updatedHelps = data.data.data.data;
        	} else {
        		console.log(data.data.data.message);
        	}
        })


    };

    $scope.doneShifting = function(){
    	$scope.arrangeB = !$scope.arrangeB;
    	$scope.helps = $scope.updatedHelps;
    }

    $scope.logEvent = function(message) {
    	console.log(message);
    };

    $scope.logListEvent = function(action, index, external, type) {
    	var message = external ? 'External ' : '';
    	message += type + ' element was ' + action + ' position ' + index;
    	console.log(message);
    };

    // Initialize model
    $scope.model = [[], []];
    var id = 10;
    angular.forEach(['all', 'move', 'copy', 'link', 'copyLink', 'copyMove'], function(effect, i) {
    	var container = {items: [], effectAllowed: effect};
    	for (var k = 0; k < 7; ++k) {
    		container.items.push({label: effect + ' ' + id++, effectAllowed: effect});
    	}
    	$scope.model[i % $scope.model.length].push(container);
    });

    $scope.$watch('model', function(model) {
    	$scope.modelAsJson = angular.toJson(model, true);
    }, true);

})
.controller("NewHelpCtrl", function($scope, httpService){
	console.log("this is NewHelpCtrl");
	$scope.$emit('BC', {
		name: "Create Helps",
		url: "new/help"
	})
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


angular.module('app.payment.ctrl', [])

.controller('PaymentCtrl', function($scope,$mdDialog, $location, $routeParams, httpService) {
	console.log('this is PaymentCtrl');
	$scope.url = {
		payment: "http://test.popscoot.com/popscoot/service/payments/"+$routeParams.id,
		transactions: "http://test.popscoot.com/popscoot/service/payments/"+$routeParams.id+"/transactions"
	};
	$scope.$emit('BC', 
	{
		name: "Payment",
		url: "payments/"+$routeParams.id
	});
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

	$scope.$emit('BC', 
	{
		name: "Payments",
		url: "payments"
	});
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
	$scope.$emit('BC', 
	{
		name: "Create Payment",
		url: "new/payment"
	});

	$scope.$on("GET_BACCOUNTS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.accounts = data.data.data.data;
			$scope.$emit("GETFINISHED");
		} else {
			console.log(data.data.data.message);
			$scope.$emit("GETFINISHED");
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

.controller('PromotionCtrl', function($scope, $routeParams, httpService, $mdDialog, $location) {
	console.log('this is PromotionCtrl')
	$scope.$emit('BC', {
		name: "Promotion",
		url: "promotions"+$routeParams.id
	})
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
				httpService.httpPost("http://test.popscoot.com/popscoot/service/file/upload/", uploadForm, 'UPLOAD_IMAGE');
				$scope.uploadStatus = "Uploading...";
				$scope.$on("UPLOAD_IMAGE", function(event, data){
					if(data.data.data.status == 1) {
						console.log(data.data.data.data);
						$scope.media = data.data.data.data[0].data;
						$scope.uploadStatus = "Success";
						mediaId = $scope.media.mediaId;
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
		httpService.httpPut("http://test.popscoot.com/popscoot/service/promotions/"+$scope.promotion.promotionId, updateForm, 'UPDAT_PROMOTION');
	}
	$scope.$on('UPDAT_PROMOTION', function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.promotion = data.data.data.data;
			$scope.uploadImage = false;
		} else {
			console.log(data.data.data.message);
		}
	})

	var deletePromotion = function(){
		httpService.httpDelete("http://test.popscoot.com/popscoot/service/promotions/"+$scope.promotion.promotionId, 'DELETE_PROMOTION');
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
    		window.location.href = $scope.path + "index.html#/promotions";
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

.controller('PromotionsCtrl', function($scope, $location, httpService) {
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
	$scope.$emit('BC', {
		name: "Promotions",
		url: "new/promotion"
	})
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
.filter('paginate', function(){
	return function(array, pageNumber, itemsPerPage){
		var begin = ((pageNumber - 1) * itemsPerPage);
		var end = begin + itemsPerPage;
		return array.slice(begin, end);
	};
})

angular.module('app.scooter.ctrl', [])

.controller('ScooterCtrl', function($mdDialog,$location, $scope, $routeParams, httpService, configuration) {
	console.log('this is ScooterCtrl')
	$scope.$emit('BC', {
		name: "Scooter",
		url: "scooters/"+$routeParams.id
	});
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
				httpService.httpPost("http://test.popscoot.com/popscoot/service/file/upload/", uploadForm, 'UPLOAD_IMAGE');
				$scope.uploadStatus = "Uploading...";
				$scope.$on("UPLOAD_IMAGE", function(event, data){
					if(data.data.data.status == 1) {
						console.log(data.data.data.data);
						$scope.media = data.data.data.data[0].data;
						$scope.uploadStatus = "Success";
						mediaId = $scope.media.mediaId;
					} else {
						console.log(data.data.data.message);
						$scope.uploadStatus = "Failed..."+data.data.data.message;

					}
				});
			};
			
			
		}
	};

	$scope.updateScooter = function(){
		var updateForm = $scope.scooter;
		updateForm.mediaId = mediaId;
		console.log(updateForm);
		httpService.httpPut($scope.url.scooter, updateForm, 'UPDATE_Scooter');
	}
	$scope.$on('UPDATE_Scooter', function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.scooter = data.data.data.data;
			$scope.uploadImage = false;
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

	$scope.$emit('BC', {
		name: "Scooters",
		url: "scooters"
	});

	$scope.scooters = [];

	$scope.url = "http://test.popscoot.com/popscoot/service/scooters"
	/*var path = $location.path();
	$scope.goPage = function(path){
		$location.path(path);
	}*/
	
	$scope.itemsOrder = "name";
	$scope.reverse = false;
	$scope.order = function(){
		$scope.reverse = !$scope.reverse;
	}


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
	$scope.$emit('BC', {
		name: "Create Scooters",
		url: "new/scooter"
	});
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





angular.module('app.tracking.ctrl', [])
.controller('TrackingCtrl', function($scope, $sce, $routeParams, $sce){
	console.log("this is traking control");
	$scope.$emit("BC", {
		name: "Tracking",
		url: "tracking/"
	})
	
	console.log($scope.trackingId);
	$scope.param = {
		trackingSource: $sce.trustAsResourceUrl("http://test.popscoot.com/gps/pmds/" + $routeParams.id)
	}
	console.log($scope.trackingId);
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
})
.filter('rd', function(){
	return function(value, opt){
		switch(opt){
			case 0:
				return moment(value).format("YYYY MMM DD");
			case 1:
				return moment(value).format("YYYY MMM DD hh:mm");
			case 2:
				return moment(value).format("hh:mm");
			default:
				return moment(value).format("YYYY MMM DD");
		}
		return 
	}
})
.filter('paginate', function(){
	return function(array, pageNumber, itemsPerPage){
		var begin = ((pageNumber - 1) * itemsPerPage);
		var end = begin + itemsPerPage;
		return array.slice(begin, end);
	};
})



	
	
	
	

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
        showSimpleToast: function(textContent, position, hideDelay, theme) {

            $mdToast.show(
                $mdToast.simple()
                .textContent(textContent)
                .theme(theme)
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
	dashboard: "DASHBOARD",
	splash: "SPLASH",
	accounts: "ACCOUNTS",
	analytics: "ANALYTICS",
	banks: "banks",
	bookings: "BOOKINGS",
	enquiries: "ENQUIRIES",
	helps: "helps",
	payments: "payments",
	promotions: "promotions",
	scooters: "SCOOTERS",
	finance: "FINANCE",
	miscellaneous: "MISCELLANEOUS",
	//general functions:
	itemsPerPage: "Items Per Page",
	orderBy: "Order By",
	search: "search",
	//general edition
	activated: "activated",
	deactivated: "deactivated",
	update: "update",
	delete: "delete",	
	pageUp: "prev",
	pageDown: "next",
	//general information
	by: "by",	
	date: "date",
	//accounts
	account: "account",
	email: "email",
	username: "username",
	socialMedia: "social media",
	facebookId: "FacebookID",
	birthday: "birthday",
	createAccount: "Create New Account",
	//scooters
	scooter: "scooter",
	scooterId: "Scooter ID",
	battery: "battery remaining",
	integrateId: "Integrate ID",
	name: "name",
	model: "model",
	tracking: "tracking",
	createScooter: "Create New Scooter",
	//booking
	booking: "booking",
	bookingId: "booking ID",
	startTime: "start time",
	endTime: "end time",
	destination: "destination",
	bookingBy : "booking by",
	outsetlockId: "outsetlock ID",
	destinationlockId : "destinationlock ID",
	remarks : "remarks",
	createBooking: "create new booking",
	//enquiry
	enquiry: "enquiry",
	enquiryId: "enquiry ID",
	comment: "comment",
	//bank
	bank: "bank",
	bankId: "bank ID",
	deposit: "deposit",
	stamps: "stamps",
	cash: "cash",
	createBank: "create new bank",
	//payment
	payment: "payment",
	paymentId: "payment ID",
	method: "method",
	credential1: "credential1",
	credential2: "credential2",
	credential3: "credential3",
	createPayment: "create new payment",
	//promotion
	promotion: "promotion",
	promotionId: "promotion ID",
	description: "description",
	amount: "amount",
	createPromotion: "create new promotion",
	promotionName: "promotion name",
	//help
	help: "help",
	helpId: "help ID",
	order: "order",
	createHelp: "create new help",
	content: "content",
	title: "title"


	//
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
	scooter: "踏板车",
	finance: "财务",
	miscellaneous: "其他",

	//基本功能:
	itemsPerPage: "每页数量",
	orderBy: "排序",
	search: "检索",
	//基本编辑：
	activated: "已激活",
	deactivated: "未激活",
	update: "更新",
	delete: "删除",	
	pageUp: "上一页",
	pageDown: "下一页",
	//基本信息：
	by: "属于",	
	date: "日期",
	//账户相关
	account: "账户",
	email: "电邮",
	username: "用户名",
	socialMedia: "社交网路",
	facebookId: "脸书账号",
	birthday: "生日",
	createAccount: "新增",
	//踏板车相关
	scooter: "踏板车",
	scooterId: "踏板车编码",
	battery: "剩余电量",
	integrateId: "集成编码",
	name: "名字",
	model: "型号",
	tracking: "位置信息",
	createScooter: "新增",
	//预定相关
	booking: "预定",
	bookingId: "预定编码",
	startTime: "开始时间",
	endTime: "结束时间",
	destination: "目的地",
	bookingBy : "预定人",
	outsetlockId: "起始锁",
	destinationlockId : "终点锁",
	remarks : "备注",
	createBooking: "新增",
	//问询相关
	enquiry: "问询",
	enquiryId: "问询编码",
	comment: "评论",
	//户头相关
	bank: "户头",
	bankId: "户头编码",
	deposit: "定金",
	stamps: "印章",
	cash: "余额",
	createBank: "新增",
	//支付相关
	payment: "支付",
	paymentId: "支付编码",
	method: "方式",
	credential1: "支付信息1",
	credential2: "支付信息2",
	credential3: "支付信息3",
	createPayment: "新增",
	//促销活动相关
	promotion: "促销活动",
	promotionId: "活动编码",
	description: "描述",
	amount: "优惠额度",
	createPromotion: "新增",
	promotionName: "活动名称",
	//帮助也页相关
	help: "帮助页",
	helpId: "帮助页编码",
	order: "顺序",
	createHelp: "新增",
	content: "内容",
	title: "标题"

};
angular.module('auth', ['ngRoute', 'ngMaterial', 'app.service', 'app.forgetPassword.ctrl', 'app.changePassword.ctrl', 'app.register.ctrl', 'app.login.ctrl'])

.run(function($rootScope) {
	console.log("welcome to popscoot Auth");
})

.config(function($routeProvider, $locationProvider, $mdThemingProvider) {
	$mdThemingProvider.theme("error-toast");
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
	
	$scope.updatePWForm;
	$scope.updatePassword = function(){
		httpService.httpPut("http://test.popscoot.com/popscoot/service/auth", $scope.updatePWForm, "CHANGE_PASSOWRD");
	}
	$scope.$on('CHANGE_PASSOWRD', function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.message = "success!";
			window.location.href = "#/login"
		} else {
			console.log(data.data.data.message);
			$scope.display = data.data.data.message;
		}
	})
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
	$scope.success = false;
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
	var showActionToast = function(textContent, position, hideDelay, parent) {
		var toast = $mdToast.simple()
		.textContent('Email sent...')
		.hideDelay('hideDelay')
		.highlightAction(true)
      .highlightClass('md-accent')// Accent is used by default, this just demonstrates the usage.
      .position(position)
      .parent(parent);

      $mdToast.show(toast).then(function(response) {
      	if ( response == 'ok' ) {
      		directInbox(email);
      	}else{
      		$scope.success = true;
      	}
      });
    }
    $scope.$on("FORGETPASSWORD", function(event, data){
     console.log(data);
     if(data.data.data.status == 1) {
      /*if (data.data.data.data.type === "admin") {	*/			
       console.log(data.data.data.data);
       showActionToast('Activation email sent', 'top right', 3000);

			/*} else {
				alert("not admin");
			}*/
		} else {
			$mdToast.show(
        $mdToast.simple()
        .textContent(data.data.data.message)
        .hideDelay(30000)
        .position("top right")
        .parent("#authPage")
        .theme('error-toast')
        );

		}
	})

    $scope.updatePWForm;
    $scope.updatePassword = function(){
     console.log($scope.updatePWForm);
     httpService.httpPut("http://test.popscoot.com/popscoot/service/auth", $scope.updatePWForm, "CHANGE_PASSOWRD");
   }
   $scope.$on('CHANGE_PASSOWRD', function(event, data){
     if(data.data.data.status == 1) {
      console.log(data.data.data.data);
      $mdToast.showSimple("Update success").position("top right").hideDelay(500);
      $timeout(function(){
       window.location.href = "#/login"
     }, 500);  		
    } else {
      console.log(data.data.data.message);
      $scope.display = data.data.data.message;
    }
  })

   console.log("ForgetPasswordCtrl");
 })
angular.module('app.login.ctrl', [])
.controller('LoginCtrl', function($scope, httpService, $location, configuration, toastService, $mdToast){
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
			$mdToast.show(
				$mdToast.simple()
				.textContent(data.data.data.message)
				.hideDelay(30000)
				.position("top right")
				.parent("#authPage")
				.theme('error-toast')
				);
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
		.textContent('Activation email sent...')// Accent is used by default, this just demonstrates the usage.
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
			$mdToast.show(
				$mdToast.simple()
				.textContent(data.data.data.message)
				.hideDelay(30000)
				.position("top right")
				.parent("#authPage")
				.theme('error-toast')
				);
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