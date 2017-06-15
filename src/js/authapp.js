angular.module('auth', ['ngRoute', 'ngMaterial', 'app.root.ctrl', 'app.filters',  'app.account.ctrl', 'app.analytics.ctrl', 'app.bank.ctrl', 'app.booking.ctrl', 'app.dashboard.ctrl', 'app.enquiry.ctrl', 'app.help.ctrl', 'app.payment.ctrl', 'app.promotion.ctrl', 'app.scooter.ctrl'
])

.run(function($rootScope) {
	console.log("welcome to popscoot");
})

.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix("");

	$routeProvider

	.when('/login', {
		templateUrl: "templates/login.html",
		controller: "LoginCtrl"
	})
	.when('/verificationCode', {
		templateUrl: "templates/verificationCode.html",
		controller: "VerificationCodeCtrl"
	})

	.otherwise({
		redirectTo: '/login'
	});
})

