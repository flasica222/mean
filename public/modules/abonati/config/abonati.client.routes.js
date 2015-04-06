'use strict';

// Setting up route
angular.module('abonati').config(['$stateProvider',
	function($stateProvider) {
		// Abonati state routing
		$stateProvider.
		state('listAbonati', {
			url: '/abonati',
			templateUrl: 'modules/abonati/views/list-abonati.client.view.html'
		}).
		state('createAbonat', {
			url: '/Abonati/create',
			templateUrl: 'modules/abonati/views/create-abonati.client.view.html'
		}).
		state('viewAbonat', {
			url: '/abonati/:abonatId',
			templateUrl: 'modules/abonati/views/view-abonati.client.view.html'
		}).
		state('editAbonat', {
			url: '/abonati/:abonatId/edit',
			templateUrl: 'modules/abonati/views/edit-abonati.client.view.html'
		});
	}
]);