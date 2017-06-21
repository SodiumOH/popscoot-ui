var DAO = (function() {
	var app = {};

	var secret = '_1em51i6803tmf21496915286236l24i5gl3nhgd5tit'
	app.setSecret = function(secret) {
		localStorage.setItem("UI_SECRET", secret);
	};

	app.getSecret = function() {
		
		return localStorage.getItem("UI_SECRET");
	};

	return app;
})();