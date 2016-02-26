define([
	'asana',
	'text!config/asana.json',
	'backbone'
], function (Asana, ConfigData) {

	return Backbone.Model.extend({
		initialize: function(){
			this.tasks = null;
			this.accessToken = JSON.parse(ConfigData).accessToken;
		},

		getSprint: function (id) {
			throw "not implemented";
		},
		getProductBacklog: function (id, callback) {
			var client = Asana.Client.create().useAccessToken(this.accessToken),
				_this = this;

			client.tasks.findAll({
				project: id,
				workspace: 36912386315880
			}).then(function(collection){
				// _this.set('tasks', collection.data);
				console.table(collection.data);
				// console.table(_this.tasks);
				pbis = _this.convertTasksToPbis(collection.data);
				callback(pbis);
			});
			// console.table(this.get('tasks'));
			// productBacklog = this
			return null;
		},

		convertTasksToPbis: function(tasks) {
			pbis = [];
			for (var i = 0; i<tasks.length; i++) {
				pbi = { title : tasks[i].name};
				pbis.push(pbi);
			}
			console.table(pbis);
			return pbis;
		}
	});
});
