//TEMPLATE OF THE MAIN CONTROLLER FOR MAIN TEMPLATE HTML
//CONTROLLER DEFINTIIONS SHOULD BE MINIMAL SPECIFYING WHICH CONTROLLER USES WHICH SERVICE, ETC.

define(["controllersFactory", "services/colorSwatchService", "services/tabService", 'directives/directives'], function(controllersFactory) {
	"use strict";

	controllersFactory.controller('ColorSwatchCtrl', ['$scope', 'ColorSwatchService', 'TabService',
		function($scope, colorSwatchService, tabService) {
			$scope.colorSwatchService = colorSwatchService;
			$scope.seasons = colorSwatchService.seasons;
			$scope.tabService = tabService;

			$scope.colorSwatchService.myAjaxCheck();
			/*$scope.$watch('colorSwatchService.seasons', function(newVal, oldVal, scope){
				if (newVal && newVal !== oldVal){
					scope.seasons = newVal;
				}
			});*/
			//document.getElementById("currentCity").click();	//Bad hack that reloads the page so that the color swatch will reload
	}]);
});