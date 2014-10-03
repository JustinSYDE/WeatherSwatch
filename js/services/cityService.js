define(["servicesFactory"], function(servicesFactory) {

	servicesFactory.factory('CityService', function() {
		var cityService = {
			cityCollection: 
			['Toronto', 'Hanoi',
			'Calgary', 'Beijing',
			'Vancouver', 'Singapore',
			'Hong Kong', 'Jerusalem',
			'London', 'Cairo',
			'Paris', 'Sydney',
			'New York City', 'Melbourne',
			'San Francisco', 'Queenstown',
			'Barcelona', 'Salzburg',
			'Tokyo', 'Vienna',
			'Kyoto', 'Victoria',
			'Seville', 'Venice',
			'Charlestone', 'Johannesburg',
			'Santa Fe', 'Mumbai',
			'Svannah', 'Rio De Janeiro',
			'Santiago', 'Dubai',
			'Budapest', 'Milan',
			'Bangkok', 'Miami',
			'Shanghai', 'Munich',
			'Florence', 'Taipei',
			'Rome', 'Moscow',
			'New Orleans', 'Seoul',
			'Chicago', 'Berlin',
			'Montreal', 'Brussels',
			'Boston', 'Yellowknife',
			'Waterloo'],

			//Returns a random number between 0 and cityCollection.length
			generateRandomNum: function(){
				return Math.floor(Math.random() * (cityService.cityCollection.length));
			},

			//Returns a random city name from the cityCollection[]
			generateRandomCity: function(){
				return cityService.cityCollection[cityService.generateRandomNum()];
			}
		};

		return cityService;
	});
});