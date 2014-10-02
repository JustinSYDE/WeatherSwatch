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
			console.log("colorSwatchCtrl enter");

			$scope.colorSwatchService = colorSwatchService.init($scope);
			$scope.seasons = colorSwatchService.seasons;
			$scope.tabService = tabService;
			$scope.cityOne = colorSwatchService.cityOne;
			$scope.cityTwo = colorSwatchService.cityTwo;
			$scope.cityThree = colorSwatchService.cityThree;
			$scope.weather = colorSwatchService.weather;
			$scope.colorSwatchService.generateRandomCities();
			$scope.colorSwatchService.myAjaxCheck('Toronto');

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
			//$scope.$watch('colorSwatchService.cityOne')
			//console.log("city is:" + $scope.cityOne);
	}]);
});