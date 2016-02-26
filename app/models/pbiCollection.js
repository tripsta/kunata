define([
	'models/pbi',
	'models/fakeAdapter',
	'backbone'
], function (Pbi, FakeAdapter) {
	return Backbone.Collection.extend({
		model: Pbi,

		getAdapter: function (){
			return new FakeAdapter();
		},

		load: function (id) {
			productBacklog = this.getAdapter().getProductBacklog(id);
			console.table(productBacklog);
			this.reset(productBacklog);
		}
	});
});