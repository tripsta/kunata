define([
	'backbone'
], function () {

	return Backbone.Model.extend({
		defaults: {
			id: null,
			status: null,
			title: '',
			bv: null,
			sp: null,
			squad: null,
			sprint: null,
			theme: null,
			epic: null
		},

		initialize: function (options) {
			console.log(this);
		}
	});

});
§