angular.module('POPSCOOT', ['ngMaterialDatePicker', 'dndLists', 'pascalprecht.translate','ngAvatar', 'ngRoute', 'ngMaterial', 'lfNgMdFileInput', 'ngFileUpload', 'ngImgCrop', 'app.service', 'app.root.ctrl', 'app.filters',  'app.account.ctrl', 'app.analytics.ctrl', 'app.bank.ctrl', 
	'app.booking.ctrl', 'app.dashboard.ctrl', 'app.enquiry.ctrl', 'app.help.ctrl', 'app.payment.ctrl', 'app.promotion.ctrl', 'app.scooter.ctrl', 'app.tracking.ctrl', 'app.accountPromo.ctrl'
	])

.run(function($rootScope, $location) {
	console.log("welcome to popscoot");
	
	var isAuthenticated = function(){
		if (localStorage.getItem("UI_SECRET") === null) {
			window.location.href = "auth.html";
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
		create: "",
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
		id: "id",
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
		noHelps: "There are no helps yet",
		//accounts
		account: "account",
		email: "email",
		username: "username",
		socialMedia: "social media",
		facebookId: "FacebookID",
		birthday: "birthday",
		shareLogs: "shareLogs",
		shareLog: "shareLog",
		shareLogId: "shareLogID",
		gateway: "gateway",
		createAccount: "Create New Account",
		basicInformation: "Basic Information",
		details: "details",
		pushTokens: "pushTokens",
		pushTokenId: "pushTokenId",
		token: "token",
		device: "device",
		status: "status",
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
		start: "start",
		end: "end",
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
		//transaction:
		transactionId: "transactionId",
		tamount: "amount",
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
		shareLogId: "转发编码",
		gateway: "平台",
		createAccount: "新增",		
		basicInformation: "基本信息",
		details: "详情",
		pushTokens: "推送码",
		pushTokenId: "推送码编号",
		token: "码",
		device: "设备",
		status: "状态",
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
		//转帐相关:
		transactionId: "转帐编码",
		tamount: "额度",
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
	$translateProvider.preferredLanguage('en');

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