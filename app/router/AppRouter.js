define([
	'models/Sprint',
	'text!fixtures/sprint.get/response.json',
	'backbone'
], function(SprintModel, data) {

	return Backbone.Router.extend({
		routes: {
			'': 'loadSprint'
		},

		initialize: function() {
			console.log(data);
			this.sprint = new SprintModel(JSON.parse(data));
		},

		getSprint: function () {
		}

	});

});
