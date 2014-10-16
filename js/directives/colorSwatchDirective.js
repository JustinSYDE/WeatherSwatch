//MAIN DIRECTIVE FOR MAIN TEMPLATE HTML

define(['directivesFactory'], function(directivesFactory){

	directivesFactory.directive('colorSwatch', function(){
		return{
			restrict: 'E',
			templateUrl: "templates/partials/color-swatch.html"
		};
	});

	directivesFactory.directive('navbar', function(){
		return{
			restrict: 'E',
			templateUrl: "templates/partials/navbar.html"
		};
	});

	directivesFactory.directive('sidePanel', function(){
		return{
			restrict: 'E',
			templateUrl: "templates/partials/side-panel.html"
		};
	});
});