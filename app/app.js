define([
	'router/AppRouter',
], function(AppRouter) {

	var initialize = function() {
		var appRouter = new AppRouter();
		Backbone.history.start();
	};

	return {
		init: initialize
	};

});
