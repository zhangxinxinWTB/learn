var app = app || {};

app.Library = Backbone.Collection.extend({
	model: app.BookModel,
	url: '/api/books'
});