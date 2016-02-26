define([
	'text!templates/productBacklog.html',
	'backbone'
], function(productBacklogTemplate){
	return Backbone.View.extend({
		el: $('#productBacklog-div'),
		template: _.template(productBacklogTemplate),

		initialize: function() {
			this.model.on('change reset add remove', this.render, this);
		},

		render: function() {
			this.$el.html(this.template({ models: this.model.toJSON()}));
			return this;
		}

	});
});