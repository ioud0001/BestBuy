angular.module('app')
.factory('GeoService', function($ionicLoading, $compile, $http){
    var bestBuyAPIendPoint = 'http://api.bestbuy.com/v1';
    var key = 'vut2jfymkd4s69cbzmhw2qbe'; 
	var coords = ''; 
    
    var searchUrl;
     
    return {
        storeSearch: function(coords){
            searchUrl = bestBuyAPIendPoint + '/stores(area('+coords+',1000))?format=json&apiKey=' + key;
                // geolocation goes here
            console.log(searchUrl);
            return $http.get(searchUrl); 
        },
        searchByCity: function(city){
            searchUrl = bestBuyAPIendPoint + '/stores(city='+city+')?format=json&apiKey=' + key;
            console.log(searchUrl);
            return $http.get(searchUrl);
            
        },
		reportPosition: function(position){
				coords = position.coords.latitude + ',' + position.coords.longitude;
				console.log(coords); 
		}
        
    }
})
.factory('$localStorage', ['$window', function($window){
	return {
		set: function(key, value){
			$window.localStorage[key] = value; 
		}, 
		get: function(key, defaultValue){
			return $window.localStorage[key] || defaultValue;
		},
		setObject: function(key, value){
			$window.localStorage[key] = JSON.stringify(value); 	
		},
		getObject: function(key){
			return JSON.parse($window.localStorage[key] || '{}'); 
		}
	}
}]);


