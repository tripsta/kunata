define([
	'backbone'
], function () {

	return Backbone.Model.extend({
		defaults: {
			id: null,
			name: '',
			squad: '',
			pbis: []
		}
	});
});
