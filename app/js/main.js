angular.module('POPSCOOT', ['ngRoute', 'ngMaterial', 'app.root.ctrl', 'app.filters',  'app.account.ctrl', 'app.analytics.ctrl', 'app.bank.ctrl', 'app.booking.ctrl', 'app.dashboard.ctrl', 'app.enquiry.ctrl', 'app.help.ctrl', 'app.payment.ctrl', 'app.promotion.ctrl', 'app.scooter.ctrl'
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
angular.module('app.root.ctrl', ['app.filters'])

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

angular.module('app.account.ctrl', ['app.service'])

.controller('AccountCtrl', function($routeParams, $scope, httpService) {
	console.log('this is AccountCtrl');
	$scope.paths = {
		booking: "#/bookings/0",
		promotion: "#/promotions/0",
		bank: "#/banks/0",
		enquiry: "#/enquiries/0"
	};
	$scope.account;
	$scope.url = "http://test.popscoot.com/popscoot/service/accounts/"+$routeParams.id;
	//console.log($scope.url);
	httpService.httpGet($scope.url, 'GET_ACCOUNT');
	

	$scope.$on("GET_ACCOUNT", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.account = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});
})

.controller('AccountsCtrl', function($scope, $location, httpService) {
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
		} else {
			console.log(data.data.data.message);
		}
	});
})


angular.module('app.analytics.ctrl', [])

.controller('AnalyticsCtrl', function() {
	console.log('this is AnalyticsCtrl')
})

angular.module('app.bank.ctrl', ['app.service'])

.controller('BankCtrl', function($scope, $routeParams, httpService) {
	console.log('this is BankCtrl')
	$scope.bank;
	$scope.url = "http://test.popscoot.com/popscoot/service/banks/"+$routeParams.id;
	httpService.httpGet($scope.url, "GET_BANK");
	$scope.$on("GET_BANK", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.bank = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});

})

.controller('BanksCtrl', function($scope, $location, httpService) {
	console.log('this is BanksCtrl');
	$scope.path = "#/banks/0";
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
		} else {
			console.log(data.data.data.message);
		}
	});
})


angular.module('app.booking.ctrl', ['app.service'])

.controller('BookingCtrl', function($scope, $routeParams, httpService) {
	console.log('this is BookingCtrl')
	$scope.booking;
	$scope.url = "http://test.popscoot.com/popscoot/service/bookings/"+$routeParams.id;
	//console.log($scope.url);
	httpService.httpGet($scope.url, 'GET_BOOKING');
	

	$scope.$on("GET_BOOKING", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.booking = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});

})

.controller('BookingsCtrl', function($scope, $location, httpService) {
	console.log('this is BookingsCtrl');
	$scope.path = "#/bookings/0";
	// var path = $location.path();
	// $scope.goPage = function(path){
	// 	$location.path(path);
	// }
	$scope.url = "http://test.popscoot.com/popscoot/service/bookings"
	$scope.bookings = [];

	httpService.httpGet($scope.url, 'GET_BOOKINGS');

	$scope.$on("GET_BOOKINGS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.bookings = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});
})


angular.module('app.dashboard.ctrl', [])

.controller('DashboardCtrl', function() {
	console.log('this is DashboardCtrl')
})


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


angular.module('app.help.ctrl', ['app.service'])

.controller('HelpCtrl', function($scope, $routeParams, httpService) {
	console.log('this is HelpCtrl');
	$scope.url = "http://test.popscoot.com/popscoot/service/"+ $routeParams.id;
	$scope.help;

	httpService.httpGet($scope.url, 'GET_HELPS');

	$scope.$on("GET_HELPS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.help = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});
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
		} else {
			console.log(data.data.data.message);
		}
	});
})


angular.module('app.payment.ctrl', ['app.service'])

.controller('PaymentCtrl', function($scope, $routeParams, httpService) {
	console.log('this is PaymentCtrl');
	$scope.url = "http://test.popscoot.com/popscoot/service/payments"+$routeParams.id;
	$scope.payment;

	httpService.httpGet($scope.url, 'GET_PAYMENT');

	$scope.$on("GET_PAYMENT", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.payment = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});
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
		} else {
			console.log(data.data.data.message);
		}
	});
})


angular.module('app.promotion.ctrl', ['app.service'])

.controller('PromotionCtrl', function($scope, $routeParams, httpService) {
	console.log('this is PromotionCtrl')
	$scope.promotion;
	$scope.url = "http://test.popscoot.com/popscoot/service/promotions/"+$routeParams.id;
	//console.log($scope.url);
	httpService.httpGet($scope.url, 'GET_promotion');
	

	$scope.$on("GET_promotion", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.promotion = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});
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
		} else {
			console.log(data.data.data.message);
		}
	});
})


angular.module('app.scooter.ctrl', ['app.service'])

.controller('ScooterCtrl', function($scope, $routeParams, httpService) {
	console.log('this is ScooterCtrl')
	$scope.scooter;
	$scope.url = "http://test.popscoot.com/popscoot/service/scooters/"+$routeParams.id;
	//console.log($scope.url);
	httpService.httpGet($scope.url, 'GET_SCOOTER');
	

	$scope.$on("GET_SCOOTER", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.scooter = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});
})


.controller('ScootersCtrl', function($scope, $location, httpService) {
	console.log('this is ScootersCtrl');
	$scope.path = "#/scooters/0";
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
		} else {
			console.log(data.data.data.message);
		}
	});
})


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
});


	
	
	
	

angular.module('app.service', [])

 .factory('httpService', function($rootScope, $http){
    return{
        httpGet: function(url, listenerId){
            url += "?_=" + new Date().getTime();
            $http.get(url, {
                headers: {
                    "Auth-Secret": '_1em51i6803tmf21496915286236l24i5gl3nhgd5tit'
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

	var secret = '_1em51i6803tmf21496915286236l24i5gl3nhgd5tit'
	app.setSecret = function(secret) {
		localStorage.setItem("UI_SECRET", secret);
	};

	app.getSecret = function() {
		console.log(secret)
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
	scooter: "scooter"
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