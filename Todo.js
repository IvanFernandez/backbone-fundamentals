'use strict';
var Todo = Backbone.Model.extend({
	initialize: function() {
		console.log('This model has been initialized.');
		this.on('change:title', function(){
			console.log('- Values for this model have changed.');
		});
		this.on('invalid', function(model, error){
			console.log(error);
		});
	},
	defaults: {
		title: '',
		completed: false
	},
	validate: function(attrs) {
		var error = 'this is an error';
		if (typeof attrs.completed !== 'boolean') {
			return 'completed must be a boolean value';
		}
	}
});

var myTodo = new Todo({
	title: 'Check attributes property of the logged models in the console.'
});