define([
	'models/pbi',
	'models/fakeAdapter',
	'models/asanaAdapter',
	'backbone'
], function (Pbi, FakeAdapter, AsanaAdapter) {
	return Backbone.Collection.extend({
		model: Pbi,

		getAdapter: function (){
			return new AsanaAdapter();
		},

		load: function (id) {
			var _this = this;
			this.getAdapter().getProductBacklog(id, function(pbis){
				_this.reset(pbis);
			});
			console.log(this);
		}
	});
});