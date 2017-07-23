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