define([
	'models/sprintCollection',
	'models/pbiCollection',
	'views/sprintView',
	'views/productBacklogView',
	'backbone',
	'asana'
], function(sprintCollection, pbiCollection, SprintView, ProductBacklogView, Backbone, asana) {

	return Backbone.Router.extend({
		routes: {
			'': 'getSprint',
			'sprint/:id': 'getSprint',
			'product-backlog/:id': 'getProductBacklog'
		},

		initialize: function() {
			this.sprintCollection = new sprintCollection();
			this.pbiCollection = new pbiCollection();
		},

		getSprint: function (id) {
			this.sprint = this.sprintCollection.get(id);
			this.sprintView = new SprintView({ model : this.sprint });
			this.sprintView.render();
		},

		getProductBacklog: function (id) {
			this.pbiCollection.load(id);
			this.productBacklogView = new ProductBacklogView({ model : this.pbiCollection });
			this.productBacklogView.render();
		}
	});

});