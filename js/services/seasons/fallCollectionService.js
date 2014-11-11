define(["servicesFactory"], function(servicesFactory) {

	servicesFactory.factory('FallCollectionService', function() {
		var fallCollection = [
			{
				name: 'Leaves',
				hexColor: ['#F2DBA9', '#F1CAA0', '#E3933E', '#AE895F', '#AD4E10']
			},

			{
				name: 'Maple Walnut',
				hexColor: ['#C92301', '#B3CE6D', '#49532F', '#CC811B', '#EC4F15']
			},

			{
				name: 'Autumn Oak',
				hexColor: ['#444444', '#FCF7D1', '#A9A17A', '#B52C00', '#8C0005']	
			},

			{
				name: 'Pumpkin',
				hexColor: ['#7F9B84', '#C7CD9D', '#FFE1CF', '#F2DE65', '#DB9132']
			}
		];	

		return fallCollection;
	});
});