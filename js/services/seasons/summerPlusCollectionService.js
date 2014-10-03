define(["servicesFactory"], function(servicesFactory) {

	servicesFactory.factory('SummerPlusCollectionService', function() {
		var summerPlusCollection = [
			{
				name: 'Ocean Five',
				hexColor: ['#00A0B0', '#6A4A3C', '#CC333F', '#EB6841', '#EDC951']
			},

			{
				name: 'Wake Up the Salmon',
				hexColor: ['#BF2821', '#FA6B05', '#FFED00', '#94DFEB', '#EAA794']
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

		return summerPlusCollection;
	});
});
