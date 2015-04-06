'use strict';

// Configuring the Abonati module
angular.module('abonati').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Abonati', 'abonati', 'dropdown', '/abonati(/create)?');
		Menus.addSubMenuItem('topbar', 'abonati', 'List Articles', 'abonati');
		Menus.addSubMenuItem('topbar', 'abonati', 'New Article', 'abonati/create');
	}
]);