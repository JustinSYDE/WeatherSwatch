define(["servicesFactory"], function(servicesFactory) {

	servicesFactory.factory('WinterCollectionService', function() {
		var winterCollection = [
			{
				name: 'Winter Berries',
				hexColor: ['#E3E8CD', '#BCD8BF', '#D3B9A3', '#EE9C92', '#FE857E']
			},

			{
				name: 'Winter Blurs',
				hexColor: ['#C3BCC4', '#E2E7E3', '#D0E0DF', '#E7CEC7', '#5681B4']
			},

			{
				name: 'Blizzard',
				hexColor: ['#FFFFFF', '#EDEDED', '#003451', '#D0DEF2', '#E6EFFC']	
			},

			{
				name: 'Cold Front',
				hexColor: ['#F3F8F3', '#E9EFF2', '#FBFAFF', '#EDECF2', '#F6F7F1']
			}	
		];

		return winterCollection;
	});
});
