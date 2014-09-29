define(["servicesFactory"], function(servicesFactory) {

	servicesFactory.factory('FallCollectionService', function() {
		var fallCollection = [
			{
				name: 'Fall Night',
				hexColor: ['#994C44', '#4B4C4E', '#B97F67', '#E9E5DA', '#786F6A']
			},

			{
				name: 'Autumn Rainbow',
				hexColor: ['#6D2243', '#BA2640', '#EC5E0C', '#F78F1E', '#85871A']
			},

			{
				name: 'Autumn Sun',
				hexColor: ['#FAE6CB', '#F6D296', '#5A4B50', '#302E43', '#351017']	
			},

			{
				name: 'Halloween',
				hexColor: ['#090B09', '#665675', '#69A872', '#DC9C41', '#DFDC9A']
			}	
		];	

		return fallCollection;
	});
});