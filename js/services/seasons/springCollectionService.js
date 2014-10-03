define(["servicesFactory"], function(servicesFactory) {

	servicesFactory.factory('SpringCollectionService', function() {
		var springCollection = [
			{
				name: 'Dance to Forget',
				hexColor: ['#FF4E50', '#FC913A', '#F9D423', '#EDE574', '#E1F5C4']
			},

			{
				name: 'Spring Summer',
				hexColor: ['#DB7293', '#E79D5B', '#B7DEB0', '#DDC7D3', '#FFFEEB']
			},

			{
				name: 'Summer Night Makeout',
				hexColor: ['#E4E4C5', '#B9D48B', '#8D2036', '#CE0A31', '#D3E4C5']
			},

			{
				name: 'Over April',
				hexColor: ['#E5E897', '#FFFFFF', '#E62E59', '#A62140', '#422B28']
			}	
		];

		return springCollection;
	});
});
