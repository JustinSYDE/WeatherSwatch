//TEMPLATE OF THE MAIN CONTROLLER FOR MAIN TEMPLATE HTML
//CONTROLLER DEFINTIIONS SHOULD BE MINIMAL SPECIFYING WHICH CONTROLLER USES WHICH SERVICE, ETC.

define(["controllersFactory", 
	"services/tabService"], 

	function(controllersFactory) {
	"use strict";

	controllersFactory.controller('CopyCtrl', 
		['$scope', 
		'TabService',
		'$location',

		function($scope, tabService, $location) {

			$scope.tabService = tabService;
			
	}]);
});