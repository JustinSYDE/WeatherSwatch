define(["servicesFactory"], function(servicesFactory) {

	servicesFactory.factory('SummerCollectionService', function() {
		var summerCollection = [
			{
				name: 'Coup De Grace',
				hexColor: ['#99B898', '#FECEA8', '#FF847C', '#E84A5F', '#2A363B']
			},

			{
				name: 'Thought Provoking',
				hexColor: ['#ECD078', '#D95B43', '#C02942', '#542437', '#53777A']
			},

			{
				name: 'Papua New Guinea',
				hexColor: ['#5E412F', '#FCEBB6', '#78C0A8', '#F07818', '#F0A830']	
			},

			{
				name: 'Maddening Caravan',
				hexColor: ['#FAD089', '#FF9C5B', '#F5634A', '#ED303C', '#3B8183']
			}	
		];
		return summerCollection;
	});
});
