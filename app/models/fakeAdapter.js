define([
	'text!fixtures/sprint.get/response.json',
	'text!fixtures/productbacklog.get/response.json',
	'models/sprint',
	'backbone'
], function (sprintData, productBacklogData, Sprint) {

	return Backbone.Model.extend({

		getSprint: function (id) {
			sprint = new Sprint(JSON.parse(sprintData).result);
			return sprint;
		},
		getProductBacklog: function (id, callback) {
			callback(JSON.parse(productBacklogData).result.PBI);
		}
	});
});
