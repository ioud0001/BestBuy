angular.module('app')
.controller('StoresCtrl', function($scope, $log, GeoService, LocalStorageService) {
  // Display nearby stores based on geolocation

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
    var bestBuyAPIendPoint = 'http://api.bestbuy.com/v1';
    var key = 'vut2jfymkd4s69cbzmhw2qbe'; 
    var city = '';
    $scope.allStores = {
        searchCity: ''
    }
    
	// Display the results of stores based on geolocation if the search data is empty
			// Get the geolocation of the person 
			
			navigator.geolocation.getCurrentPosition(function(position){
				var coords = position.coords.latitude + ',' + position.coords.longitude;
				console.log("geocontroller coords are " + coords); 
				GeoService.storeSearch(coords)
				.success(function(data){
					$scope.allStores = data.stores;
					console.log($scope.allStores);
					})
					.error(function(error){
						$log.error('Best Buy API Search error');
					})
				
			});
			// use the coordinates to find the closest Best Buy stores 
			/*
			if (StorageService.getStorageList('geodata')){
				$scope.allStores = StorageService.getStorageList('geodata');
			} else {
				$scope.allStores = [];
				StorageService.setStorageList('geodata', $scope.allStores);
			}
			*/
    $scope.searchCity = function(city){
        if (city){
            GeoService.searchByCity(city)
            .success(function(data){
                $scope.allStores = data.stores; 
                console.log($scope.allStores);
            })
            .error(function(error){
                $log.error('Best Buy API Search error');
            })
        } else {
            
        }
    }
});

