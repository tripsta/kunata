define([
	'models/sprintCollection',
	'backbone'
], function(sprintCollection) {

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
			console.log(this.sprint);
		}

	});

});
