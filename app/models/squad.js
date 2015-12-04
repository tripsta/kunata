define([
	'backbone'
], function () {

	return Backbone.Model.extend({
		defaults: {
			id: null,
			name: ''
		},

		initialize: function (options) {
			console.log(this);
		}
	});

});
