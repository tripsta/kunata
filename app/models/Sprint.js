define([
	'backbone'
], function () {

	return Backbone.Model.extend({
		defaults: {
			id: null,
			name: '',
			squad: '',
			PBI: null
		},

		initialize: function (options) {
			console.log(this);

		},

		validate: function(attrs){
			// console.log(attrs);
			// if (!attrs || attrs.title === '' || attrs.description === '') {
			// 	return "The model must have a title and a description.";
			// }
		}

	});

});
