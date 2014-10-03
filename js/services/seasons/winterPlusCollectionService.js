define(["servicesFactory"], function(servicesFactory) {

	servicesFactory.factory('WinterPlusCollectionService', function() {
		var winterPlusCollection = [
			{
				name: 'Ski Slope Lunch',
				hexColor: ['#FFFFFF', '#EFF0E3', '#CDD7B6', '#84A19B', '#5D888C']
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

		return winterPlusCollection;
	});
});
