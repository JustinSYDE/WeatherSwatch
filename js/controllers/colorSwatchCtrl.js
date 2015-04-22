
//TEMPLATE OF THE MAIN CONTROLLER FOR MAIN TEMPLATE HTML
//CONTROLLER DEFINTIIONS SHOULD BE MINIMAL SPECIFYING WHICH CONTROLLER USES WHICH SERVICE, ETC.

define(["controllersFactory", 
	"services/colorSwatchService", 
	"services/tabService",
	"services/cityService", 
	"services/sidePanelService",
	'directives/colorSwatchDirective'], 

	function(controllersFactory) {
	"use strict";

	controllersFactory.controller('ColorSwatchCtrl', 
		['$scope', 
		'$timeout',
		'$location',
		'ColorSwatchService', 
		'TabService',
		'CityService',
		'SidePanelService',

		function($scope, $timeout, $location, colorSwatchService, tabService, cityService, sidePanelService) {

			$scope.colorSwatchService = colorSwatchService.init($scope);
			$scope.seasons = colorSwatchService.seasons;
			$scope.tabService = tabService;
			$scope.cityService = cityService;
			$scope.sidePanelService = sidePanelService;

			$scope.cityOne = colorSwatchService.cityOne;
			$scope.cityTwo = colorSwatchService.cityTwo; 
			$scope.cityThree = colorSwatchService.cityThree;
			$scope.weather = colorSwatchService.weather;

			$scope.colorSwatchService.generateRandomCities();
			$scope.colorSwatchService.myAjaxCheck($scope.cityService.generateRandomCity());

			$scope.$watchGroup(
				['colorSwatchService.cityOne',
			 'colorSwatchService.cityTwo', 
			 'colorSwatchService.cityThree',
			 'colorSwatchService.seasons',
			 'colorSwatchService.weather'], 

				 function(newValues, oldValues, scope){
					
						scope.cityOne = newValues[0];
						scope.cityTwo = newValues[1];
						scope.cityThree = newValues[2];
						scope.seasons = newValues[3];
						scope.weather = newValues[4];	
			});
	}]);
});