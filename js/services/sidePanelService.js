define(["servicesFactory"], function(servicesFactory) {

	servicesFactory.factory('SidePanelService', function() {
		var sidePanelService = {
			hide: function(){
				$(document).ready(function(){
					$('#sidePanel').hide('slide');
				});
			}
		};

		return sidePanelService;
	});
});