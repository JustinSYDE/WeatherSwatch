(function() {

	'use strict';

	//CONFIGURE THE LIBRARIES TO BE USED 
	//ASSIGN NAME ALIAS FOR DIRECTORIES AND INDICATE THEIR DIRECTORIES
	require.config({
		baseUrl: 'js',
		paths: {
			'angular': 'libs/angular-1.3.0.min',
			'angularRoute': 'libs/angular-route-min-1.2.24',
			'bootstrap': 'libs/modernizr-2.6.2-respond-1.1.0.min',
			'jquery': 'libs/jquery-1.11.2.min',
			'simpleWeather': 'libs/jquery.simpleWeather',
			'bootstrapJS': 'libs/bootstrap.min'
		},
		shim: {
			'angular': {
				exports: 'angular'
			},
			'angularRoute': {
				deps: ['angular']
			},
			'jquery': {
				exports: '$'
			},
			'simpleWeather': {
				deps: ['jquery']
			},
			'bootstrapJS':{
				deps: ['jquery']
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
	require(['app', 'jquery', 'simpleWeather', 'bootstrap', 'bootstrapJS'], function(app, jquery, simpleWeather, bootstrap, bootstrapJS) {
		require([
				'controllers/colorSwatchCtrl',
			],
			function() {
				app.config(['$routeProvider', function($routeProvider) {
					$routeProvider
						.when('/', {templateUrl: 'templates/colorSwatch.html', controller: "ColorSwatchCtrl"});
				}]);

				angular.bootstrap(document, ['app']);
			}
		);
	});

})();