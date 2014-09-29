define(["servicesFactory"], function(servicesFactory) {

	servicesFactory.factory('SpringCollectionService', function() {
		var springCollection = [
			{
				name: 'Spring Wedding',
				hexColor: ['#234D20', '#36802D', '#77AB59', '#C9DF8A', '#F0F7DA']
			},

			{
				name: 'Spring Summer',
				hexColor: ['#DB7293', '#E79D5B', '#B7DEB0', '#DDC7D3', '#FFFEEB']
			},

			{
				name: 'Wake Up the Salmon',
				hexColor: ['#BF2821', '#FA6B05', '#FFED00', '#94DFEB', '#EAA794']
			},

			{
				name: 'Over April',
				hexColor: ['#E5E897', '#FFFFFF', '#E62E59', '#A62140', '#422B28']
			}	
		];

		return springCollection;
	});
});
