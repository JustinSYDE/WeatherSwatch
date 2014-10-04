//TEMPLATE OF THE MAIN CONTROLLER FOR MAIN TEMPLATE HTML
//CONTROLLER DEFINTIIONS SHOULD BE MINIMAL SPECIFYING WHICH CONTROLLER USES WHICH SERVICE, ETC.

define(["controllersFactory", 
	"services/tabService",
	"services/cityService",
	"services/colorSwatchService"], 

	function(controllersFactory) {
	"use strict";

	controllersFactory.controller('CopyCtrl', 
		['$scope', 
		'TabService',
		'$location',
		'CityService',
		'ColorSwatchService',

		function($scope, tabService, $location, cityService, colorSwatchService) {

			$scope.tabService = tabService;
			$scope.cityService = cityService;
			$scope.colorSwatchService = colorSwatchService;
	}]);
});