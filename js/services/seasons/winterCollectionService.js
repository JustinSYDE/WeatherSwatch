define(["servicesFactory"], function(servicesFactory) {

	servicesFactory.factory('WinterCollectionService', function() {
		var winterCollection = [
			{
				name: 'Death of a Salesman',
				hexColor: ['#C9D1D3', '#F7F7F7', '#9DD3DF', '#3B3737', '#991818']
			},

			{
				name: 'Christmas Cheer',
				hexColor: ['#E8C382', '#B39D69', '#A86B4C', '#7D1A0C', '#340A0B']
			},

			{
				name: 'Christmas - Like a Dream',
				hexColor: ['#F5C8BF', '#E0D2C5', '#CAD9CA', '#A7E3C1', '#495453']	
			},

			{
				name: 'Winter Berries',
				hexColor: ['#E3E8CD', '#BCD8BF', '#D3B9A3', '#EE9C92', '#FE857E']
			},
		];

		return winterCollection;
	});
});
