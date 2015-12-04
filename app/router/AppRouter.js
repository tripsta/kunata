define([
	'models/sprint',
	'text!fixtures/sprint.get/response.json',
	'backbone'
], function(SprintModel, data) {

	return Backbone.Router.extend({
		routes: {
			'': 'getSprint'
		},

		initialize: function() {
			console.log(data);
			this.sprint = new SprintModel(JSON.parse(data));
		},

		getSprint: function () {
		}

	});

});
