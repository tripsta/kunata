define([
	'text!templates/sprint.html',
	'backbone'
], function(sprintTemplate){
	return Backbone.View.extend({
		el: $('#sprint-div'),
		template: _.template(sprintTemplate),

		initialize: function() {
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));

			return this;
		}

	});
});