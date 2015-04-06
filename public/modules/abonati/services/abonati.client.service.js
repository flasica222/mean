'use strict';

//Abonati service used for communicating with the aobnati REST endpoints
angular.module('abonati').factory('Abonati', ['$resource',
	function($resource) {
		return $resource('abonati/:abonatiId', {
			abonatiId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);