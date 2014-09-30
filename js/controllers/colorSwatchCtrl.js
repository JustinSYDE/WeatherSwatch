//TEMPLATE OF THE MAIN CONTROLLER FOR MAIN TEMPLATE HTML
//CONTROLLER DEFINTIIONS SHOULD BE MINIMAL SPECIFYING WHICH CONTROLLER USES WHICH SERVICE, ETC.

define(["controllersFactory", 
	"services/colorSwatchService", 
	"services/tabService", 
	'directives/directives'], 

	function(controllersFactory) {
	"use strict";

	controllersFactory.controller('ColorSwatchCtrl', 
		['$scope', 
		'ColorSwatchService', 
		'TabService',

		function($scope, colorSwatchService, tabService) {
			console.log("enter");

			$scope.colorSwatchService = colorSwatchService;
			$scope.seasons = colorSwatchService.seasons;
			$scope.tabService = tabService;
			$scope.cityOne = colorSwatchService.cityOne;
			$scope.cityTwo = colorSwatchService.cityTwo;
			$scope.cityThree = colorSwatchService.cityThree;
			$scope.weather = colorSwatchService.weather;

			$scope.colorSwatchService.generateRandomCities();
			$scope.colorSwatchService.myAjaxCheck();
	}]);
});