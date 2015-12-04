define([
	'text!fixtures/sprint.get/response.json',
	'models/sprint',
	'backbone'
], function (sprintData, Sprint) {

	return Backbone.Model.extend({

			get: function (id) {
			sprint = new Sprint(JSON.parse(sprintData).result);
			return sprint;
		}
	});
});
