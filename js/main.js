//MAIN JAVASCRIPT FILE WHERE THE COORDINATION OF THE MAIN CONTROLLERS, SERVICES AND DIRECTIVES ARE CONFIGURED
//THIS FILE SERVES AS A CONTROL PANEL FOR THE WEB APP
//THIS FILE IS THE FIRST JAVASCRIPT FILE THAT IS LOADED AND CONTROLS THE INITIALALIZATION FLOW OF THE REST OF THE WEB APP

(function() {

	'use strict';

	//CONFIGURE THE LIBRARIES TO BE USED 
	//ASSIGN NAME ALIAS FOR DIRECTORIES AND INDICATE THEIR DIRECTORIES
	require.config({
		baseUrl: 'js',
		paths: {
			'angular': 'libs/angular-1.2.24',
			'angularRoute': 'libs/angular-route-1.2.24',
			'bootstrap': 'libs/modernizr-2.6.2-respond-1.1.0.min'
			//'jquery': 'libs/jquery-1.11.0.min',
		},
		shim: {
			'angular': {
				exports: 'angular'
			},
			'angularRoute': {
				deps: ['angular']
			}
		}
	});

	//DEFINE THE MAIN MODULES TO BE LOADED 
	define('controllersFactory', ['angular'], function(angular) {
		return angular.module('app.controllers', []);
	});

	define('servicesFactory', ['angular'], function(angular) {
		return angular.module('app.services', []);
	});

	define('directivesFactory', ['angular'], function(angular) {
		return angular.module('app.directives', []);
	});

	//DEFINE THE MOTHER 'APP' MODULE WHICH REQUIRES ALL THE OTHER MAIN MODULES TO BE INITIALIZED WITH IT
	define('app', [
		'angular',
		'angularRoute',
		'servicesFactory',
		'controllersFactory',
		'directivesFactory'],
		function(angular) {
			return angular.module('app', ['app.services', 'app.controllers', 'app.directives', 'ngRoute']);
		}
	);

	//BOOTSTRAP ANGULARJS TO THE MOTHER 'APP'
	require(['app'], function(app) {
		require([
				'controllers/ColorSwatchCtrl',
			],
			function() {
				app.config(['$routeProvider', function($routeProvider) {
					$routeProvider.
						when('/', {templateUrl: 'templates/colorSwatch.html', controller: "ColorSwatchCtrl"}).
						otherwise({redirectTo: '/'});
				}]);

				angular.bootstrap(document, ['app']);
			}
		);
	});

})();