 (function(){
	var app = angular.module('controllers', []);

	var cityCollection = ['Toronto', 'Calgary', 'Vancouver', 'Hong Kong', 'London', 'Paris', 'New York City', 'San Francisco', 'Barcelona', 'Tokyo', 'Florence', 'Rome', 'New Orleans', 'Chicago', 'Montreal', 'Boston', 'Rio'];
	var cityOne = null;
	var cityTwo = null;
	var cityThree = null;

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

	var winterCollection = [
		{
			name: 'Winter Berries',
			hexColor: ['#E3E8CD', '#BCD8BF', '#D3B9A3', '#EE9C92', '#FE857E']
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

	app.controller('TabController', function(){
		this.tab = 1;

	    this.isSet = function(checkTab) {
	      return this.tab === checkTab;
	    };

	    this.setTab = function(setTab) {
	      this.tab = setTab;
	    };
	});

	app.controller('swatchController', function($timeout, $scope){
		var _this = this;
		var seasons = null;
		var randomNum = Math.floor(Math.random() * (cityCollection.length));
		var randomCity = cityCollection[randomNum];

		function myAjaxCheck(callBack){
			$.simpleWeather({
		    location: randomCity,
		    woeid: '',
		    unit: 'c',
		    success: function(weather) {
		      var temperatureTemp = parseInt(weather.temp);
		      html = '<span>'+weather.temp+'&deg;'+weather.units.temp+' '+'</span>';
		      html += '<span>'+weather.currently+'</span>';

		      $('#weather').html(html);
		      callBack(temperatureTemp);
		    }
		  });
		}

		myAjaxCheck(function(returnedTemperature){
			var date = new Date();
			var month = date.getMonth();
			var temperature = returnedTemperature;

			if (temperature >= 20){
				_this.seasons = summerCollection;	
			}

			else if (temperature>4 && temperature <20 && (month>7 && month<12)){ //Gives possibility to display fall colours even in cooler, summer months
				_this.seasons = fallCollection;
			}

			else if (temperature>4 && temperature <20 && (month>1 && month>6)) {//Gives possibility to display spring colours even in warmer, winter months
				_this.seasons = springCollection;
			}

			else if (temperature < 4){
				_this.season = winterCollection;
			}

			document.getElementById("currentCity").click();	//Bad hack that reloads the page so that the color swatch will reload
		});

		/*if warm and summer:
		//this.seasons = winterCollection;
		//this.seasons = springCollection;
		//this.seasons = fallCollection;*/

		
		this.inactive = true;

		this.copyMessage = function(){
			this.inactive = false;
			$timeout(function(){
				_this.inactive = true;
			}, 1000);	
		};
	});
})();

