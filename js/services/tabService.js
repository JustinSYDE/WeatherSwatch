define(["servicesFactory"], function(servicesFactory) {

	servicesFactory.factory('TabService', function() {
		var tabService = {
			tab: 1,

		    isSet: function(checkTab) {
		      return tabService.tab === checkTab;
		    },

		    setTab: function(setTab) {
		      tabService.tab = setTab;
		    }
		};

		return tabService;
	});
});