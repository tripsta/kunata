define([
	'models/sprintCollection',
	'views/sprintView',
	'backbone'
], function(sprintCollection, SprintView) {

	return Backbone.Router.extend({
		routes: {
			'': 'getSprint',
			'sprint/:id': 'getSprint'
		},

		initialize: function() {
			this.sprintCollection = new sprintCollection();
		},

		getSprint: function (id) {
			this.sprint = this.sprintCollection.get(id);
			this.sprintView = new SprintView({ model : this.sprint });
			this.sprintView.render();
		}
	});

});
