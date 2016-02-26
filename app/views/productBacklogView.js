define([
	'text!templates/productBacklog.html',
	'backbone'
], function(productBacklogTemplate){
	return Backbone.View.extend({
		el: $('#productBacklog-div'),
		template: _.template(productBacklogTemplate),

		initialize: function() {
		},

		render: function() {
			this.$el.html(this.template({ models: this.model.toJSON()}));
			return this;
		}

	});
});