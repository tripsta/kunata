define([
	'backbone'
], function () {

	return Backbone.Model.extend({
		defaults: {
			id: null,
			name: '',
			squad: '',
			PBI: null
		},

		initialize: function (options) {
			console.log(this);
		}
	});

});
