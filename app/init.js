requirejs.config({
	baseUrl: 'app',
	paths: {
		jquery: '../vendor/jquery/dist/jquery.min',
		underscore: '../vendor/underscore/underscore-min',
		backbone: '../vendor/backbone/backbone-min',
		text : "../vendor/text/text",
		asana : "https://github.com/Asana/node-asana/releases/download/v0.14.1/asana-min"
	},
	shim: {
		backbone: {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		},
		jquery: {
			exports: '$'
		},
		underscore: {
			exports: '_'
		}
	}
});

requirejs([
	'app'
], function(App) {
	App.init();
});
