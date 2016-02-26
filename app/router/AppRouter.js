define([
	'models/sprintCollection',
	'views/sprintView',
	'backbone',
	'asana'
], function(sprintCollection, SprintView, Backbone, asana) {

	return Backbone.Router.extend({
		routes: {
			'': 'getSprint',
			'sprint/:id': 'getSprint'
		},

		initialize: function() {
			this.sprintCollection = new sprintCollection();
			var client = asana.Client.create().useAccessToken('my-token');
			console.log(client);
			client.users.me().then(function(me) {
			  console.log(me);
			});
			client.workspaces.findAll().then(function(collection){
				console.log(collection.data);
			});
			client.projects.findAll({
				workspace: 123
			}).then(function(collection){
				console.table(collection.data);
			});

			client.tasks.findAll({
				project: 123,
				workspace: 123
			}).then(function(collection){
				console.table(collection.data);
			});
		},

		getSprint: function (id) {
			this.sprint = this.sprintCollection.get(id);
			this.sprintView = new SprintView({ model : this.sprint });
			this.sprintView.render();
		}
	});

});