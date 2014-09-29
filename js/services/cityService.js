define(["servicesFactory"], function(servicesFactory) {

	servicesFactory.factory('CityService', function() {
		var cityService = {
			cityCollection: ['Toronto', 'Calgary', 'Vancouver', 'Hong Kong', 'London', 'Paris', 'New York City', 'San Francisco', 'Barcelona', 'Tokyo', 'Florence', 'Rome', 'New Orleans', 'Chicago', 'Montreal', 'Boston', 'Rio'],
			//cityOne: null, //Three cities for three tabs; first city is the initial tab (possibly current location?)
 			//cityTwo: null, //Other two cities to be displayed on the other two remaining tabs
			//cityThree: null,

			//Returns a random number between 0 and cityCollection.length
			generateRandomNum: function(){
				return Math.floor(Math.random() * (cityService.cityCollection.length));
			},

			//Returns a random city name from the cityCollection[]
			generateRandomCity: function(){
				return cityService.cityCollection[cityCollection.generateRandomNum()];
			},

			//Creates three new variables (cities) as part of cityService and ensures that each is initialized with a unique city
			generateRandomCities: function(){
				cityService.cityOne = cityService.generateRandomCity();
				
				do{
					cityService.cityTwo = cityService.generateRandomCity();
				}while(cityService.cityTwo === cityService.cityOne);

				do{
					cityService.cityThree = cityService.generateRandomCity();
				}while(cityService.cityThree === cityService.cityTwo);
			}
		};

		return cityService;
	});
});