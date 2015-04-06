'use strict';

// Setting up route
angular.module('abonati').config(['$stateProvider',
	function($stateProvider) {
		// Abonati state routing
		$stateProvider.
		state('listAbonati', {
			url: '/abonati',
			templateUrl: 'modules/abonati/views/list-abonat.client.view.html'
		}).
		state('createAbonat', {
			url: '/abonati/create',
			templateUrl: 'modules/abonati/views/create-abonat.client.view.html'
		}).
		state('viewAbonat', {
			url: '/abonati/:abonatId',
			templateUrl: 'modules/abonati/views/view-abonat.client.view.html'
		}).
		state('editAbonat', {
			url: '/abonati/:abonatId/edit',
			templateUrl: 'modules/abonati/views/edit-abonat.client.view.html'
		});
	}
]);