define(["servicesFactory"], function(servicesFactory) {

	servicesFactory.factory('SummerCollectionService', function() {
		var summerCollection = [
			{
				name: 'Ocean Five',
				hexColor: ['#00A0B0', '#6A4A3C', '#CC333F', '#EB6841', '#EDC951']
			},

			{
				name: 'Summer Night Makeout',
				hexColor: ['#E4E4C5', '#B9D48B', '#8D2036', '#CE0A31', '#D3E4C5']
			},

			{
				name: 'Summer Salad',
				hexColor: ['#A2DE45', '#FFFEF6', '#DBD057', '#F2801A', '#EB4214']	
			},

			{
				name: 'Berry Summer',
				hexColor: ['#F1396D', '#FD6081', '#F3FFEB', '#ACC95F', '#8F9924']
			}	
		];

		return summerCollection;
	});
});
