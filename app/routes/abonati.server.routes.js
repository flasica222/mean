'use strict';

/**
* Module dependencies.
*/
//var users = require('../../app/controllers/users.server.controller'),
//	articles = require('../../app/controllers/articles.server.controller'),
	var abonati= require('../../app/controllers/abonati.server.controller');

module.exports = function(app) {

    app.route('/abonati')
		.post(abonati.create);

//	app.route('/articles/:articleId')
//		.get(articles.read)
//		.put(users.requiresLogin, articles.hasAuthorization, articles.update)
//		.delete(users.requiresLogin, articles.hasAuthorization, articles.delete);
//
//	// Finish by binding the article middleware
//	app.param('articleId', articles.articleByID);
};
