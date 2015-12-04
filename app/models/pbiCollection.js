define([
	'models/pbi',
	'backbone'
], function (pbi) {
	return Backbone.Collection.extend({
		model: pbi
	});
});