(function(){

	var app = angular.module('directives', []);

	app.directive('testDiv', function(){
		return{
			restrict: 'E',
			templateUrl: "partials/test-div.html"
		};
	});

	app.directive('copiedPage', function(){
		return{
			restrict: 'E',
			templateUrl: "partials/copied-page.html"
		};
	});

	app.directive('colorSwatch', function(){
		return{
			restrict: 'E',
			templateUrl: "partials/color-swatch.html"
		};
	});

	app.directive('navbar', function(){
		return{
			restrict: 'E',
			templateUrl: "partials/navbar.html"
		};
	})

})();
