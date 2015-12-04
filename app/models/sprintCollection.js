define([
	'models/pbi',
	'models/sprint',
	'models/fakeAdapter',
	'backbone'
], function (pbi, Sprint, fakeAdapter) {
	return Backbone.Collection.extend({
		model: Sprint,

		getAdapter: function (){
			return new fakeAdapter();
		},

		get: function (id) {
			sprint = this.getAdapter().get(id);
			return sprint;
		}
	});
});
